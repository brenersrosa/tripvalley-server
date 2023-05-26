/*
  Warnings:

  - Added the required column `total_value` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orders` ADD COLUMN `total_value` DECIMAL(65, 30) NOT NULL;
