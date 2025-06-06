import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import SettingSection from "@/components/setting/setting-section/SettingSection";

export default function SettingScreen() {
  return (
    <ThemedView className="px-6 py-3">
      <ThemedText>General setting</ThemedText>
    </ThemedView>
  );
}
