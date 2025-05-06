-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "numero" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);
