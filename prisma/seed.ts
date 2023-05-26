import { PrismaClient } from '@prisma/client'
import { randomUUID } from 'crypto'

const prisma = new PrismaClient()

const firstRolesId = randomUUID()
const firstRolesName = 'administrator'

const secondRolesId = randomUUID()
const secondRolesName = 'user'

const firstUsersId = randomUUID()
const firstUsersName = 'admin'
const firstUsersEmail = 'admin@email.com'
const firstUsersPassword =
  'f95bda7f6a9c9585d126cecab02ec51b3d925209d5c2106ba2a493c918d1aa8f83a42e535c1b7ace464f3e52ed3cc8317bdcc0dc0953bf116b9825e0d6eb90ab'
const firstUsersSalt = 'de5813f689b2888e23424db5f5a559fb'
const firstUsersRoleId = firstRolesId

const secondUsersId = randomUUID()
const secondUsersName = 'client'
const secondUsersEmail = 'client@email.com'
const secondUsersPassword =
  '571bd42f0094e72f817769a63a93d1628040c3ffd9594e1efc6c2186d5e102884ad94f3b01af0267d78302a40cd0c60ac68a8d618f89b1b6dfc7170355014c23'
const secondUsersSalt = 'a4725c31bd66b133f57c380459db7e79'
const secondUsersRoleId = secondRolesId

const firstPermissionsId = randomUUID()
const firstPermissionsName = 'users.list'

const secondPermissionsId = randomUUID()
const secondPermissionsName = 'users.create'

const thirdPermissionsId = randomUUID()
const thirdPermissionsName = 'metrics.list'

const firstRolesPermissionsId = randomUUID()
const firstRolesPermissionsRoleId = firstRolesId
const firstRolesPermissionsPermissionId = firstPermissionsId

const secondRolesPermissionsId = randomUUID()
const secondRolesPermissionsRoleId = firstRolesId
const secondRolesPermissionsPermissionId = secondPermissionsId

const thirdRolesPermissionsId = randomUUID()
const thirdRolesPermissionsRoleId = firstRolesId
const thirdRolesPermissionsPermissionId = thirdPermissionsId

const fourthRolesPermissionsId = randomUUID()
const fourthRolesPermissionsRoleId = secondRolesId
const fourthRolesPermissionsPermissionId = firstPermissionsId

const fifthRolesPermissionsId = randomUUID()
const fifthRolesPermissionsRoleId = secondRolesId
const fifthRolesPermissionsPermissionId = thirdPermissionsId

// categories
const firstCategoryId = randomUUID()
const firstCategoryName = 'Circuito religioso'

const secondCategoryId = randomUUID()
const secondCategoryName = 'Vale histórico'

const thirdCategoryId = randomUUID()
const thirdCategoryName = 'Serra da Mantiqueira'

const fourthCategoryId = randomUUID()
const fourthCategoryName = 'Rios do Vale'

const fifthCategoryId = randomUUID()
const fifthCategoryName = 'Litoral Norte'

// itineraries
const firstItineraryId = randomUUID()
const firstItineraryStatus = true
const firstItineraryName = 'Itinerário 1'
const firstItineraryNumberOfDays = 2
const firstItineraryDescription =
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
const firstItineraryValuePerPerson = 10.0
const firstItineraryContent = ['Conteúdo 1', 'Conteúdo 2', 'Conteúdo 3']
const firstItineraryClassification = [
  'Classificação 1',
  'Classificação 2',
  'Classificação 3',
]
const firstItineraryCategoryId = firstCategoryId
const firstItineraryTransferExclusive = true
const firstItineraryTransferParticular = true
const firstItineraryTransferShared = true

const secondItineraryId = randomUUID()
const secondItineraryStatus = true
const secondItineraryName = 'Itinerário 2'
const secondItineraryNumberOfDays = 3
const secondItineraryDescription =
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
const secondItineraryValuePerPerson = 15.5
const secondItineraryContent = ['Conteúdo 1', 'Conteúdo 2', 'Conteúdo 3']
const secondItineraryClassification = [
  'Classificação 1',
  'Classificação 2',
  'Classificação 3',
]
const secondItineraryCategoryId = firstCategoryId
const secondItineraryTransferExclusive = true
const secondItineraryTransferParticular = true
const secondItineraryTransferShared = true

const thirdItineraryId = randomUUID()
const thirdItineraryStatus = true
const thirdItineraryName = 'Itinerário 3'
const thirdItineraryNumberOfDays = 5
const thirdItineraryDescription =
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
const thirdItineraryValuePerPerson = 20
const thirdItineraryContent = ['Conteúdo 1', 'Conteúdo 2', 'Conteúdo 3']
const thirdItineraryClassification = [
  'Classificação 1',
  'Classificação 2',
  'Classificação 3',
]
const thirdItineraryCategoryId = firstCategoryId
const thirdItineraryTransferExclusive = true
const thirdItineraryTransferParticular = true
const thirdItineraryTransferShared = true

// packages
const firstPackageId = randomUUID()
const firstPackageName = 'Pacote 1'

const secondPackageId = randomUUID()
const secondPackageName = 'Pacote 2'

// itineraries_on_packages
const firstItinerariesOnPackages = randomUUID()
const secondItinerariesOnPackages = randomUUID()
const thirdItinerariesOnPackages = randomUUID()
const fourthItinerariesOnPackages = randomUUID()

// facilities
const firstFacilityId = randomUUID()
const firstFacilitySingleRoom = true
const firstFacilityDoubleRoom = true
const firstFacilityDoubleBedroom = true
const firstFacilityDormRoom = true
const firstFacilityBreakfast = true
const firstFacilityLunch = true
const firstFacilityDinner = true
const firstFacilityWifi = true
const firstFacilityPetFriendly = true
const firstFacilityParking = true
const firstFacilityGyn = true
const firstFacilityPool = true
const firstFacilityOnSiteRestaurants = true
const firstFacilityNearbyRestaurants = true
const firstFacilityRoomService = true
const firstFacilityTransportService = true
const firstFacilityChildrensArea = true

const secondFacilityId = randomUUID()
const secondFacilitySingleRoom = true
const secondFacilityDoubleRoom = true
const secondFacilityDoubleBedroom = true
const secondFacilityDormRoom = true
const secondFacilityBreakfast = true
const secondFacilityLunch = false
const secondFacilityDinner = false
const secondFacilityWifi = true
const secondFacilityPetFriendly = false
const secondFacilityParking = false
const secondFacilityGyn = false
const secondFacilityPool = false
const secondFacilityOnSiteRestaurants = false
const secondFacilityNearbyRestaurants = false
const secondFacilityRoomService = false
const secondFacilityTransportService = false
const secondFacilityChildrensArea = false

const thirdFacilityId = randomUUID()
const thirdFacilitySingleRoom = true
const thirdFacilityDoubleRoom = true
const thirdFacilityDoubleBedroom = true
const thirdFacilityDormRoom = false
const thirdFacilityBreakfast = false
const thirdFacilityLunch = false
const thirdFacilityDinner = false
const thirdFacilityWifi = true
const thirdFacilityPetFriendly = false
const thirdFacilityParking = false
const thirdFacilityGyn = false
const thirdFacilityPool = false
const thirdFacilityOnSiteRestaurants = false
const thirdFacilityNearbyRestaurants = false
const thirdFacilityRoomService = false
const thirdFacilityTransportService = false
const thirdFacilityChildrensArea = false

// accommodations
const firstAccommodationsId = randomUUID()
const firstAccommodationsStatus = true
const firstAccommodationsName = 'Hospedagem 1'
const firstAccommodationsDailyValue = 10.0
const firstAccommodationsImagePath =
  'https://images.pexels.com/photos/6775268/pexels-photo-6775268.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=1'
const firstAccommodationsZipCode = '12605-000'
const firstAccommodationsAddressName = 'Rua 1'
const firstAccommodationsDistrictName = 'Bairro A'
const firstAccommodationsAddressNumber = '100'
const firstAccommodationsCity = 'Cidade X'

const secondAccommodationsId = randomUUID()
const secondAccommodationsStatus = true
const secondAccommodationsName = 'Hospedagem 2'
const secondAccommodationsDailyValue = 20.0
const secondAccommodationsImagePath =
  'https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=1'
const secondAccommodationsZipCode = '12605-000'
const secondAccommodationsAddressName = 'Rua 2'
const secondAccommodationsDistrictName = 'Bairro B'
const secondAccommodationsAddressNumber = '300'
const secondAccommodationsCity = 'Cidade Y'

const thirdAccommodationsId = randomUUID()
const thirdAccommodationsStatus = true
const thirdAccommodationsName = 'Hospedagem 3'
const thirdAccommodationsDailyValue = 30.0
const thirdAccommodationsImagePath =
  'https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=1'
const thirdAccommodationsZipCode = '12605-000'
const thirdAccommodationsAddressName = 'Rua 3'
const thirdAccommodationsDistrictName = 'Bairro C'
const thirdAccommodationsAddressNumber = '700'
const thirdAccommodationsCity = 'Cidade Z'

// accommodations_on_packages
const firstAccommodationsOnPackages = randomUUID()
const secondAccommodationsOnPackages = randomUUID()
const thirdAccommodationsOnPackages = randomUUID()
const fourthAccommodationsOnPackages = randomUUID()

async function run() {
  await prisma.user.deleteMany()
  await prisma.rolePermission.deleteMany()
  await prisma.permission.deleteMany()
  await prisma.role.deleteMany()
  await prisma.package.deleteMany()
  await prisma.itinerariesOnPackages.deleteMany()
  await prisma.itinerary.deleteMany()
  await prisma.category.deleteMany()
  await prisma.accommodationsOnPackages.deleteMany()
  await prisma.accommodation.deleteMany()
  await prisma.faciliti.deleteMany()

  // roles
  await Promise.all([
    prisma.role.create({
      data: {
        id: firstRolesId,
        name: firstRolesName,
        created_at: new Date(),
      },
    }),

    prisma.role.create({
      data: {
        id: secondRolesId,
        name: secondRolesName,
        created_at: new Date(),
      },
    }),
  ])

  // permissions
  await Promise.all([
    prisma.permission.create({
      data: {
        id: firstPermissionsId,
        name: firstPermissionsName,
        created_at: new Date(),
      },
    }),

    prisma.permission.create({
      data: {
        id: secondPermissionsId,
        name: secondPermissionsName,
        created_at: new Date(),
      },
    }),

    prisma.permission.create({
      data: {
        id: thirdPermissionsId,
        name: thirdPermissionsName,
        created_at: new Date(),
      },
    }),
  ])

  // role permission
  await Promise.all([
    prisma.rolePermission.create({
      data: {
        id: firstRolesPermissionsId,
        role_id: firstRolesPermissionsRoleId,
        permission_id: firstRolesPermissionsPermissionId,
        created_at: new Date(),
      },
    }),

    prisma.rolePermission.create({
      data: {
        id: secondRolesPermissionsId,
        role_id: secondRolesPermissionsRoleId,
        permission_id: secondRolesPermissionsPermissionId,
        created_at: new Date(),
      },
    }),

    prisma.rolePermission.create({
      data: {
        id: thirdRolesPermissionsId,
        role_id: thirdRolesPermissionsRoleId,
        permission_id: thirdRolesPermissionsPermissionId,
        created_at: new Date(),
      },
    }),

    prisma.rolePermission.create({
      data: {
        id: fourthRolesPermissionsId,
        role_id: fourthRolesPermissionsRoleId,
        permission_id: fourthRolesPermissionsPermissionId,
        created_at: new Date(),
      },
    }),

    prisma.rolePermission.create({
      data: {
        id: fifthRolesPermissionsId,
        role_id: fifthRolesPermissionsRoleId,
        permission_id: fifthRolesPermissionsPermissionId,
        created_at: new Date(),
      },
    }),
  ])

  // user
  await Promise.all([
    prisma.user.create({
      data: {
        id: firstUsersId,
        name: firstUsersName,
        email: firstUsersEmail,
        password: firstUsersPassword,
        salt: firstUsersSalt,
        role_id: firstUsersRoleId,
        created_at: new Date(),
      },
    }),

    prisma.user.create({
      data: {
        id: secondUsersId,
        name: secondUsersName,
        email: secondUsersEmail,
        password: secondUsersPassword,
        salt: secondUsersSalt,
        role_id: secondUsersRoleId,
        created_at: new Date(),
      },
    }),
  ])

  // category
  await Promise.all([
    prisma.category.create({
      data: {
        id: firstCategoryId,
        name: firstCategoryName,
        created_at: new Date(),
      },
    }),

    prisma.category.create({
      data: {
        id: secondCategoryId,
        name: secondCategoryName,
        created_at: new Date(),
      },
    }),

    prisma.category.create({
      data: {
        id: thirdCategoryId,
        name: thirdCategoryName,
        created_at: new Date(),
      },
    }),

    prisma.category.create({
      data: {
        id: fourthCategoryId,
        name: fourthCategoryName,
        created_at: new Date(),
      },
    }),

    prisma.category.create({
      data: {
        id: fifthCategoryId,
        name: fifthCategoryName,
        created_at: new Date(),
      },
    }),
  ])

  // itinerary
  await Promise.all([
    prisma.itinerary.create({
      data: {
        id: firstItineraryId,
        is_active: firstItineraryStatus,
        name: firstItineraryName,
        number_of_days: firstItineraryNumberOfDays,
        description: firstItineraryDescription,
        value_per_person: firstItineraryValuePerPerson,
        content: firstItineraryContent,
        classification: firstItineraryClassification,
        category_id: firstItineraryCategoryId,
        transfer_exclusive: firstItineraryTransferExclusive,
        transfer_particular: firstItineraryTransferParticular,
        transfer_shared: firstItineraryTransferShared,
        created_at: new Date(),
      },
    }),

    prisma.itinerary.create({
      data: {
        id: secondItineraryId,
        is_active: secondItineraryStatus,
        name: secondItineraryName,
        number_of_days: secondItineraryNumberOfDays,
        description: secondItineraryDescription,
        value_per_person: secondItineraryValuePerPerson,
        content: secondItineraryContent,
        classification: secondItineraryClassification,
        category_id: secondItineraryCategoryId,
        transfer_exclusive: secondItineraryTransferExclusive,
        transfer_particular: secondItineraryTransferParticular,
        transfer_shared: secondItineraryTransferShared,
        created_at: new Date(),
      },
    }),

    prisma.itinerary.create({
      data: {
        id: thirdItineraryId,
        is_active: thirdItineraryStatus,
        name: thirdItineraryName,
        number_of_days: thirdItineraryNumberOfDays,
        description: thirdItineraryDescription,
        value_per_person: thirdItineraryValuePerPerson,
        content: thirdItineraryContent,
        classification: thirdItineraryClassification,
        category_id: thirdItineraryCategoryId,
        transfer_exclusive: thirdItineraryTransferExclusive,
        transfer_particular: thirdItineraryTransferParticular,
        transfer_shared: thirdItineraryTransferShared,
        created_at: new Date(),
      },
    }),
  ])

  // package
  await Promise.all([
    prisma.package.create({
      data: {
        id: firstPackageId,
        name: firstPackageName,
        created_at: new Date(),
      },
    }),

    prisma.package.create({
      data: {
        id: secondPackageId,
        name: secondPackageName,
        created_at: new Date(),
      },
    }),
  ])

  // itineraries_on_packages
  await Promise.all([
    prisma.itinerariesOnPackages.create({
      data: {
        id: firstItinerariesOnPackages,
        package_id: firstPackageId,
        itinerary_id: firstItineraryId,
        created_at: new Date(),
      },
    }),

    prisma.itinerariesOnPackages.create({
      data: {
        id: secondItinerariesOnPackages,
        package_id: firstPackageId,
        itinerary_id: secondItineraryId,
        created_at: new Date(),
      },
    }),

    prisma.itinerariesOnPackages.create({
      data: {
        id: thirdItinerariesOnPackages,
        package_id: secondPackageId,
        itinerary_id: firstItineraryId,
        created_at: new Date(),
      },
    }),

    prisma.itinerariesOnPackages.create({
      data: {
        id: fourthItinerariesOnPackages,
        package_id: secondPackageId,
        itinerary_id: thirdItineraryId,
        created_at: new Date(),
      },
    }),
  ])

  // facilities
  await Promise.all([
    prisma.faciliti.create({
      data: {
        id: firstFacilityId,
        single_room: firstFacilitySingleRoom,
        double_room: firstFacilityDoubleRoom,
        double_bedroom: firstFacilityDoubleBedroom,
        dorm_room: firstFacilityDormRoom,
        breakfast: firstFacilityBreakfast,
        lunch: firstFacilityLunch,
        dinner: firstFacilityDinner,
        wifi: firstFacilityWifi,
        pet_friendly: firstFacilityPetFriendly,
        parking: firstFacilityParking,
        gyn: firstFacilityGyn,
        pool: firstFacilityPool,
        on_site_restaurants: firstFacilityOnSiteRestaurants,
        nearby_restaurants: firstFacilityNearbyRestaurants,
        room_service: firstFacilityRoomService,
        transport_service: firstFacilityTransportService,
        childrens_area: firstFacilityChildrensArea,
        created_at: new Date(),
      },
    }),

    prisma.faciliti.create({
      data: {
        id: secondFacilityId,
        single_room: secondFacilitySingleRoom,
        double_room: secondFacilityDoubleRoom,
        double_bedroom: secondFacilityDoubleBedroom,
        dorm_room: secondFacilityDormRoom,
        breakfast: secondFacilityBreakfast,
        lunch: secondFacilityLunch,
        dinner: secondFacilityDinner,
        wifi: secondFacilityWifi,
        pet_friendly: secondFacilityPetFriendly,
        parking: secondFacilityParking,
        gyn: secondFacilityGyn,
        pool: secondFacilityPool,
        on_site_restaurants: secondFacilityOnSiteRestaurants,
        nearby_restaurants: secondFacilityNearbyRestaurants,
        room_service: secondFacilityRoomService,
        transport_service: secondFacilityTransportService,
        childrens_area: secondFacilityChildrensArea,
        created_at: new Date(),
      },
    }),

    prisma.faciliti.create({
      data: {
        id: thirdFacilityId,
        single_room: thirdFacilitySingleRoom,
        double_room: thirdFacilityDoubleRoom,
        double_bedroom: thirdFacilityDoubleBedroom,
        dorm_room: thirdFacilityDormRoom,
        breakfast: thirdFacilityBreakfast,
        lunch: thirdFacilityLunch,
        dinner: thirdFacilityDinner,
        wifi: thirdFacilityWifi,
        pet_friendly: thirdFacilityPetFriendly,
        parking: thirdFacilityParking,
        gyn: thirdFacilityGyn,
        pool: thirdFacilityPool,
        on_site_restaurants: thirdFacilityOnSiteRestaurants,
        nearby_restaurants: thirdFacilityNearbyRestaurants,
        room_service: thirdFacilityRoomService,
        transport_service: thirdFacilityTransportService,
        childrens_area: thirdFacilityChildrensArea,
        created_at: new Date(),
      },
    }),
  ])

  // accommodations
  await Promise.all([
    prisma.accommodation.create({
      data: {
        id: firstAccommodationsId,
        is_active: firstAccommodationsStatus,
        name: firstAccommodationsName,
        daily_value: firstAccommodationsDailyValue,
        image_path: firstAccommodationsImagePath,
        zip_code: firstAccommodationsZipCode,
        address_name: firstAccommodationsAddressName,
        district_name: firstAccommodationsDistrictName,
        address_number: firstAccommodationsAddressNumber,
        city: firstAccommodationsCity,
        faciliti_id: firstFacilityId,
        created_at: new Date(),
      },
    }),

    prisma.accommodation.create({
      data: {
        id: secondAccommodationsId,
        is_active: secondAccommodationsStatus,
        name: secondAccommodationsName,
        daily_value: secondAccommodationsDailyValue,
        image_path: secondAccommodationsImagePath,
        zip_code: secondAccommodationsZipCode,
        address_name: secondAccommodationsAddressName,
        district_name: secondAccommodationsDistrictName,
        address_number: secondAccommodationsAddressNumber,
        city: secondAccommodationsCity,
        faciliti_id: secondFacilityId,
        created_at: new Date(),
      },
    }),

    prisma.accommodation.create({
      data: {
        id: thirdAccommodationsId,
        is_active: thirdAccommodationsStatus,
        name: thirdAccommodationsName,
        daily_value: thirdAccommodationsDailyValue,
        image_path: thirdAccommodationsImagePath,
        zip_code: thirdAccommodationsZipCode,
        address_name: thirdAccommodationsAddressName,
        district_name: thirdAccommodationsDistrictName,
        address_number: thirdAccommodationsAddressNumber,
        city: thirdAccommodationsCity,
        faciliti_id: thirdFacilityId,
        created_at: new Date(),
      },
    }),
  ])

  // accommodations_on_packages
  await Promise.all([
    prisma.accommodationsOnPackages.create({
      data: {
        id: firstAccommodationsOnPackages,
        package_id: firstPackageId,
        accommodation_id: firstAccommodationsId,
        created_at: new Date(),
      },
    }),

    prisma.accommodationsOnPackages.create({
      data: {
        id: secondAccommodationsOnPackages,
        package_id: firstPackageId,
        accommodation_id: secondAccommodationsId,
        created_at: new Date(),
      },
    }),

    prisma.accommodationsOnPackages.create({
      data: {
        id: thirdAccommodationsOnPackages,
        package_id: secondPackageId,
        accommodation_id: secondAccommodationsId,
        created_at: new Date(),
      },
    }),

    prisma.accommodationsOnPackages.create({
      data: {
        id: fourthAccommodationsOnPackages,
        package_id: secondPackageId,
        accommodation_id: thirdAccommodationsId,
        created_at: new Date(),
      },
    }),
  ])
}

run()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
