import { ActivityType } from "../enums/profile";
import { ActivityLog } from "../dtos/user.dto";

export const activityLog: ActivityLog[] = [
  {
    title: "112 points earned!",
    time: "Today, 12:34 PM",
    activityType: ActivityType.Good,
  },
  {
    title: "62 points earned!",
    time: "Today, 07:12 AM",
    activityType: ActivityType.Good,
  },
  {
    title: "Challenge completed!",
    time: "Yesterday, 14:12 PM",
    activityType: ActivityType.Award,
  },
  {
    title: "Weekly winning streak is broken!",
    time: "12 Jun, 16:14 PM",
    activityType: ActivityType.Bad,
  },
  {
    title: "96 points earned!",
    time: "11 Jun, 17:45 PM",
    activityType: ActivityType.Good,
  },
  {
    title: "110 points earned!",
    time: "10 Jun, 18:32 PM",
    activityType: ActivityType.Good,
  },
];
