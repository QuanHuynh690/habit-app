import "../global.css";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, Stack, usePathname } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React,{ useEffect } from "react";
import { View } from "react-native";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import IconButton from "@/components/icon-button/IconButton";
import { IconSymbol } from "@/components/ui/IconSymbol";

import Header from "@/components/header/Header";
import { getTitleFromPath } from "@shared/utilities/getTitleFromPath";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const pathname = usePathname();
  const [loaded] = useFonts({
    AirbnbCereal_W_Md: require("../assets/fonts/AirbnbCereal_W_Md.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          header: () => (
            <Header
              isBackable
              title={getTitleFromPath(pathname)}
              headerButtonAction={() => router.push("/setting")}
              className="h-36"
            />
          ),
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            contentStyle: {
              backgroundColor: "#f6f9ff",
            },
          }}
        />
        <Stack.Screen name="+not-found" />
        <Stack.Screen
          name="setting/index"
          options={{
            headerBackButtonMenuEnabled: true,
            contentStyle: {
              backgroundColor: "red",
            },
            headerTitle: "Settings",
          }}
        />
        <Stack.Screen
          name="setting/general"
          options={{
            headerBackButtonMenuEnabled: true,
            contentStyle: {
              backgroundColor: "#f6f9ff",
            },
            headerTitle: "General",
          }}
        />
        <Stack.Screen
          name="setting/security"
          options={{
            headerBackButtonMenuEnabled: true,
            contentStyle: {
              backgroundColor: "#f6f9ff",
            },
            headerTitle: "Security",
          }}
        />
        <Stack.Screen
          name="setting/notification"
          options={{
            headerBackButtonMenuEnabled: true,
            contentStyle: {
              backgroundColor: "#f6f9ff",
            },
            headerTitle: "Notifications",
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
