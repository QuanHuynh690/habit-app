export enum ChallengeType {
  Walking = 'Walking',
  Yoga = 'Yoga',
  Running = 'Running',
  Meditation = 'Meditation',
  Swimming = 'Swimming',
}

export interface ChallengeLocation {
  name: string;
  coordinate: {
    latitude: number;
    longitude: number;
  };
}
export interface ChallengeDto {
  id: string;
  name: string;
  type: ChallengeType;
  point: number;
  badge?: string;
  location: ChallengeLocation;
  target: number;
}

export interface CreateChallengeDto {
  name: string;
  type: ChallengeType;
  point: number;
  badge?: string;
  location: ChallengeLocation;
  target: number;
}
