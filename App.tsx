// Only import react-native-gesture-handler on native platforms
import "react-native-gesture-handler";

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import MenuScreen from "./screens/MenuScreen";
import ProductScreen from "./screens/ProductScreen";

const HomeStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // headerStyle: { backgroundColor: "#20b2aa" },
        // headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        // options={{
        //   title: "หน้าหลัก",
        // }}
      />
      <HomeStack.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: " เกี่ยวกับเรา",
          headerStyle: { backgroundColor: "#20b2aa" },
          headerTintColor: "white",
          headerTitleAlign: "center",
        }}
      />
      {/* <Stack.Screen name="CreatePost" component={CreatePostScreen} /> */}
    </HomeStack.Navigator>
  );
}

function ProductStackScreen() {
  return (
    <ProductStack.Navigator
      initialRouteName="Product"
      screenOptions={{
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <ProductStack.Screen name="Product" component={ProductScreen} />
    </ProductStack.Navigator>
  );
}

const App = (): React.JSX.Element => {
  return (
    // use Drawer with HeaderButtons
    <SafeAreaProvider>
      <HeaderButtonsProvider stackType="native">
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={(props) => <MenuScreen {...props} />}
          >
            <Drawer.Screen name="HomeStack" component={HomeStackScreen} />
            <Drawer.Screen name="ProductStack" component={ProductStackScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </HeaderButtonsProvider>
    </SafeAreaProvider>
  );
};

export default App;
