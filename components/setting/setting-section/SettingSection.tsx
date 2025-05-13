import {  View } from "react-native";
import { Bookmark1, Password } from "@/components/ui/design-icons";
import SettingItem from "../setting-item/SettingItem";
import { ThemedText } from "@/components/ThemedText";

interface SettingSectionProps {
  title: string;
  settingList?: any;
  className?: string
}
const SettingSection = (props: SettingSectionProps) => {
  const { title, settingList, className } = props;
  return (
    <View className={className}>
      <ThemedText className="text-black-40 uppercase font-bold text-[10px]">{title}</ThemedText>
      <View className="border mt-2 px-4 rounded-2xl border-black-10 bg-white">
        <SettingItem title="General" icon={<Bookmark1 />} />
        <SettingItem title="Security" icon={<Password />} isLast />
      </View>
    </View>
  );
};
export default SettingSection;