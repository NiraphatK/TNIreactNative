import { StyleSheet, Text, View, Image, Button } from "react-native";
import React, { useState } from "react";
import styles from "../styles/styles";

const ProfileScreen = (): React.JSX.Element => {
  const profileImage = require("../assets/profileImage.jpg");
  const profileImage2 = require("../assets/profileImage2.jpg");
  const [name, setName] = useState("Niraphat Konghuayrob");
  const [image, setImage] = useState(profileImage);

  const handleChangeName = () => {
    setName("Phat");
  };
  const handleChangeImage = () => {
    setImage(profileImage2);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={image} />
        <View>
          <Text style={styles.profileName}>{name}</Text>
          <Button title="CHANGE NAME" onPress={handleChangeName} />
          <Text>{"\n"}</Text>
          <Button title="CHANGE IMAGE" onPress={handleChangeImage} />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
