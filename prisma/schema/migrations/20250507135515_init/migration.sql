/*
  Warnings:

  - Added the required column `Question2` to the `Questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Question3` to the `Questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Question4` to the `Questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Question5` to the `Questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Question6` to the `Questionnaire` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Questionnaire" ADD COLUMN     "Question2" TEXT NOT NULL,
ADD COLUMN     "Question3" TEXT NOT NULL,
ADD COLUMN     "Question4" TEXT NOT NULL,
ADD COLUMN     "Question5" TEXT NOT NULL,
ADD COLUMN     "Question6" TEXT NOT NULL;
