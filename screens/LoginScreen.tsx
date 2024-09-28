import { View } from "react-native";
import React, { useState } from "react";
import { Text, Card, Input, Button, Icon } from "@rneui/base";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller, set } from "react-hook-form";
import Toast from "react-native-toast-message";
import { setIsLogin } from "../auth/auth-slice";
import { useAppDispatch } from "../redux-toolkit/hooks";

import { login } from "../services/auth-service";
import { AxiosError } from "../services/http-service";

const LoginScreen = (): React.JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();

  // Define Validation with Yup
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please input email")
      .email("Email format is invalid"),
    password: yup
      .string()
      .required("Please input password")
      .min(3, "The password must have at least 3 characters"),
  });

  // Apply with React Hook form
  const {
    control, // control input
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all", // do all case
  });

  const onLogin = async (data: any) => {
    try {
      const res = await login(data.email, data.password);
      if (res.status === 200) {
        dispatch(setIsLogin(true));
        // Toast.show({ type: "success", text1: "Login Successfully" });
        // console.log("Login Successfully");
      }
    } catch (error: any) {
      let err: AxiosError<any> = error; // convert to AxiosError
      if (err.response?.status === 401) {
        Toast.show({ type: "error", text1: err.response.data.message });
        // console.log(err.response.data.message);
      } else {
        // console.log("Unable connect to the server.");
        Toast.show({ type: "error", text1: "Unable connect to the server." });
      }
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text h2>Thai-Nichi</Text>
      <Card containerStyle={{ padding: 10, width: "90%" }}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <Input
              placeholder="Email"
              leftIcon={{ name: "email" }}
              keyboardType="email-address"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <Input
              placeholder="Password"
              leftIcon={{ name: "key" }}
              rightIcon={
                // Icon toggle show and hide password
                <Icon
                  name={showPassword ? "eye" : "eye-off"}
                  type="feather"
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
              keyboardType="default"
              secureTextEntry={!showPassword}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.password?.message}
            />
          )}
        />

        <Button
          title="Login"
          size="lg"
          onPress={handleSubmit(onLogin)}
          loading={isSubmitting}
          disabled={!isValid}
        />
      </Card>
    </View>
  );
};

export default LoginScreen;
