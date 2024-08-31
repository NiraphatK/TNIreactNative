import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { stylesLogin } from "../styles/styles";

const AboutScreen = ({ route }: any): React.JSX.Element => {
  const { companyName, companyId } = route.params;
  return (
    <ImageBackground
      source={require("../assets/bg.png")}
      style={styles.bgImage}
    >
      <SafeAreaView>
        {/* Static Image Resources​ */}
        <Image
          source={require("../assets/building.png")}
          resizeMode="contain"
          style={styles.myImage}
        />

        <Text>
          {companyName} {companyId}
        </Text>

        {/* Network Requests for Images */}
        <Image
          source={{
            uri: "https://codingthailand.com/site/img/camera.png",
          }}
          style={styles.myImageNetwork}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  myImage: {
    width: "100%",
    height: 200,
    marginTop: 50,
  },
  myImageNetwork: {
    width: 50,
    height: 50,
    marginTop: 10,
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
});
