/*
  Warnings:

  - You are about to drop the column `locationId` on the `Challenge` table. All the data in the column will be lost.
  - You are about to drop the column `rewardId` on the `Challenge` table. All the data in the column will be lost.
  - You are about to drop the `ChallengeLocation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Reward` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `badgeId` to the `Challenge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `latitude` to the `Challenge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationName` to the `Challenge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Challenge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `point` to the `Challenge` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "habit"."Challenge" DROP CONSTRAINT "Challenge_locationId_fkey";

-- DropForeignKey
ALTER TABLE "habit"."Challenge" DROP CONSTRAINT "Challenge_rewardId_fkey";

-- AlterTable
ALTER TABLE "habit"."Challenge" DROP COLUMN "locationId",
DROP COLUMN "rewardId",
ADD COLUMN     "badgeId" TEXT NOT NULL,
ADD COLUMN     "latitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "locationName" TEXT NOT NULL,
ADD COLUMN     "longitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "point" INTEGER NOT NULL;

-- DropTable
DROP TABLE "habit"."ChallengeLocation";

-- DropTable
DROP TABLE "habit"."Reward";

-- CreateTable
CREATE TABLE "habit"."Badge" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Badge_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "habit"."Challenge" ADD CONSTRAINT "Challenge_badgeId_fkey" FOREIGN KEY ("badgeId") REFERENCES "habit"."Badge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
