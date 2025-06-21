/*
  Warnings:

  - You are about to drop the column `type` on the `Challenge` table. All the data in the column will be lost.
  - Added the required column `challenge_type` to the `Challenge` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "habit"."Challenge" DROP COLUMN "type",
ADD COLUMN     "challenge_type" "habit"."ChallengeType" NOT NULL;
