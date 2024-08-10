import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const FlastListExample = (): React.JSX.Element => {
  interface UserItem {
    id: string;
    name: string;
    email: string;
  }

  const user: UserItem[] = [
    { id: "1", name: "Alice", email: "alice@example.com" },
    { id: "2", name: "Bob", email: "bob@example.com" },
    { id: "3", name: "Cara", email: "cara@example.com" },
  ];

  interface RenderItemProps {
    item: UserItem;
  }

  const _renderItem = (
    { item }: RenderItemProps //  { item }: {item:UserItem} 
  ) => ( // return
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={user} // define data of FlatList
        renderItem={_renderItem} // create _renerItem Function
        keyExtractor={(item) => item.id} // define primary key each items
      />
    </View>
  );
};

export default FlastListExample;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
  },
});
