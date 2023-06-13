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

// accommodations
const firstAccommodationsId = randomUUID()
const firstAccommodationsStatus = 'active'
const firstAccommodationsName = 'Hospedagem 1'
const firstAccommodationsDescription =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
const firstAccommodationsDailyValue = 10.0
const firstAccommodationsImagePath =
  'https://images.pexels.com/photos/6775268/pexels-photo-6775268.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=1'
const firstAccommodationsZipCode = '12605-000'
const firstAccommodationsAddressName = 'Rua 1'
const firstAccommodationsDistrictName = 'Bairro A'
const firstAccommodationsAddressNumber = '100'
const firstAccommodationsUf = 'SP'
const firstAccommodationsCity = 'Cidade X'
const firstAccommodationsSingleRoom = true
const firstAccommodationsDoubleRoom = true
const firstAccommodationsDoubleBedroom = true
const firstAccommodationsDormRoom = true
const firstAccommodationsBreakfast = true
const firstAccommodationsLunch = true
const firstAccommodationsDinner = true
const firstAccommodationsWifi = true
const firstAccommodationsPetFriendly = true
const firstAccommodationsParking = true
const firstAccommodationsGyn = true
const firstAccommodationsPool = true
const firstAccommodationsOnSiteRestaurants = true
const firstAccommodationsNearbyRestaurants = true
const firstAccommodationsRoomService = true
const firstAccommodationsTransportService = true
const firstAccommodationsChildrensArea = true

const secondAccommodationsId = randomUUID()
const secondAccommodationsStatus = 'active'
const secondAccommodationsName = 'Hospedagem 2'
const secondAccommodationsDescription =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
const secondAccommodationsDailyValue = 20.0
const secondAccommodationsImagePath =
  'https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=1'
const secondAccommodationsZipCode = '12605-000'
const secondAccommodationsAddressName = 'Rua 2'
const secondAccommodationsDistrictName = 'Bairro B'
const secondAccommodationsAddressNumber = '300'
const secondAccommodationsUf = 'SP'
const secondAccommodationsCity = 'Cidade Y'
const secondAccommodationsSingleRoom = true
const secondAccommodationsDoubleRoom = true
const secondAccommodationsDoubleBedroom = true
const secondAccommodationsDormRoom = true
const secondAccommodationsBreakfast = true
const secondAccommodationsLunch = false
const secondAccommodationsDinner = false
const secondAccommodationsWifi = true
const secondAccommodationsPetFriendly = false
const secondAccommodationsParking = false
const secondAccommodationsGyn = false
const secondAccommodationsPool = false
const secondAccommodationsOnSiteRestaurants = false
const secondAccommodationsNearbyRestaurants = false
const secondAccommodationsRoomService = false
const secondAccommodationsTransportService = false
const secondAccommodationsChildrensArea = false

const thirdAccommodationsId = randomUUID()
const thirdAccommodationsStatus = 'active'
const thirdAccommodationsName = 'Hospedagem 3'
const thirdAccommodationsDescription =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
const thirdAccommodationsDailyValue = 30.0
const thirdAccommodationsImagePath =
  'https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=1'
const thirdAccommodationsZipCode = '12605-000'
const thirdAccommodationsAddressName = 'Rua 3'
const thirdAccommodationsDistrictName = 'Bairro C'
const thirdAccommodationsAddressNumber = '700'
const thirdAccommodationsUf = 'RJ'
const thirdAccommodationsCity = 'Cidade Z'
const thirdAccommodationsSingleRoom = true
const thirdAccommodationsDoubleRoom = true
const thirdAccommodationsDoubleBedroom = true
const thirdAccommodationsDormRoom = false
const thirdAccommodationsBreakfast = false
const thirdAccommodationsLunch = false
const thirdAccommodationsDinner = false
const thirdAccommodationsWifi = true
const thirdAccommodationsPetFriendly = false
const thirdAccommodationsParking = false
const thirdAccommodationsGyn = false
const thirdAccommodationsPool = false
const thirdAccommodationsOnSiteRestaurants = false
const thirdAccommodationsNearbyRestaurants = false
const thirdAccommodationsRoomService = false
const thirdAccommodationsTransportService = false
const thirdAccommodationsChildrensArea = false

// itineraries
const firstItineraryId = randomUUID()
const firstItineraryStatus = 'active'
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
const firstItineraryAccommodationId = firstAccommodationsId

const secondItineraryId = randomUUID()
const secondItineraryStatus = 'active'
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
const secondItineraryAccommodationId = secondAccommodationsId

const thirdItineraryId = randomUUID()
const thirdItineraryStatus = 'active'
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
const thirdItineraryAccommodationId = thirdAccommodationsId

// packages
const firstPackageId = randomUUID()
const firstPackageIsActive = 'active'
const firstPackageName = 'Pacote 1'
const firstPackageDescription =
  'Desfrute de dias ensolarados, águas cristalinas e areias douradas na Travessia das Sete Praias!'
const firstPackageImagePath =
  'https://images.pexels.com/photos/15020130/pexels-photo-15020130/free-photo-of-penhasco-abismo-crescendo-aumentando.jpeg'
const firstDepartureDate = '2023-07-13T03:00:00.000Z'
const firstBackDate = '2023-07-18T03:00:00.000Z'
const firstPackageTransferParticular = true
const firstPackageTransferExclusive = true
const firstPackageTransferShared = true

const secondPackageId = randomUUID()
const secondPackageIsActive = 'active'
const secondPackageName = 'Pacote 2'
const secondPackageDescription =
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
const secondPackageImagePath =
  'https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=1'
const secondDepartureDate = '2023-07-13T03:00:00.000Z'
const secondBackDate = '2023-07-21T03:00:00.000Z'
const secondPackageTransferParticular = false
const secondPackageTransferExclusive = false
const secondPackageTransferShared = true

// itinerariesOnPackages
const firstItinerariesOnPackages = randomUUID()
const secondItinerariesOnPackages = randomUUID()
const thirdItinerariesOnPackages = randomUUID()
const fourthItinerariesOnPackages = randomUUID()

async function run() {
  await prisma.user.deleteMany()
  await prisma.rolePermission.deleteMany()
  await prisma.permission.deleteMany()
  await prisma.role.deleteMany()
  await prisma.itinerariesOnPackages.deleteMany()
  await prisma.itinerary.deleteMany()
  await prisma.category.deleteMany()
  await prisma.accommodation.deleteMany()
  await prisma.package.deleteMany()

  // roles
  await Promise.all([
    prisma.role.create({
      data: {
        id: firstRolesId,
        name: firstRolesName,
        createdAt: new Date(),
      },
    }),

    prisma.role.create({
      data: {
        id: secondRolesId,
        name: secondRolesName,
        createdAt: new Date(),
      },
    }),
  ])

  // permissions
  await Promise.all([
    prisma.permission.create({
      data: {
        id: firstPermissionsId,
        name: firstPermissionsName,
        createdAt: new Date(),
      },
    }),

    prisma.permission.create({
      data: {
        id: secondPermissionsId,
        name: secondPermissionsName,
        createdAt: new Date(),
      },
    }),

    prisma.permission.create({
      data: {
        id: thirdPermissionsId,
        name: thirdPermissionsName,
        createdAt: new Date(),
      },
    }),
  ])

  // role permission
  await Promise.all([
    prisma.rolePermission.create({
      data: {
        id: firstRolesPermissionsId,
        roleId: firstRolesPermissionsRoleId,
        permissionId: firstRolesPermissionsPermissionId,
        createdAt: new Date(),
      },
    }),

    prisma.rolePermission.create({
      data: {
        id: secondRolesPermissionsId,
        roleId: secondRolesPermissionsRoleId,
        permissionId: secondRolesPermissionsPermissionId,
        createdAt: new Date(),
      },
    }),

    prisma.rolePermission.create({
      data: {
        id: thirdRolesPermissionsId,
        roleId: thirdRolesPermissionsRoleId,
        permissionId: thirdRolesPermissionsPermissionId,
        createdAt: new Date(),
      },
    }),

    prisma.rolePermission.create({
      data: {
        id: fourthRolesPermissionsId,
        roleId: fourthRolesPermissionsRoleId,
        permissionId: fourthRolesPermissionsPermissionId,
        createdAt: new Date(),
      },
    }),

    prisma.rolePermission.create({
      data: {
        id: fifthRolesPermissionsId,
        roleId: fifthRolesPermissionsRoleId,
        permissionId: fifthRolesPermissionsPermissionId,
        createdAt: new Date(),
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
        roleId: firstUsersRoleId,
        createdAt: new Date(),
      },
    }),

    prisma.user.create({
      data: {
        id: secondUsersId,
        name: secondUsersName,
        email: secondUsersEmail,
        password: secondUsersPassword,
        salt: secondUsersSalt,
        roleId: secondUsersRoleId,
        createdAt: new Date(),
      },
    }),
  ])

  // category
  await Promise.all([
    prisma.category.create({
      data: {
        id: firstCategoryId,
        name: firstCategoryName,
        createdAt: new Date(),
      },
    }),

    prisma.category.create({
      data: {
        id: secondCategoryId,
        name: secondCategoryName,
        createdAt: new Date(),
      },
    }),

    prisma.category.create({
      data: {
        id: thirdCategoryId,
        name: thirdCategoryName,
        createdAt: new Date(),
      },
    }),

    prisma.category.create({
      data: {
        id: fourthCategoryId,
        name: fourthCategoryName,
        createdAt: new Date(),
      },
    }),

    prisma.category.create({
      data: {
        id: fifthCategoryId,
        name: fifthCategoryName,
        createdAt: new Date(),
      },
    }),
  ])

  // accommodations
  await Promise.all([
    prisma.accommodation.create({
      data: {
        id: firstAccommodationsId,
        isActive: firstAccommodationsStatus,
        name: firstAccommodationsName,
        description: firstAccommodationsDescription,
        dailyValue: firstAccommodationsDailyValue,
        imagePath: firstAccommodationsImagePath,
        zipCode: firstAccommodationsZipCode,
        addressName: firstAccommodationsAddressName,
        districtName: firstAccommodationsDistrictName,
        addressNumber: firstAccommodationsAddressNumber,
        uf: firstAccommodationsUf,
        city: firstAccommodationsCity,
        singleRoom: firstAccommodationsSingleRoom,
        doubleRoom: firstAccommodationsDoubleRoom,
        doubleBedroom: firstAccommodationsDoubleBedroom,
        dormRoom: firstAccommodationsDormRoom,
        breakfast: firstAccommodationsBreakfast,
        lunch: firstAccommodationsLunch,
        dinner: firstAccommodationsDinner,
        wifi: firstAccommodationsWifi,
        petFriendly: firstAccommodationsPetFriendly,
        parking: firstAccommodationsParking,
        gyn: firstAccommodationsGyn,
        pool: firstAccommodationsPool,
        onSiteRestaurants: firstAccommodationsOnSiteRestaurants,
        nearbyRestaurants: firstAccommodationsNearbyRestaurants,
        roomService: firstAccommodationsRoomService,
        transportService: firstAccommodationsTransportService,
        childrensArea: firstAccommodationsChildrensArea,
        createdAt: new Date(),
      },
    }),

    prisma.accommodation.create({
      data: {
        id: secondAccommodationsId,
        isActive: secondAccommodationsStatus,
        name: secondAccommodationsName,
        description: secondAccommodationsDescription,
        dailyValue: secondAccommodationsDailyValue,
        imagePath: secondAccommodationsImagePath,
        zipCode: secondAccommodationsZipCode,
        addressName: secondAccommodationsAddressName,
        districtName: secondAccommodationsDistrictName,
        addressNumber: secondAccommodationsAddressNumber,
        uf: secondAccommodationsUf,
        city: secondAccommodationsCity,
        singleRoom: secondAccommodationsSingleRoom,
        doubleRoom: secondAccommodationsDoubleRoom,
        doubleBedroom: secondAccommodationsDoubleBedroom,
        dormRoom: secondAccommodationsDormRoom,
        breakfast: secondAccommodationsBreakfast,
        lunch: secondAccommodationsLunch,
        dinner: secondAccommodationsDinner,
        wifi: secondAccommodationsWifi,
        petFriendly: secondAccommodationsPetFriendly,
        parking: secondAccommodationsParking,
        gyn: secondAccommodationsGyn,
        pool: secondAccommodationsPool,
        onSiteRestaurants: secondAccommodationsOnSiteRestaurants,
        nearbyRestaurants: secondAccommodationsNearbyRestaurants,
        roomService: secondAccommodationsRoomService,
        transportService: secondAccommodationsTransportService,
        childrensArea: secondAccommodationsChildrensArea,
        createdAt: new Date(),
      },
    }),

    prisma.accommodation.create({
      data: {
        id: thirdAccommodationsId,
        isActive: thirdAccommodationsStatus,
        name: thirdAccommodationsName,
        description: thirdAccommodationsDescription,
        dailyValue: thirdAccommodationsDailyValue,
        imagePath: thirdAccommodationsImagePath,
        zipCode: thirdAccommodationsZipCode,
        addressName: thirdAccommodationsAddressName,
        districtName: thirdAccommodationsDistrictName,
        addressNumber: thirdAccommodationsAddressNumber,
        uf: thirdAccommodationsUf,
        city: thirdAccommodationsCity,
        singleRoom: thirdAccommodationsSingleRoom,
        doubleRoom: thirdAccommodationsDoubleRoom,
        doubleBedroom: thirdAccommodationsDoubleBedroom,
        dormRoom: thirdAccommodationsDormRoom,
        breakfast: thirdAccommodationsBreakfast,
        lunch: thirdAccommodationsLunch,
        dinner: thirdAccommodationsDinner,
        wifi: thirdAccommodationsWifi,
        petFriendly: thirdAccommodationsPetFriendly,
        parking: thirdAccommodationsParking,
        gyn: thirdAccommodationsGyn,
        pool: thirdAccommodationsPool,
        onSiteRestaurants: thirdAccommodationsOnSiteRestaurants,
        nearbyRestaurants: thirdAccommodationsNearbyRestaurants,
        roomService: thirdAccommodationsRoomService,
        transportService: thirdAccommodationsTransportService,
        childrensArea: thirdAccommodationsChildrensArea,
        createdAt: new Date(),
      },
    }),
  ])

  // itinerary
  await Promise.all([
    prisma.itinerary.create({
      data: {
        id: firstItineraryId,
        isActive: firstItineraryStatus,
        name: firstItineraryName,
        numberOfDays: firstItineraryNumberOfDays,
        description: firstItineraryDescription,
        valuePerPerson: firstItineraryValuePerPerson,
        content: firstItineraryContent,
        classification: firstItineraryClassification,
        categoryId: firstItineraryCategoryId,
        accommodationId: firstItineraryAccommodationId,
        createdAt: new Date(),
      },
    }),

    prisma.itinerary.create({
      data: {
        id: secondItineraryId,
        isActive: secondItineraryStatus,
        name: secondItineraryName,
        numberOfDays: secondItineraryNumberOfDays,
        description: secondItineraryDescription,
        valuePerPerson: secondItineraryValuePerPerson,
        content: secondItineraryContent,
        classification: secondItineraryClassification,
        categoryId: secondItineraryCategoryId,
        accommodationId: secondItineraryAccommodationId,
        createdAt: new Date(),
      },
    }),

    prisma.itinerary.create({
      data: {
        id: thirdItineraryId,
        isActive: thirdItineraryStatus,
        name: thirdItineraryName,
        numberOfDays: thirdItineraryNumberOfDays,
        description: thirdItineraryDescription,
        valuePerPerson: thirdItineraryValuePerPerson,
        content: thirdItineraryContent,
        classification: thirdItineraryClassification,
        categoryId: thirdItineraryCategoryId,
        accommodationId: thirdItineraryAccommodationId,
        createdAt: new Date(),
      },
    }),
  ])

  // package
  await Promise.all([
    prisma.package.create({
      data: {
        id: firstPackageId,
        isActive: firstPackageIsActive,
        name: firstPackageName,
        description: firstPackageDescription,
        imagePath: firstPackageImagePath,
        departureDate: firstDepartureDate,
        backDate: firstBackDate,
        transferParticular: firstPackageTransferParticular,
        transferExclusive: firstPackageTransferExclusive,
        transferShared: firstPackageTransferShared,
        createdAt: new Date(),
      },
    }),

    prisma.package.create({
      data: {
        id: secondPackageId,
        isActive: secondPackageIsActive,
        name: secondPackageName,
        description: secondPackageDescription,
        imagePath: secondPackageImagePath,
        departureDate: secondDepartureDate,
        backDate: secondBackDate,
        transferParticular: secondPackageTransferParticular,
        transferExclusive: secondPackageTransferExclusive,
        transferShared: secondPackageTransferShared,
        createdAt: new Date(),
      },
    }),
  ])

  // itinerariesOnPackages
  await Promise.all([
    prisma.itinerariesOnPackages.create({
      data: {
        id: firstItinerariesOnPackages,
        packageId: firstPackageId,
        itineraryId: firstItineraryId,
        createdAt: new Date(),
      },
    }),

    prisma.itinerariesOnPackages.create({
      data: {
        id: secondItinerariesOnPackages,
        packageId: firstPackageId,
        itineraryId: secondItineraryId,
        createdAt: new Date(),
      },
    }),

    prisma.itinerariesOnPackages.create({
      data: {
        id: thirdItinerariesOnPackages,
        packageId: secondPackageId,
        itineraryId: firstItineraryId,
        createdAt: new Date(),
      },
    }),

    prisma.itinerariesOnPackages.create({
      data: {
        id: fourthItinerariesOnPackages,
        packageId: secondPackageId,
        itineraryId: thirdItineraryId,
        createdAt: new Date(),
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
