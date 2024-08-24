import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface WeatherState {
  data: any;
  loading: boolean;
  error: string | null;
}

const WeatherBangkok = (): React.JSX.Element => {
  const [state, setState] = useState<WeatherState>({
    data: null,
    loading: true,
    error: null,
  }); // set default state

  const fetWeatherData = async () => {
    const API_KEY = "d78aaab2d84844433d115114fb3bb62e";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=${API_KEY}&units=metric&lang=th`;
    try {
      const res = await axios.get(URL);
      setState({
        data: res.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: "Failed to fetch weather data",
      });
    }
  };

  useEffect(() => {
    fetWeatherData();
  }, []);

  if (state.loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={"large"} color={"#0000ff"} />
      </View>
    );
  }

  if (state.error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{state.error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={{ paddingTop: 25 }}>
        {new Date().toLocaleString("th-TH", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </Text>
      <Text style={styles.cityName}>{state.data.name}</Text>
      <Text style={styles.temp}>{state.data.main.temp}°C</Text>
      <Text style={styles.weatherMain}>{state.data.weather[0].main}</Text>
      <Text style={styles.weatherDescription}>
        {state.data.weather[0].description}
      </Text>

      <FlatList
        data={[
          { key: "รู้สึกเหมือน", value: `${state.data.main.feels_like}°C` }, // defind key name and value
          { key: "อุณหภูมิต่ำสุด", value: `${state.data.main.temp_min}°C` },
          { key: "อุณหภูมิสูงสุด", value: `${state.data.main.temp_max}°C` },
          { key: "ความชื้น", value: `${state.data.main.humidity}%` },
          { key: "ความกดอากาศ", value: `${state.data.main.pressure} hPa` },
        ]} // defind array object
        renderItem={({ item }) => (
          <View style={styles.detailContainer}>
            <Text style={styles.detailKey}>{item.key}: </Text>
            <Text style={styles.detailValue}>{item.value}</Text>
          </View>
        )}
        contentContainerStyle={styles.details}
      />
    </View>
  );
};

export default WeatherBangkok;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
    // marginTop: 50,
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
  cityName: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  temp: {
    fontSize: 64,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#ff6347",
  },
  weatherMain: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  weatherDescription: {
    fontSize: 20,
    fontStyle: "italic",
    marginBottom: 16,
    color: "#666",
  },
  details: {
    marginTop: 16,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  detailKey: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  detailValue: {
    fontSize: 18,
    color: "#333",
  },
});
