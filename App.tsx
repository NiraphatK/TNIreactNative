// Only import react-native-gesture-handler on native platforms
import "react-native-gesture-handler";

import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import MenuScreen from "./screens/MenuScreen";
import ProductScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/DetailScreen";
import LoginScreen from "./screens/LoginScreen";
import Toast from "react-native-toast-message";

const HomeStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();

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
      <ProductStack.Screen name="Details" component={DetailScreen} />
    </ProductStack.Navigator>
  );
}

function LoginStackScreen() {
  return (
    <LoginStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <LoginStack.Screen name="Login" component={LoginScreen} />
    </LoginStack.Navigator>
  );
}

const App = (): React.JSX.Element => {
  const [isLogin] = useState(false); // not update state (for check is login or not)

  return (
    <>
      {/* use Drawer with HeaderButtons */}
      <SafeAreaProvider>
        <NavigationContainer>
          <HeaderButtonsProvider stackType="native">
            {isLogin ? (
              <Drawer.Navigator
                screenOptions={{ headerShown: false }}
                drawerContent={(props) => <MenuScreen {...props} />}
              >
                <Drawer.Screen name="HomeStack" component={HomeStackScreen} />
                <Drawer.Screen
                  name="ProductStack"
                  component={ProductStackScreen}
                />
              </Drawer.Navigator>
            ) : (
              <LoginStackScreen />
            )}
          </HeaderButtonsProvider>
        </NavigationContainer>
      </SafeAreaProvider>
      <Toast />
    </>
  );
};

export default App;
