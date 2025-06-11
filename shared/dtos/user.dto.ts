import { ActivityType } from "../enums/profile";

export interface UserDto {
  id: string;
  firstName: string;
  lastName: string;
  point: number;
  profilePicture?: string;
}

export interface ActivityLog {
  title: string;
  time: string;
  activityType: ActivityType;
}
