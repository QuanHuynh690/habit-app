import React from "react";

import { ThemedView } from "@/components/ThemedView";
import SettingSection from "@/components/setting/setting-section/SettingSection";
import { settingList } from "@shared/constants/setting";

export default function SettingScreen() {
  return (
    <ThemedView className="px-6 py-3" lightColor="transparent">
      {settingList.map((section, index) => (
        <React.Fragment key={`setting-section-${index}`}>
          <SettingSection
            title={section.name}
            list={section.children}
            className={index === settingList.length - 1 ? "mt-3" : ""}
          />
        </React.Fragment>
      ))}
    </ThemedView>
  );
}
