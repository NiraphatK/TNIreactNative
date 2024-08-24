import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

type User = {
  id: number;
  name: string;
  email: string;
};

const AxiosgetData = (): React.JSX.Element => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Get data by axios
  const fetchData = async () => {
    try {
      const res = await axios
        .get<User[]>("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setUsers(res.data);
        });
    } catch {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    } // end of try catch
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size={"large"} color={"#0000ff"} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={users}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.email}>{item.email}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default AxiosgetData;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
  },
});
