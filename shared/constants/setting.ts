import { SettingItemProps } from "@/components/setting/setting-item/SettingItem";

export interface SettingList {
  name: string;
  children: SettingItemProps[];
}
export const settingList: SettingList[] = [
  {
    name: "General",
    children: [
      { title: "General", icon: "Bookmark1", href: "/setting/general" },
      { title: "Dark Mode", icon: "LightBulb" },
      { title: "Security", icon: "Password", href: "/setting/security" },
      {
        title: "Notifications",
        icon: "Notification",
        href: "/setting/notification",
      },
      { title: "Sounds", icon: "VolumeUp" },
      { title: "Vacation Mode", icon: "Play1" },
    ],
  },
  {
    name: "About Us",
    children: [
      { title: "Rate Us", icon: "Star", href: "/setting/general" },
      { title: "Share with Friends", icon: "Share", href: "/setting/general" },
      { title: "About Us", icon: "InfoSquare", href: "/setting/security" },
      { title: "Support", icon: "ChatDots", href: "/setting/notification" },
    ],
  },
];
