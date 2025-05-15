import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";
import { useColorScheme } from "@/hooks/useColorScheme";
import IconButton from "@/components/icon-button/IconButton";
import { ArrowLeft2 } from "@/components/ui/design-icons";
import { View } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    "AirbnbCereal_W_Md": require("../assets/fonts/AirbnbCereal_W_Md.otf"),
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
      <Stack screenOptions={{
        headerLeft: () =>
          <View className="pl-6 pr-2">
            <IconButton icon={<ArrowLeft2 />}
              width={48}
              height={48} onPress={() => router.back()} />
          </View>,
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: "bold"
        }
      }}>
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
          name="setting"
          options={{
            headerBackButtonMenuEnabled: true,
            contentStyle: {
              backgroundColor: "#f6f9ff",
            },
            headerTitle: "Settings"
          }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
