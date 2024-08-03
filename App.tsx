import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import React from "react";
import ProfileScreen from "./components/ProfileScreen";
import UseEffectExample from "./components/UseEffectExample";

const App = (): React.JSX.Element => {
  return (
    <View>
      <ProfileScreen />
      {/* <UseEffectExample /> */}
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
