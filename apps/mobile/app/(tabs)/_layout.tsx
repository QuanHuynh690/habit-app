//import { Tabs, TabSlot, TabList, TabTrigger } from 'expo-router/ui';
import { Tabs, useRouter } from "expo-router";
import React from "react";
import { Platform, TouchableOpacity, View } from "react-native";

import { IconSymbol } from "@/components/ui/IconSymbol";
import { useColorScheme } from "@/hooks/useColorScheme";
import Header from "@/components/header/Header";
import { Colors, FlatColors } from "@shared/constants/Colors";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarItemStyle: {
          //padding: 10,
          width: "100%",
          height: 64,
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
            start: 16,
            end: 16,
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
          tabBarIcon: ({ color }) => <IconSymbol name="Home1" color={color} />,
          tabBarActiveTintColor: "#3843ff",
          tabBarIconStyle: {
            height: "100%",
            paddingHorizontal: 35,
          },
          header: () => (
            <Header
              rightIcon={
                <IconSymbol
                  name="Search1"
                  color={FlatColors["black-20"]}
                  secondColor={FlatColors["black-100"]}
                />
              }
              title="Home"
              headerButtonAction={() => alert("Search habit or challenge")}
            />
          ),
          sceneStyle: {
            backgroundColor: "#f6f9ff",
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          header: () => (
            <Header
              rightIcon={
                <IconSymbol
                  name="Search1"
                  color={FlatColors["black-20"]}
                  secondColor={FlatColors["black-100"]}
                />
              }
              title="Explore"
              headerButtonAction={() => alert("Search habit or challenge")}
            />
          ),
          title: "Explore",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <IconSymbol name="Discovery" color={color} />
          ),
          tabBarActiveTintColor: "#3843ff",
          tabBarIconStyle: {
            height: "100%",
            paddingHorizontal: 35,
          },
          sceneStyle: {
            backgroundColor: "#f6f9ff",
          },
        }}
      />

      <Tabs.Screen
        name="create"
        options={{
          tabBarButton: () => (
            <View>
              <TouchableOpacity onPress={() => alert("Icon Button Pressed!")}>
                <IconSymbol name="PlusCrFr" width={48} height={48} />
              </TouchableOpacity>
            </View>
          ),
          sceneStyle: {
            backgroundColor: "#f6f9ff",
          },
        }}
      />

      <Tabs.Screen
        name="activity"
        options={{
          title: "Activity",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <IconSymbol name="Medal" color={color} />,
          tabBarActiveTintColor: "#3843ff",
          tabBarIconStyle: {
            height: "100%",
            paddingHorizontal: 35,
          },
          sceneStyle: {
            backgroundColor: "#f6f9ff",
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          header: () => (
            <Header
              rightIcon={<IconSymbol name="Setting" />}
              title="Your Profile"
              headerButtonAction={() => router.push("/setting")}
            />
          ),
          title: "Profile",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <IconSymbol name="Profile" color={color} />
          ),
          tabBarActiveTintColor: "#3843ff",
          tabBarIconStyle: {
            height: "100%",
            // paddingHorizontal: 35,
          },
          sceneStyle: {
            backgroundColor: "#f6f9ff",
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
