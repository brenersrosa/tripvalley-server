-- DropForeignKey
ALTER TABLE `packages` DROP FOREIGN KEY `packages_accommodation_id_fkey`;

-- DropForeignKey
ALTER TABLE `packages` DROP FOREIGN KEY `packages_itinerary_id_fkey`;

-- CreateTable
CREATE TABLE `itineraries_on_packages` (
    `id` VARCHAR(191) NOT NULL,
    `itinerary_id` VARCHAR(191) NOT NULL,
    `package_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `itineraries_on_packages_itinerary_id_package_id_key`(`itinerary_id`, `package_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `accommodations_on_packages` (
    `id` VARCHAR(191) NOT NULL,
    `accommodation_id` VARCHAR(191) NOT NULL,
    `package_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `accommodations_on_packages_accommodation_id_package_id_key`(`accommodation_id`, `package_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `itineraries_on_packages` ADD CONSTRAINT `itineraries_on_packages_itinerary_id_fkey` FOREIGN KEY (`itinerary_id`) REFERENCES `itineraries`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `itineraries_on_packages` ADD CONSTRAINT `itineraries_on_packages_package_id_fkey` FOREIGN KEY (`package_id`) REFERENCES `packages`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `accommodations_on_packages` ADD CONSTRAINT `accommodations_on_packages_accommodation_id_fkey` FOREIGN KEY (`accommodation_id`) REFERENCES `accommodations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `accommodations_on_packages` ADD CONSTRAINT `accommodations_on_packages_package_id_fkey` FOREIGN KEY (`package_id`) REFERENCES `packages`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
