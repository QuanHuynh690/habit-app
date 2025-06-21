-- DropForeignKey
ALTER TABLE "habit"."Challenge" DROP CONSTRAINT "Challenge_badgeId_fkey";

-- AlterTable
ALTER TABLE "habit"."Challenge" ALTER COLUMN "badgeId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "habit"."Challenge" ADD CONSTRAINT "Challenge_badgeId_fkey" FOREIGN KEY ("badgeId") REFERENCES "habit"."Badge"("id") ON DELETE SET NULL ON UPDATE CASCADE;
