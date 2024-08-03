import { View, Text, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import { stylesLogin } from "../styles/styles";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!name) {
      Alert.alert("Alert","Please Enter Name");
    }
    if (!email) {
      Alert.alert("Alert","Please Enter Email");
    }
    if (name && email){
      Alert.alert("Alert","Success");
    }
  };
  return (
    <View style={stylesLogin.container}>
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="SUBMIT" onPress={handleSubmit} />
    </View>
  );
};

export default Login;
