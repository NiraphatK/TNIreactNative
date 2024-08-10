import { StatusBar } from "expo-status-bar";
import { View, Text, FlatList } from "react-native";
import React from "react";
import ProfileScreen from "./components/ProfileScreen";
import UseEffectExample from "./components/UseEffectExample";
import FlastListExample from "./components/FlastListExample";
import FlatListcallBackend from "./components/FlatListcallBackend";

const App = (): React.JSX.Element => {
  return (
    <View>
      {/* <ProfileScreen /> */}
      {/* <UseEffectExample /> */}
      {/* <FlastListExample /> */}
      <FlatListcallBackend />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
