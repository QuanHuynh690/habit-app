import { FlatColors } from "@/shared/constants/Colors";
import React, { useState } from "react";
import { Switch as RNSwitch, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const Switch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <RNSwitch
          trackColor={{
            false: FlatColors["black-10"],
            true: FlatColors["success-100"],
          }}
          thumbColor={FlatColors["base-white"]}
          ios_backgroundColor={FlatColors["black-10"]}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default Switch;