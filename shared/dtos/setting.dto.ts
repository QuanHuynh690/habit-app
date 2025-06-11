// import { IconSymbolName } from '@app/components/ui/IconSymbol'

export interface SettingItemProps {
  title: string;
  icon: string ;
  href?: "/setting/general" | "/setting/security" | "/setting/notification";
  isLast?: boolean;
}

export interface SettingList {
    name: string;
    children: SettingItemProps[];
  }
  