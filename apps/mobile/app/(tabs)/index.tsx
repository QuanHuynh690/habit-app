import {
  Image,
  StyleSheet,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import moment from "moment";
import React, { useState } from "react";
import { router, useRouter } from "expo-router";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Card } from "@/components/ui/design-icons";
import WeatherView from "@/components/weather/WeatherView";
import HorizontalCalendar from "@/components/calendar-strip/CalendarStrip";

export default function HomeScreen() {
  const [selectedDate, setSelectedDate] = useState(moment());
  // const currentUser = useCurrentUser();
  const router = useRouter();
  const onDateSelected = (date: any) => {
    console.log("Selected date:", date.toISOString());
    setSelectedDate(date);
  };
  return (
    <ScrollView>
      <ThemedView style={{ flex: 1 }} lightColor="transparent">
        <HorizontalCalendar
          selectedDate={selectedDate}
          onDateSelected={onDateSelected}
        />
        <View style={styles.challengeList}>
          <View style={styles.sectionTitleCont}>
            <Text style={styles.sectionTitle}>Challenges</Text>
            <TouchableOpacity onPress={() => router.push("/explore")}>
              <Text className="text-primary-blue-100 font-bold">View all</Text>
            </TouchableOpacity>
          </View>
          {/* {currentUser?.currentUser?.joinedChallenges.map(
            (challenge, index) => {
              return (
                <View key={index}>
                <Card
                title={challenge.name}
                target={challenge.target}
                progress={challenge.progress}
                type={challenge.type}
                />
                </View>
                );
                }
                )} */}
        </View>

        {/* <WalletConnect /> */}
        <View style={styles.weatherView}>
          <WeatherView selectedDate={selectedDate} />
        </View>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  weatherView: {
    flex: 1,
    paddingHorizontal: 32,
    borderRadius: 16,
  },
  challengeList: {
    padding: 32,
  },
  sectionTitleCont: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  sectionTitle: {
    fontWeight: "bold",
  },
  viewAll: {
    color: "#4ca2ff",
    textTransform: "uppercase",
    fontSize: 12,
    fontWeight: "bold",
  },
});
