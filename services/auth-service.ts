import AsyncStorage from "@react-native-async-storage/async-storage";
import { http } from "./http-service";

// Login
export async function login(email: string, password: string) {
  const res = await http.post("https://api.codingthailand.com/api/login", {
    email: email,
    password: password,
  });

  // Save token to storage
  await AsyncStorage.setItem("@token", JSON.stringify(res.data)); // key, value
  return res;
}

// Logout
export async function logout() {
  await AsyncStorage.removeItem("@token");
}

// Get Profile
export async function getProfile() {
  const tokenString = await AsyncStorage.getItem("@token");

  // if dont have a token
  if (!tokenString) {
    return null;
  }
  
  // if have a token
  const token = JSON.parse(tokenString); // convert to object
  const res = await http.get("https://api.codingthailand.com/api/profile", {
    headers: { Authorization: "Bearer " + token.access_token },
  });
  return res;
}
