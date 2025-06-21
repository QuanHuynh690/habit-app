/*
  Warnings:

  - You are about to drop the column `longitude` on the `Challenge` table. All the data in the column will be lost.
  - Added the required column `longtitude` to the `Challenge` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "habit"."Challenge" DROP COLUMN "longitude",
ADD COLUMN     "longtitude" DOUBLE PRECISION NOT NULL;
