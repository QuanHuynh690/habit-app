import React from "react";
import { View } from "react-native";

import { ThemedText } from "@/components/ThemedText";

import SettingItem, { SettingItemProps } from "../setting-item/SettingItem";
interface SettingSectionProps {
  title: string;
  list?: any;
  className?: string;
}
const SettingSection = (props: SettingSectionProps) => {
  const { title, list, className } = props;
  return (
    <View className={className}>
      <ThemedText className="text-black-40 uppercase font-bold text-[10px]">
        {title}
      </ThemedText>
      <View className="border mt-2 px-4 rounded-2xl border-black-10 bg-white">
        {list.map((item: SettingItemProps, index: number) => (
          <React.Fragment key={`setting-item-${index}`}>
            <SettingItem
              title={item.title}
              icon={item.icon}
              href={item.href}
              isLast={index === list.length - 1}
            />
          </React.Fragment>
        ))}
      </View>
    </View>
  );
};
export default SettingSection;
