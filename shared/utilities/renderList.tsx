import React, { ReactElement } from "react";
import { ActivityType, ProfileTab } from "../enums/profile";
import { ActivityLog, Friend } from "../type/profile.type";
import {
  ArrowDown3,
  ArrowUp3,
  Medal,
  TrashCan,
} from "@/components/ui/design-icons";
import ProfileCard from "@/components/profile-card/ProfileCard";
import { FlatColors } from "../constants/Colors";
const getActivityIcon = (type: ActivityType) => {
  switch (type) {
    case ActivityType.Good:
      return <ArrowUp3 color={FlatColors["success-100"]} secondColor={FlatColors["success-100"]} />;
    case ActivityType.Bad:
      return <ArrowDown3 color={FlatColors["error-100"]} secondColor={FlatColors["error-100"]}/>;
    default:
      return (
        <Medal
          color={FlatColors["warning-100"]}
          secondColor={FlatColors["warning-20"]}
        />
      );
  }
};
export const listRenderers: {
  [key in ProfileTab]: (item: any, index: number) => ReactElement | null;
} = {
  [ProfileTab.Friend]: (item: Friend, index) => (
    <ProfileCard
      key={index}
      title={item.name}
      subTitle={`${item.point} Points`}
      image={item.profilePicture}
      type={ProfileTab.Friend}
      actionIcon={<TrashCan />}
      actionButton={() => alert(`Remove friend id : ${item.id}`)}
    />
  ),

  [ProfileTab.Activity]: (item: ActivityLog, index) => (
    <ProfileCard
      key={index}
      title={item.title}
      subTitle={item.time}
      type={ProfileTab.Activity}
      actionIcon={getActivityIcon(item.activityType)}
    />
  ),

  [ProfileTab.Achievement]: (item: ActivityLog, index) => (
    <ProfileCard
      key={index}
      title={item.title}
      subTitle={item.time}
      type={ProfileTab.Achievement}
    />
  ),

  // [ProfileTab.Custom1]: (item: CustomType1, index) => (
  //   <ProfileCard
  //     key={index}
  //     title={item.whatever}
  //     subTitle={item.whenever}
  //     type={ProfileTab.Custom1}
  //   />
  // ),

  // [ProfileTab.Custom2]: (item: CustomType2, index) => (
  //   <ProfileCard
  //     key={index}
  //     title={item.foo}
  //     subTitle={item.bar}
  //     type={ProfileTab.Custom2}
  //   />
  // ),
};
