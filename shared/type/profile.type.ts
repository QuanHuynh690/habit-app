import { ActivityType } from "../enums/profile";

export interface Friend {
  id: number;
  name: string;
  point: number;
  profilePicture: string;
}

export interface ActivityLog {
  title: string;
  time: string;
  activityType: ActivityType;
}
