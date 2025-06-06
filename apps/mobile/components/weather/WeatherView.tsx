import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ColorValue,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import { EXPO_PUBLIC_WEATHER_API_KEY } from "@env";
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const CITY = "Ho Chi Minh";

const getGradient = (
  condition: string
): [ColorValue, ColorValue, ...ColorValue[]] => {
  condition = condition.toLowerCase();
  if (condition.includes("rain") || condition.includes("storm")) {
    return ["#4e54c8", "#8f94fb"];
  } else if (condition.includes("cloud")) {
    return ["#bdc3c7", "#2c3e50"];
  } else if (condition.includes("clear") || condition.includes("sunny")) {
    return ["#fceabb", "#f8b500"];
  } else if (condition.includes("snow")) {
    return ["#83a4d4", "#b6fbff"];
  } else if (condition.includes("night")) {
    return ["#232526", "#414345"];
  }
  return ["#00c6ff", "#0072ff"];
};

const WeatherView = ({ selectedDate }: any) => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchWeather = async (date: moment.Moment) => {
    try {
      const response = await axios.get(
        "https://api.weatherapi.com/v1/forecast.json",
        {
          params: {
            key: EXPO_PUBLIC_WEATHER_API_KEY,
            q: CITY,
            dt: date.format("YYYY-MM-DD"),
          },
        }
      );
      setWeather({
        location: response.data.location,
        forecast: response.data.forecast.forecastday[0],
      });
      setLoading(false);
    } catch (error) {
      console.error("Weather fetch error:", error);
      setWeather(null);
    }
  };
  useEffect(() => {
    fetchWeather(selectedDate);
  }, [selectedDate]);
  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  if (!weather) {
    return <Text style={styles.error}>Cannot get weather data.</Text>;
  }

  const { location, forecast } = weather;
  const { day } = forecast;
  const gradientColors = getGradient(day.condition.text);
  console.log("day", day);

  return (
    <LinearGradient colors={gradientColors} style={styles.container}>
      <Text style={styles.city}>
        {location.name}, {location.country}
      </Text>
      <Image
        source={{ uri: "https:" + day.condition.icon }}
        style={styles.icon}
      />
      <Text style={styles.temp}>{day.avgtemp_c}°C</Text>
      <Text style={styles.condition}>{day.condition.text}</Text>
      <Text style={styles.feels}>
        Max: {day.maxtemp_c}°C - Min: {day.mintemp_c}°C
      </Text>
      <Text style={styles.wind}>Wind: {day.maxwind_kph} km/h</Text>
      <Text style={styles.humidity}>Average humidity: {day.avghumidity}%</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 16,
  },
  loader: { flex: 1 },
  city: { fontSize: 26, fontWeight: "600", color: "white", marginBottom: 10 },
  icon: { width: 80, height: 80 },
  temp: { fontSize: 48, fontWeight: "bold", color: "white", marginVertical: 8 },
  condition: { fontSize: 22, fontStyle: "italic", color: "#eee" },
  feels: { fontSize: 16, color: "white", marginTop: 8 },
  wind: { fontSize: 16, color: "white" },
  humidity: { fontSize: 16, color: "white" },
  error: { flex: 1, textAlign: "center", marginTop: 100, fontSize: 16 },
});

export default WeatherView;
