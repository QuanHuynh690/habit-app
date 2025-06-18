import { ChallengeDto } from "../dtos/challenge.dto";

export const challenges: ChallengeDto[] = [
  {
    id: 1,
    name: "Sunrise Yoga",
    type: "yoga",
    reward: {
      sui: 0.01,
      badge: "Yoga badge",
    },
    location: {
      name: "Gia Dinh Park",
      coordinate: {
        latitude: 10.806,
        longitude: 106.678,
      },
    },
    target: 60,
  },
  {
    id: 2,
    name: "Walking Challenge",
    type: "walking",
    reward: {
      sui: 0.02,
      badge: "Walking badge",
    },
    location: {
      name: "Van Lang University",
      coordinate: {
        latitude: 10.8022,
        longitude: 106.6565,
      },
    },
    target: 5,
  },
  {
    id: 3,
    name: "Evening Meditation",
    type: "meditation",
    reward: {
      sui: 0.01,
      badge: "Meditation badge",
    },
    location: {
      name: "Duoc Su Pagoda",
      coordinate: {
        latitude: 10.7992,
        longitude: 106.6649,
      },
    },
    target: 60,
  },
  {
    id: 4,
    name: "Canal Run Challenge",
    type: "running",
    reward: {
      sui: 0.03,
      badge: "Walking badge",
    },
    location: {
      name: "Phan Van Tri Street",
      coordinate: {
        latitude: 10.8105,
        longitude: 106.6791,
      },
    },
    target: 12,
  },
  {
    id: 5,
    name: "Swimming Challenge",
    type: "swimming",
    reward: {
      sui: 0.04,
      badge: "swimming badge",
    },
    location: {
      name: "Cong Hoa Pool",
      coordinate: {
        latitude: 10.80595,
        longitude: 106.6527,
      },
    },
    target: 5,
  },
];
