//import { Tabs, TabSlot, TabList, TabTrigger } from 'expo-router/ui';
import { Tabs } from "expo-router";
import React from "react";
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/shared/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import SvgHome1 from "@/components/ui/design-icons/Home1";
import {
  Discovery,
  Medal,
  PlusCrFr,
  Profile,
} from "@/components/ui/design-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarItemStyle: {
          //padding: 10,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            height: 64,
            // backgroundColor: "white",
            bottom: 25,
            left: 16,
            right: 16,
            position: "absolute",
            borderRadius: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            borderWidth: 1,
          },
          default: {
            height: 64,
            // backgroundColor: "white",
            bottom: 25,
            left: 16,
            right: 16,
            position: "absolute",
            borderRadius: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            borderWidth: 1,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <SvgHome1 color={color} />,
          tabBarActiveTintColor: "#3843ff",
          tabBarIconStyle: {
            height: "100%",
            paddingHorizontal: 35,
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Discovery color={color} />,
          tabBarActiveTintColor: "#3843ff",
          tabBarIconStyle: {
            height: "100%",
            paddingHorizontal: 35,
          },
        }}
      />

      <Tabs.Screen
        name="create"
        options={{
          tabBarButton: () => (
            <View>
              <TouchableOpacity onPress={() => alert("Icon Button Pressed!")}>
                <PlusCrFr width={48} height={48} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="activity"
        options={{
          title: "Activity",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Medal color={color} />,
          tabBarActiveTintColor: "#3843ff",
          tabBarIconStyle: {
            height: "100%",
            paddingHorizontal: 35,
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Profile color={color} />,
          tabBarActiveTintColor: "#3843ff",
          tabBarIconStyle: {
            height: "100%",
            // paddingHorizontal: 35,
          },
        }}
      />
    </Tabs>
    //<Tabs>
    //  <TabSlot />
    //  <TabList
    //    style={styles.bottomTabWrapper}
    //  >
    //    <TabTrigger name="home" href="/">
    //      <IconSymbol size={24} name="house.fill" />
    //    </TabTrigger>
    //    <TabTrigger name="explore" href="/explore">
    //      <IconSymbol size={24} name="explore" />
    //    </TabTrigger>

    //    <View style={{ flexDirection: 'row', alignItems: 'center', width: 48 }}>
    //      <TouchableOpacity onPress={() => alert('Icon Button Pressed!')}>
    //        <IconSymbol size={48} name="add-circle" />
    //      </TouchableOpacity>
    //    </View>

    //    <TabTrigger name="activity" href="/activity">
    //      <IconSymbol size={24} name="local-activity" />
    //    </TabTrigger>
    //    <TabTrigger name="profile" href="/profile">
    //      <IconSymbol size={24} name="person" />
    //    </TabTrigger>
    //  </TabList>
    //</Tabs>
  );
}

const styles = StyleSheet.create({
  bottomTabWrapper: {
    height: 64,
    backgroundColor: "white",
    color: "#808080",
    bottom: 25,
    left: 16,
    right: 16,
    position: "absolute",
    borderRadius: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },

  tabBarButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 48,
  },
});
