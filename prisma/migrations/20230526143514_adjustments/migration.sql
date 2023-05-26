/*
  Warnings:

  - You are about to drop the column `accommodation_id` on the `packages` table. All the data in the column will be lost.
  - You are about to drop the column `itinerary_id` on the `packages` table. All the data in the column will be lost.
  - Added the required column `name` to the `packages` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `packages_accommodation_id_fkey` ON `packages`;

-- DropIndex
DROP INDEX `packages_itinerary_id_accommodation_id_key` ON `packages`;

-- AlterTable
ALTER TABLE `packages` DROP COLUMN `accommodation_id`,
    DROP COLUMN `itinerary_id`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
