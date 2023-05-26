/*
  Warnings:

  - You are about to drop the column `transfer_id` on the `itineraries` table. All the data in the column will be lost.
  - You are about to drop the `transfers` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `transfer_exclusive` to the `itineraries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transfer_particular` to the `itineraries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transfer_shared` to the `itineraries` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `itineraries` DROP FOREIGN KEY `itineraries_transfer_id_fkey`;

-- AlterTable
ALTER TABLE `itineraries` DROP COLUMN `transfer_id`,
    ADD COLUMN `transfer_exclusive` BOOLEAN NOT NULL,
    ADD COLUMN `transfer_particular` BOOLEAN NOT NULL,
    ADD COLUMN `transfer_shared` BOOLEAN NOT NULL;

-- DropTable
DROP TABLE `transfers`;
