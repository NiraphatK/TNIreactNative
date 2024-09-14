import {
  ActivityIndicator,
  ListRenderItem,
  Text,
  View,
  FlatList,
} from "react-native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import { Avatar, Badge, ListItem } from "@rneui/base";

import { findAllProduct } from "../services/product-service";

const MaterialHeaderButton = (props: any) => (
  <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
);

const ProductScreen = (): React.JSX.Element => {
  const navigation = useNavigation<any>();
  const [product, setProduct] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Product",
      headerTitleAlign: "center",
      headerTitleStyle: { fontWeight: "normal" },
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const getProduct = async () => {
    try {
      const res = await findAllProduct();
      // console.log(res.data.data);
      setLoading(true);
      setProduct(res.data.data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getProduct();
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
        {/* <Text>{item.title}</Text>
        <Text>{item.detail}</Text> */}

        <ListItem
          bottomDivider
          onPress={() => navigation.navigate("Details", { item })}
        >
          <Avatar source={{ uri: item.picture }} size={50} rounded />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
            <ListItem.Subtitle>{item.detail}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
          <Badge value={item.view} status="success"></Badge>
        </ListItem>
      </>
    );
  };

  return (
    <View>
      <FlatList
        data={product}
        renderItem={_renderItem}
        keyExtractor={(item: any) => item.id.toString()}
        onRefresh={async () => await getProduct()}
        refreshing={loading}
      />

      {/* <Text>{JSON.stringify(product)}</Text> */}
    </View>
  );
};

export default ProductScreen;
