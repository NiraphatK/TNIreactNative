import { StatusBar } from "expo-status-bar";
import { View, Text, FlatList } from "react-native";
import React from "react";
import ProfileScreen from "./components/ProfileScreen";
import UseEffectExample from "./components/UseEffectExample";
import FlastListExample from "./components/FlastListExample";
import FlatListcallBackend from "./components/FlatListcallBackend";
import NewsApp from "./components/NewsApp";

const App = (): React.JSX.Element => {
  return (
    <View>
      {/* <ProfileScreen /> */}
      {/* <UseEffectExample /> */}
      {/* <FlastListExample /> */}
      {/* <FlatListcallBackend /> */}
      <NewsApp />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
