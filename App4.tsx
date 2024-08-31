import { StatusBar } from "expo-status-bar";
import { View, Text, FlatList } from "react-native";
import React from "react";
import ProfileScreen from "./components/ProfileScreen";
import UseEffectExample from "./components/UseEffectExample";
import FlastListExample from "./components/FlastListExample";
import FlatListcallBackend from "./components/FlatListcallBackend";
import NewsApp from "./components/NewsApp";
import AxiosgetData from "./components/AxiosgetData";
import AxiospostData from "./components/AxiospostData";
import WeatherLondon from "./components/WeatherLondon";
import WeatherBangkok from "./components/WeatherBangkok";
import ModalExample from "./components/ModalExample";
import WeatherApp from "./components/WeatherApp";
import AboutScreen from "./screens/AboutScreen";

const App = (): React.JSX.Element => {
  return (
    <View>
      {/* <ProfileScreen /> */}
      {/* <UseEffectExample /> */}
      {/* <FlastListExample /> */}
      {/* <FlatListcallBackend /> */}
      {/* <NewsApp /> */}
      {/* <AxiosgetData/> */}
      {/* <AxiospostData /> */}
      {/* <WeatherLondon /> */}
      {/* <WeatherBangkok/> */}
      {/* <ModalExample /> */}
      {/* <WeatherApp /> */}
      <AboutScreen />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
