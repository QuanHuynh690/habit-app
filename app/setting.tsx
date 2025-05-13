import { Image, View } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ProfileTab } from "@/shared/enums/profile";
import { SceneMap } from "react-native-tab-view";
import TabViewScreen from "@/components/tab-view-screen/TabViewScreen";
import {
  Edit1,
  Filter,
  Medal,
  Plus,
  Setting,
} from "@/components/ui/design-icons";
import Header from "@/components/header/Header";
import { FlatColors } from "@/shared/constants/Colors";
import { mockFriends } from "@/shared/mocks/friends";
import { activityLog } from "@/shared/mocks/activityLogs";
import ItemList from "@/components/item-list/ItemList";
import SettingSection from "@/components/setting/setting-section/SettingSection";



export default function SettingScreen() {
  return (

    <ThemedView className='px-6 py-3'>
      <SettingSection title="General" />
      <SettingSection title="About us" className="mt-3" />
    </ThemedView>
  );
}