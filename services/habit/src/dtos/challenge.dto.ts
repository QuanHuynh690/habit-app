export type ChallengeType =
  | 'walking'
  | 'yoga'
  | 'running'
  | 'meditation'
  | 'swimming';

export interface Reward {
  point: number;
  badge?: string | null;
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
  reward: Reward;
  location: ChallengeLocation;
  target: number;
}
