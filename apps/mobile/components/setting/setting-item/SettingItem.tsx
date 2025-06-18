import { Link, useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

import { FlatColors } from "@shared/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import { IconSymbol, IconSymbolName } from "@/components/ui/IconSymbol";
import Switch from "@/components/switch/Switch";

export interface SettingItemProps {
  title: string;
  icon: IconSymbolName ;
  href?: "/setting/general" | "/setting/security" | "/setting/notification";
  isLast?: boolean;
}

const SettingItem = (props: SettingItemProps) => {
  const { title, icon, isLast, href } = props;
  return (
    <>
      {href ? (
        <Link href={href}>
          <View
            className="h-14 items-center flex flex-row justify-between w-full"
            style={isLast ? styles.lastItem : styles.item}
          >
            <View className="flex flex-row justify-between items-center">
              {<IconSymbol name={icon} />}
              <ThemedText className="ml-2">{title}</ThemedText>
            </View>
            <IconSymbol name="ArrowRight2" />
          </View>
        </Link>
      ) : (
        <View
          className="h-14 items-center flex flex-row justify-between w-full"
          style={isLast ? styles.lastItem : styles.item}
        >
          <View className="flex flex-row justify-between items-center">
            {<IconSymbol name={icon} />}
            <ThemedText className="ml-2">{title}</ThemedText>
          </View>
          <Switch />
        </View>
      )}
    </>
  );
};
export default SettingItem;

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    borderColor: FlatColors["black-10"],
  },
  lastItem: {
    borderBottomWidth: 0,
  },
});
