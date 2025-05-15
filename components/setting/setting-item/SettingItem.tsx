import { ReactElement } from "react";
import { ProfileTab } from "@/shared/enums/profile";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatColors } from "@/shared/constants/Colors";
import { ThemedText } from "@/components/ThemedText";

interface SettingItemProps {
  title: string;
  icon: ReactElement;
  isLast?: boolean
}
const SettingItem = (props: SettingItemProps) => {
  const { title, icon, isLast } = props;
  return (
    <View className="h-14 items-center flex flex-row justify-between w-full" style={isLast ? styles.lastItem : styles.item}>
      <View className="flex flex-row justify-between items-center">
        {icon}
        <ThemedText className="ml-2">{title}</ThemedText>
      </View>
      <View>{icon}</View>
    </View>
  );
};
export default SettingItem;

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    borderColor: FlatColors["black-10"]
  },
  lastItem: {
    borderBottomWidth: 0,
  }
})