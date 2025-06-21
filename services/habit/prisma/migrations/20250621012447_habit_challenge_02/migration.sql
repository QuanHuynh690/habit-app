/*
  Warnings:

  - You are about to drop the column `longtitude` on the `Challenge` table. All the data in the column will be lost.
  - Added the required column `longitude` to the `Challenge` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "habit"."Challenge" DROP COLUMN "longtitude",
ADD COLUMN     "longitude" DOUBLE PRECISION NOT NULL;
