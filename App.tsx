import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";

export default function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <AppHeader name="Niraphat Konghuayrob" msg="Message from App.tsx" />
      <Content msg="Message from App.tsx" name="Niraphat Konghuayrob" />
      <AppFooter title="Thai-Nichi Institute of Technology" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
