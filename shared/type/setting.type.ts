import { IconSymbolName } from "@/apps/components/ui/IconSymbol";

export interface SettingItemProps {
  title: string;
  icon: IconSymbolName;
  href?: "/setting/general" | "/setting/security" | "/setting/notification";
  isLast?: boolean;
}

export interface SettingList {
    name: string;
    children: SettingItemProps[];
  }
  