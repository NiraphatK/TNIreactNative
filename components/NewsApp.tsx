import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

const API_KEY = "f1c98ecbafd24b6c8cf43895102e4c8f"; // ใส่ API Key ของนักศึกษาที่นี่
const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

interface articles {
  title: string;
  description: string;
  publishedAt: string;
  url: string;
}

const NewsApp = () => {
  const [data, setData] = useState<articles[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data.articles);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setIsLoading(false);
      });
  }, []);

  interface RenderItemProps {
    item: articles;
  }
  const _renderItem = ({ item }: RenderItemProps) => (
    <View style={styles.card}>
      <Text style={styles.headline}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.date}>
        {new Date(item.publishedAt).toLocaleDateString()}
      </Text>
    </View>
  );
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <FlatList
          data={data}
          renderItem={_renderItem}
          keyExtractor={(item) => item.url}
        />
      )}
    </View>
  );
};

export default NewsApp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e3f3ff",
    padding: 16,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  card: {
    backgroundColor: "#bbe1ff",
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  headline: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: "#888",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#333",
  },
});
