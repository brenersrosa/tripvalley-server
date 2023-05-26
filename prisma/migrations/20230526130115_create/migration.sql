/*
  Warnings:

  - You are about to drop the column `mealType_id` on the `accommodations` table. All the data in the column will be lost.
  - You are about to drop the column `roomType_id` on the `accommodations` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `transfers` table. All the data in the column will be lost.
  - You are about to drop the `meals_types` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `rooms_types` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `faciliti_id` to the `accommodations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exclusive` to the `transfers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `particular` to the `transfers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shared` to the `transfers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `accommodations` DROP FOREIGN KEY `accommodations_mealType_id_fkey`;

-- DropForeignKey
ALTER TABLE `accommodations` DROP FOREIGN KEY `accommodations_roomType_id_fkey`;

-- DropIndex
DROP INDEX `transfers_name_key` ON `transfers`;

-- AlterTable
ALTER TABLE `accommodations` DROP COLUMN `mealType_id`,
    DROP COLUMN `roomType_id`,
    ADD COLUMN `faciliti_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `transfers` DROP COLUMN `name`,
    ADD COLUMN `exclusive` BOOLEAN NOT NULL,
    ADD COLUMN `particular` BOOLEAN NOT NULL,
    ADD COLUMN `shared` BOOLEAN NOT NULL;

-- DropTable
DROP TABLE `meals_types`;

-- DropTable
DROP TABLE `rooms_types`;

-- CreateTable
CREATE TABLE `facilities` (
    `id` VARCHAR(191) NOT NULL,
    `single_room` BOOLEAN NOT NULL,
    `double_room` BOOLEAN NOT NULL,
    `double_bedroom` BOOLEAN NOT NULL,
    `dorm_room` BOOLEAN NOT NULL,
    `breakfast` BOOLEAN NOT NULL,
    `lunch` BOOLEAN NOT NULL,
    `dinner` BOOLEAN NOT NULL,
    `wifi` BOOLEAN NOT NULL,
    `pet_friendly` BOOLEAN NOT NULL,
    `parking` BOOLEAN NOT NULL,
    `gyn` BOOLEAN NOT NULL,
    `pool` BOOLEAN NOT NULL,
    `on_site_restaurants` BOOLEAN NOT NULL,
    `nearby_restaurants` BOOLEAN NOT NULL,
    `room_service` BOOLEAN NOT NULL,
    `transport_service` BOOLEAN NOT NULL,
    `childrens_area` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `accommodations` ADD CONSTRAINT `accommodations_faciliti_id_fkey` FOREIGN KEY (`faciliti_id`) REFERENCES `facilities`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
