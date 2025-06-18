-- CreateEnum
CREATE TYPE "habit"."ChallengeType" AS ENUM ('walking', 'yoga', 'running', 'meditation', 'swimming');

-- CreateTable
CREATE TABLE "habit"."Challenge" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "habit"."ChallengeType" NOT NULL,
    "target" INTEGER NOT NULL,
    "rewardId" TEXT NOT NULL,
    "locationId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Challenge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "habit"."Reward" (
    "id" TEXT NOT NULL,
    "point" INTEGER NOT NULL,
    "badge" TEXT,

    CONSTRAINT "Reward_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "habit"."ChallengeLocation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ChallengeLocation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "habit"."Challenge" ADD CONSTRAINT "Challenge_rewardId_fkey" FOREIGN KEY ("rewardId") REFERENCES "habit"."Reward"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "habit"."Challenge" ADD CONSTRAINT "Challenge_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "habit"."ChallengeLocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
