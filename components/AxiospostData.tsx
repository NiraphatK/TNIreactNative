import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import axios from "axios";

const AxiospostData = (): React.JSX.Element => {
  const [formData, setFromData] = useState({ name: "", email: "" }); // set name, email = ""

  const handleInputChange = (key: string, value: string) => {
    setFromData((prevState) => ({ ...prevState, [key]: value })); // more detail slide page 56
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        formData // sent fomrData to URL
      );
      Alert.alert(
        "User Created",
        `ID ${res.data.id}\nName ${res.data.name}\nEmail ${res.data.email}
        `
      );
    } catch (error) {
      Alert.alert("Error", "Failed to create user");
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={formData.name}
        onChangeText={(value) => handleInputChange("name", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={formData.email}
        onChangeText={(value) => handleInputChange("email", value)}
      />
      <Button title="Create User" onPress={handleSubmit} />
    </View>
  );
};

export default AxiospostData;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    marginTop: 50,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
});
