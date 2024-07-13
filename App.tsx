import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";

export default function App(): React.JSX.Element {
  const onClick = () => {
    Alert.alert("Hi", "Hello React.JS");
  };

  const users = [
    { id: 1001, name: "John" },
    { id: 1002, name: "Mary" },
  ];
  return (
    <View style={styles.container}>
      <AppHeader title="This is header" year={2003} />
      <AppHeader title="This is header two" />
      <Text>Hello React Native!</Text>
      {users.map((user, index) => {
        return (
          <Text key={user.id}>
            No. {index + 1} ID: {user.id} Name: {user.name}
          </Text>
        );
      })}
      <Button
        title="Click me"
        onPress={onClick}
        color="blue"
        // onPress={() => {
        //   Alert.alert("Hi", "React Native is Fun!!");
        // }}
      />
      <AppFooter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
