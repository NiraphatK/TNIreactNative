import { View, Text } from "react-native";
import React from "react";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CreatePostScreen from "./screens/CreatePostScreen";

const App = (): React.JSX.Element => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#20b2aa" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "หน้าหลัก",
            headerTitleAlign: "left",
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{
            title: " เกี่ยวกับเรา",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
