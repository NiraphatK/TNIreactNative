import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const HomeScreen = ({ navigation, route }: any): React.JSX.Element => {
  const gotoAbout = () => {
    navigation.navigate("About", {
      companyName: "Thai-Nichi Institute of Technology",
      companyId: 100,
    });
  };
  const gotoCreatePost = () => {
    navigation.navigate("CreatePost");
  };
  return (
    <View style={styles.container}>
      <MaterialIcon name="home" size={40} color="pink" />
      <Text style={styles.header}>HomeScreen</Text>
      <Button title="ABOUT US" onPress={gotoAbout} />
      <View style={styles.postContainer}>
        <Button title="CREATE POST" onPress={gotoCreatePost} />
        <Text style={styles.postText}>
          Post: <Text style={styles.postContent}>{route.params?.post}</Text>
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  postContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  postText: {
    margin: 10,
    fontSize: 16,
  },
  postContent: {
    color: "blue", // เปลี่ยนสีข้อความที่ถูกส่งกลับมา​
    fontWeight: "bold",
  },
});