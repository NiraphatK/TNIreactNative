import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { findProductbyID } from "../services/product-service";
import { ListItem, Tile } from "@rneui/base";

const DetailScreen = (): React.JSX.Element => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { item } = route.params;

  const [loading, setLoading] = useState<boolean>(false);
  const [detail, setDetail] = useState<any>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: item.title,
    });
  }, [navigation, route]);

  const getProductbyID = async () => {
    try {
      setLoading(true);
      const res = await findProductbyID(item.id);
      //   console.log(res.data.data);
      setDetail(res.data.data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getProductbyID();
    }, [])
  );

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  const _renderItem: ListRenderItem<any> = ({ item }) => {
    return (
      <>
        <Tile
          imageSrc={{
            uri: "https://e1.pxfuel.com/desktop-wallpaper/879/314/desktop-wallpaper-big-sun-neon-mountains-artist-backgrounds-and-neon-mountain.jpg",
          }}
          title={item.ch_title}
          titleStyle={styles.titleStyle}
          caption={item.ch_dateadd}
          captionStyle={styles.captionStyle}
          containerStyle={styles.tileContainer}
          featured
          activeOpacity={0.9}
          width={Dimensions.get("screen").width - 20}
        />
      </>
    );
  };

  return (
    <View>
      {/* FlatList */}
      <FlatList
        data={detail}
        renderItem={_renderItem}
        keyExtractor={(item: any) => item.ch_id.toString()}
        onRefresh={async () => await getProductbyID()}
        refreshing={loading}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0", // สีพื้นหลัง
  },
  listContent: {
    paddingHorizontal: 10, // การเว้นวรรคขอบซ้ายและขวาเท่ากัน
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#dddddd", // สีขาวส าหรับชื่อ
  },
  tileContainer: {
    borderRadius: 10, //ก าหนดให้มุมของ container มีความโค้งมน
    overflow: "hidden", //ก าหนดให้เนื้อหาที่อาจล้นออกจากขอบของ container ไม่แสดงผล
    marginBottom: 10, //ก าหนดระยะห่างจากขอบล่างของ container ไปยัง element ต่อไปที่อยู่ด้านล่าง
    elevation: 5, // เงาส าหรับ Android
    shadowOffset: { width: 0, height: 2 }, //ก าหนดต าแหน่งของเงาที่แสดงผล
    shadowOpacity: 0.25, //ก าหนดระดับความโปร่งแสงของเงา
    shadowRadius: 3.84, //ก าหนดรัศมีของการกระจายตัวของเงา
    opacity: 1, // ความโปร่งใสของภาพ , ค่าน้อยจะโปร่งใสมาก
  },
  captionStyle: {
    fontSize: 14,
    color: "#dddddd", // สีขาวส าหรับวันที่
  },
});

export default DetailScreen;
