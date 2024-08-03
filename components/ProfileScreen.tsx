import { StyleSheet, Text, View, Image, Button } from "react-native";
import React, { useState } from "react";
import { stylesProfile } from "../styles/styles";
import Login from "./Login";

const ProfileScreen = (): React.JSX.Element => {
  const profileImage = require("../assets/profileImage.jpg");
  const profileImage2 = require("../assets/profileImage2.jpg");
  const [name, setName] = useState("Niraphat Konghuayrob");
  const [image, setImage] = useState(profileImage);

  const handleChangeName = () => {
    setName(name == "Niraphat Konghuayrob" ? "Phat" : "Niraphat Konghuayrob");
  };
  const handleChangeImage = () => {
    setImage(image == profileImage ? profileImage2 : profileImage);
  };

  return (
    <View style={stylesProfile.container}>
      <View style={stylesProfile.profileContainer}>
        <Image style={stylesProfile.profileImage} source={image} />
        <View>
          <Text style={stylesProfile.profileName}>{name}</Text>
          <Button title="CHANGE NAME" onPress={handleChangeName} />
          <Text>{"\n"}</Text>
          <Button title="CHANGE IMAGE" onPress={handleChangeImage} />
        </View>
      </View>
      <Login />
    </View>
  );
};

export default ProfileScreen;
