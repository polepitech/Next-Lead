-- CreateTable
CREATE TABLE "Questionnaire" (
    "id" SERIAL NOT NULL,
    "Question1" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Questionnaire_pkey" PRIMARY KEY ("id")
);
