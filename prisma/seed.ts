import { PrismaClient } from '@prisma/client'
import { randomUUID } from 'crypto'

const prisma = new PrismaClient()

// #region roles
const firstRolesId = randomUUID()
const firstRolesName = 'administrator'

const secondRolesId = randomUUID()
const secondRolesName = 'user'
// #endregion

// #region users
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
// #endregion

// #region permissions
const firstPermissionsId = randomUUID()
const firstPermissionsName = 'users.list'

const secondPermissionsId = randomUUID()
const secondPermissionsName = 'users.create'

const thirdPermissionsId = randomUUID()
const thirdPermissionsName = 'metrics.list'
// #endregion

// #region permissionsOnRoles
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
// #endregion

// #region categories
const firstCategoryId = randomUUID()
const firstCategoryName = 'Litoral Norte'

const secondCategoryId = randomUUID()
const secondCategoryName = 'Serra da Mantiqueira'

const thirdCategoryId = randomUUID()
const thirdCategoryName = 'Vale histórico'

const fourthCategoryId = randomUUID()
const fourthCategoryName = 'Rios do Vale'

const fifthCategoryId = randomUUID()
const fifthCategoryName = 'Circuito religioso'
// #endregion

// #region accommodations
const firstAccommodationsId = randomUUID()
const firstAccommodationsStatus = 'active'
const firstAccommodationsName = 'Aldeia da Lagoinha'
const firstAccommodationsDescription =
  'Apresentando WiFi gratuito em toda a propriedade, a Aldeia Da Lagoinha oferece acomodação em Ubatuba. A praia mais próxima fica a 300 m, e o estacionamento privativo gratuito também está disponível no local.'
const firstAccommodationsDailyValue = 10.0
const firstAccommodationsImagePath =
  'https://images.pexels.com/photos/59924/pexels-photo-59924.jpeg?auto=compress&cs=tinysrgb&w=2880&h=1622&dpr=1'
const firstAccommodationsZipCode = '11680-000'
const firstAccommodationsAddressName = 'Rua São Paulo'
const firstAccommodationsDistrictName = 'Praia da Lagoinha'
const firstAccommodationsAddressNumber = '607'
const firstAccommodationsUf = 'SP'
const firstAccommodationsCity = 'Ubatuba'
const firstAccommodationsSingleRoom = true
const firstAccommodationsDoubleRoom = true
const firstAccommodationsDoubleBedroom = true
const firstAccommodationsDormRoom = true
const firstAccommodationsBreakfast = true
const firstAccommodationsLunch = false
const firstAccommodationsDinner = false
const firstAccommodationsWifi = true
const firstAccommodationsPetFriendly = false
const firstAccommodationsParking = true
const firstAccommodationsGyn = false
const firstAccommodationsPool = true
const firstAccommodationsOnSiteRestaurants = false
const firstAccommodationsNearbyRestaurants = true
const firstAccommodationsRoomService = false
const firstAccommodationsTransportService = true
const firstAccommodationsChildrensArea = true

const secondAccommodationsId = randomUUID()
const secondAccommodationsStatus = 'active'
const secondAccommodationsName = 'Chalés Ohana'
const secondAccommodationsDescription =
  'Ohana é uma família que brinda serviços de hospedagem na paradisíaca Praia da Fortaleza - Ubatuba/SP\nLocalizada a apenas 60 metros da praia, é ideal para quem gosta do equilíbrio, paz e sossego.'
const secondAccommodationsDailyValue = 20.0
const secondAccommodationsImagePath =
  'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=2880&h=1622&dpr=1'
const secondAccommodationsZipCode = '12605-000'
const secondAccommodationsAddressName = 'Rua Ilhas'
const secondAccommodationsDistrictName = 'Praia da Fortaleza'
const secondAccommodationsAddressNumber = '114'
const secondAccommodationsUf = 'SP'
const secondAccommodationsCity = 'Ubatuba'
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
const thirdAccommodationsName = 'Dan Inn Campos do Jordão'
const thirdAccommodationsDescription =
  'Dispondo de uma piscina coberta, sauna e academia, o Dan Inn Campos do Jordão está situado a 1,7 km de Capivari e a 2,2 km de Belvedere. Para sua comodidade, o Wi-Fi em toda a propriedade e um estacionamento privativo no local estão disponíveis, ambos gratuitos.'
const thirdAccommodationsDailyValue = 30.0
const thirdAccommodationsImagePath =
  'https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=1'
const thirdAccommodationsZipCode = '12460-000'
const thirdAccommodationsAddressName = 'Rua Joaquim Pinto Seabra'
const thirdAccommodationsDistrictName = 'Jaguraibe'
const thirdAccommodationsAddressNumber = '170'
const thirdAccommodationsUf = 'SP'
const thirdAccommodationsCity = 'Campos do Jordão'
const thirdAccommodationsSingleRoom = true
const thirdAccommodationsDoubleRoom = true
const thirdAccommodationsDoubleBedroom = true
const thirdAccommodationsDormRoom = false
const thirdAccommodationsBreakfast = true
const thirdAccommodationsLunch = false
const thirdAccommodationsDinner = false
const thirdAccommodationsWifi = true
const thirdAccommodationsPetFriendly = false
const thirdAccommodationsParking = true
const thirdAccommodationsGyn = true
const thirdAccommodationsPool = true
const thirdAccommodationsOnSiteRestaurants = false
const thirdAccommodationsNearbyRestaurants = true
const thirdAccommodationsRoomService = false
const thirdAccommodationsTransportService = false
const thirdAccommodationsChildrensArea = false

const fourthAccommodationsId = randomUUID()
const fourthAccommodationsStatus = 'active'
const fourthAccommodationsName = 'Ramada Encore Cruzeiro'
const fourthAccommodationsDescription =
  'Dispondo de acomodações 3 estrelas, o Ramada Encore Cruzeiro está localizado em Cruzeiro, a 48 km da Estação Rodoviária de Aparecida e a 50 km do Santuário Nacional. Este hotel 3 estrelas dispõe de academia e quartos com ar-condicionado, Wi-Fi gratuito e banheiro privativo.'
const fourthAccommodationsDailyValue = 30.0
const fourthAccommodationsImagePath =
  'https://images.pexels.com/photos/2403017/pexels-photo-2403017.jpeg?auto=compress&cs=tinysrgb&w=2880&h=1622&dpr=1'
const fourthAccommodationsZipCode = '12701-350'
const fourthAccommodationsAddressName = 'Rua Capitão Neco'
const fourthAccommodationsDistrictName = 'Vila Ana Rosa Novaes'
const fourthAccommodationsAddressNumber = '631'
const fourthAccommodationsUf = 'SP'
const fourthAccommodationsCity = 'Cruzeiro'
const fourthAccommodationsSingleRoom = true
const fourthAccommodationsDoubleRoom = true
const fourthAccommodationsDoubleBedroom = true
const fourthAccommodationsDormRoom = false
const fourthAccommodationsBreakfast = true
const fourthAccommodationsLunch = false
const fourthAccommodationsDinner = false
const fourthAccommodationsWifi = true
const fourthAccommodationsPetFriendly = false
const fourthAccommodationsParking = true
const fourthAccommodationsGyn = true
const fourthAccommodationsPool = true
const fourthAccommodationsOnSiteRestaurants = false
const fourthAccommodationsNearbyRestaurants = true
const fourthAccommodationsRoomService = false
const fourthAccommodationsTransportService = false
const fourthAccommodationsChildrensArea = false

const fifthAccommodationsId = randomUUID()
const fifthAccommodationsStatus = 'active'
const fifthAccommodationsName = 'Gran Continental Hotel Taubaté'
const fifthAccommodationsDescription =
  'Dispondo de restaurante e academia, o Gran Continental Hotel está localizado em Taubaté. A propriedade oferece Wi-Fi gratuito e um café da manhã continental de cortesia, servido diariamente.'
const fifthAccommodationsDailyValue = 30.0
const fifthAccommodationsImagePath =
  'https://images.pexels.com/photos/2878785/pexels-photo-2878785.jpeg?auto=compress&cs=tinysrgb&w=2880&h=1622&dpr=1'
const fifthAccommodationsZipCode = '12030-000'
const fifthAccommodationsAddressName = 'Rua Dr. Emilio Winther'
const fifthAccommodationsDistrictName = 'Jardim das Nações'
const fifthAccommodationsAddressNumber = '1390'
const fifthAccommodationsUf = 'SP'
const fifthAccommodationsCity = 'Taubaté'
const fifthAccommodationsSingleRoom = true
const fifthAccommodationsDoubleRoom = true
const fifthAccommodationsDoubleBedroom = true
const fifthAccommodationsDormRoom = false
const fifthAccommodationsBreakfast = true
const fifthAccommodationsLunch = false
const fifthAccommodationsDinner = false
const fifthAccommodationsWifi = true
const fifthAccommodationsPetFriendly = false
const fifthAccommodationsParking = true
const fifthAccommodationsGyn = true
const fifthAccommodationsPool = true
const fifthAccommodationsOnSiteRestaurants = false
const fifthAccommodationsNearbyRestaurants = true
const fifthAccommodationsRoomService = false
const fifthAccommodationsTransportService = false
const fifthAccommodationsChildrensArea = false

const sixthAccommodationsId = randomUUID()
const sixthAccommodationsStatus = 'active'
const sixthAccommodationsName = 'Summit GranVale Hotel'
const sixthAccommodationsDescription =
  'O Summit granvale Hotel dispõe de piscina ao ar livre e banheira de hidromassagem. O Wi-Fi gratuito está disponível em toda a propriedade e o estacionamento privativo de cortesia é fornecido no local.'
const sixthAccommodationsDailyValue = 30.0
const sixthAccommodationsImagePath =
  'https://images.pexels.com/photos/1771832/pexels-photo-1771832.jpeg?auto=compress&cs=tinysrgb&w=2880&h=1622&dpr=1'
const sixthAccommodationsZipCode = '12284-060'
const sixthAccommodationsAddressName = 'Rua João Benedito Moreira'
const sixthAccommodationsDistrictName = 'Jardim Maria Cândida'
const sixthAccommodationsAddressNumber = '40'
const sixthAccommodationsUf = 'SP'
const sixthAccommodationsCity = 'Caçapava'
const sixthAccommodationsSingleRoom = true
const sixthAccommodationsDoubleRoom = true
const sixthAccommodationsDoubleBedroom = true
const sixthAccommodationsDormRoom = false
const sixthAccommodationsBreakfast = true
const sixthAccommodationsLunch = true
const sixthAccommodationsDinner = true
const sixthAccommodationsWifi = true
const sixthAccommodationsPetFriendly = false
const sixthAccommodationsParking = true
const sixthAccommodationsGyn = false
const sixthAccommodationsPool = true
const sixthAccommodationsOnSiteRestaurants = true
const sixthAccommodationsNearbyRestaurants = true
const sixthAccommodationsRoomService = false
const sixthAccommodationsTransportService = false
const sixthAccommodationsChildrensArea = false

const seventhAccommodationsId = randomUUID()
const seventhAccommodationsStatus = 'active'
const seventhAccommodationsName = 'Hotel Faenician'
const seventhAccommodationsDescription =
  'O Faenician Aparecida fica a apenas 20 m da Basílica Nova e da Passarela da Fé. A propriedade oferece quartos com ar-condicionado e um variado buffet de café da manhã. Para a sua maior comodidade, o Wi-Fi é gratuito.'
const seventhAccommodationsDailyValue = 30.0
const seventhAccommodationsImagePath =
  'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=2880&h=1622&dpr=1'
const seventhAccommodationsZipCode = '12570-000'
const seventhAccommodationsAddressName = 'Rua Vicente Pasin'
const seventhAccommodationsDistrictName = 'Santa Rita'
const seventhAccommodationsAddressNumber = '208'
const seventhAccommodationsUf = 'SP'
const seventhAccommodationsCity = 'Aparecida'
const seventhAccommodationsSingleRoom = true
const seventhAccommodationsDoubleRoom = true
const seventhAccommodationsDoubleBedroom = true
const seventhAccommodationsDormRoom = false
const seventhAccommodationsBreakfast = true
const seventhAccommodationsLunch = true
const seventhAccommodationsDinner = true
const seventhAccommodationsWifi = true
const seventhAccommodationsPetFriendly = false
const seventhAccommodationsParking = true
const seventhAccommodationsGyn = false
const seventhAccommodationsPool = false
const seventhAccommodationsOnSiteRestaurants = true
const seventhAccommodationsNearbyRestaurants = true
const seventhAccommodationsRoomService = false
const seventhAccommodationsTransportService = false
const seventhAccommodationsChildrensArea = false
// #endregion

// #region itineraries
const firstItineraryId = randomUUID()
const firstItineraryStatus = 'active'
const firstItineraryName = 'Praias 1 - 3'
const firstItineraryNumberOfDays = 2
const firstItineraryDescription =
  'Início do percurso, partindo da Praia da Lagoinha, consiste das três primeiras praias desta travessia: Praia Oeste, Praia Peres e Praia Bonete.'
const firstItineraryValuePerPerson = 10.0
const firstItineraryContent = ['Guia local', 'Equipe de primeiros socorros']
const firstItineraryClassification = ['Recomendado para iniciantes']
const firstItineraryCategoryId = firstCategoryId
const firstItineraryAccommodationId = firstAccommodationsId

const secondItineraryId = randomUUID()
const secondItineraryStatus = 'active'
const secondItineraryName = 'Praias 4 - 7'
const secondItineraryNumberOfDays = 3
const secondItineraryDescription =
  'Restante do percuso da travessia, através das 4 outras praias, sendo elas: Praia Grande do Bonete, Praia Deserta e Praia Cedro do Sul , até seu fim na Praia da Fortaleza.'
const secondItineraryValuePerPerson = 15.5
const secondItineraryContent = ['Guia local', 'Equipe de primeiros socorros']
const secondItineraryClassification = ['Recomendado para iniciantes']
const secondItineraryCategoryId = firstCategoryId
const secondItineraryAccommodationId = secondAccommodationsId

const thirdItineraryId = randomUUID()
const thirdItineraryStatus = 'active'
const thirdItineraryName = 'Conhecendo Campos do Jordão'
const thirdItineraryNumberOfDays = 8
const thirdItineraryDescription =
  'Algumas vezes chamada de "Suíça do Brasil", a cidade de Campos do Jordão, perto de São Paulo, oferece arquitetura no estilo chalé e cozinha alemã e suíça.'
const thirdItineraryValuePerPerson = 20
const thirdItineraryContent = [
  'Transporte com ar-condicionado',
  'Guia local',
  'Seguro',
]
const thirdItineraryClassification = ['Tour urbano', 'Para todas as idades']
const thirdItineraryCategoryId = secondCategoryId
const thirdItineraryAccommodationId = thirdAccommodationsId

const fourthItineraryId = randomUUID()
const fourthItineraryStatus = 'active'
const fourthItineraryName = 'Principais pontos turísticos de Cruzeiro'
const fourthItineraryNumberOfDays = 3
const fourthItineraryDescription =
  'A jornada começa no Museu Major Novaes, onde você será transportado de volta no tempo através de exposições fascinantes, fotografias e artefatos que contam a história da região.'
const fourthItineraryValuePerPerson = 20
const fourthItineraryContent = ['Transporte com wi-fi', 'Guia local']
const fourthItineraryClassification = [
  'Tour urbano',
  'Indicado para pessoas de idade',
  'Viagem informativa',
]
const fourthItineraryCategoryId = thirdCategoryId
const fourthItineraryAccommodationId = fourthAccommodationsId

const fifthItineraryId = randomUUID()
const fifthItineraryStatus = 'active'
const fifthItineraryName = 'Lugares para conhecer em Taubaté'
const fifthItineraryNumberOfDays = 5
const fifthItineraryDescription =
  'Além de ser considerada o segundo maior polo industrial da região, a cidade de Taubaté também é conhecida por ser base de grandes empresas e por seu vasto patrimônio cultural.'
const fifthItineraryValuePerPerson = 20
const fifthItineraryContent = [
  'Transporte com wi-fi',
  'Transporte com ar-condicionado',
]
const fifthItineraryClassification = [
  'Tour urbano',
  'Indicado para pessoas com crianças',
  'Viagem cultural',
]
const fifthItineraryCategoryId = fourthCategoryId
const fifthItineraryAccommodationId = fifthAccommodationsId

const sixthItineraryId = randomUUID()
const sixthItineraryStatus = 'active'
const sixthItineraryName = 'Explore Caçapava'
const sixthItineraryNumberOfDays = 5
const sixthItineraryDescription =
  'Apesar de pequena, Caçapava se destaca por sediar uma das maiores festas juninas do estado de São Paulo, por ter uma igreja bicentenária, uma fantástica fábrica de chocolates e até um museu com um carro que foi usado pela família real britânica.'
const sixthItineraryValuePerPerson = 20
const sixthItineraryContent = ['Seguro', 'Guia local']
const sixthItineraryClassification = [
  'Tour urbano',
  'Para todas as idades',
  'Viagem histórica',
]
const sixthItineraryCategoryId = fourthCategoryId
const sixthItineraryAccommodationId = sixthAccommodationsId

const seventhItineraryId = randomUUID()
const seventhItineraryStatus = 'active'
const seventhItineraryName = 'Visitando a fé em Aparecida'
const seventhItineraryNumberOfDays = 2
const seventhItineraryDescription =
  'Aparecida, um destino sagrado e inspirador que atrai milhões de visitantes todos os anos. Localizada no estado de São Paulo, Aparecida é conhecida mundialmente como o lar da Basílica de Nossa Senhora Aparecida.'
const seventhItineraryValuePerPerson = 20
const seventhItineraryContent = ['Transporte com wi-fi', 'Guia local']
const seventhItineraryClassification = [
  'Tour urbano',
  'Indicado para pessoas de idade',
  'Viagem religiosa',
]
const seventhItineraryCategoryId = fifthCategoryId
const seventhItineraryAccommodationId = seventhAccommodationsId
// #endregion

// #region packages
const firstPackageId = randomUUID()
const firstPackageIsActive = 'active'
const firstPackageName = 'Travessia das Sete Praias'
const firstPackageDescription =
  'A Travessia das Sete Praias de Ubatuba é uma aventura inesquecível para os amantes do ecoturismo e da natureza. Ao longo do caminho, você poderá desfrutar de algumas das mais belas paisagens naturais da região sul de Ubatuba.'
const firstPackageImagePath =
  'https://images.pexels.com/photos/14664861/pexels-photo-14664861.jpeg'
const firstDepartureDate = '2023-07-13T03:00:00.000Z'
const firstBackDate = '2023-07-18T03:00:00.000Z'
const firstPackageTransferParticular = true
const firstPackageTransferExclusive = true
const firstPackageTransferShared = true

const secondPackageId = randomUUID()
const secondPackageIsActive = 'active'
const secondPackageName = 'Conheça a Suíça Brasileira'
const secondPackageDescription =
  'Descubra a “Suíça brasileira” nesta abrangente viagem. Aproveite o passeio panorâmico pela região até chegarmos à pacata cidade de Campos do Jordão.'
const secondPackageImagePath =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Pórtico_de_Campos_do_Jordão.jpg/2560px-Pórtico_de_Campos_do_Jordão.jpg'
const secondDepartureDate = '2023-07-13T03:00:00.000Z'
const secondBackDate = '2023-07-21T03:00:00.000Z'
const secondPackageTransferParticular = false
const secondPackageTransferExclusive = false
const secondPackageTransferShared = true

const thirdPackageId = randomUUID()
const thirdPackageIsActive = 'active'
const thirdPackageName = 'Viagem pela história'
const thirdPackageDescription =
  'Descubra a encantadora cidade de Cruzeiro e mergulhe em sua rica história com nosso pacote de viagem exclusivo. Localizada no Vale do Paraíba, Cruzeiro é um tesouro histórico que cativa os viajantes com seus marcos fascinantes e atmosfera acolhedora.'
const thirdPackageImagePath =
  'https://upload.wikimedia.org/wikipedia/commons/4/4f/Pico_da_Gomeira_Serra_da_Mantiqueira_January_2014.jpg'
const thirdDepartureDate = '2023-07-13T03:00:00.000Z'
const thirdBackDate = '2023-07-16T03:00:00.000Z'
const thirdPackageTransferParticular = true
const thirdPackageTransferExclusive = false
const thirdPackageTransferShared = true

const fourthPackageId = randomUUID()
const fourthPackageIsActive = 'active'
const fourthPackageName = 'Rios do Vale'
const fourthPackageDescription =
  'Desfrute da hospitalidade oferecida pelas carismáticas cidades do Vale do Paraíba que compõe a região turística Rios do Vale e conheça um pouco mais de suas histórias e culturas.'
const fourthPackageImagePath =
  'https://images.pexels.com/photos/2519390/pexels-photo-2519390.jpeg?auto=compress&cs=tinysrgb&w=2880&h=1622&dpr=1'
const fourthDepartureDate = '2023-07-13T03:00:00.000Z'
const fourthBackDate = '2023-07-23T03:00:00.000Z'
const fourthPackageTransferParticular = false
const fourthPackageTransferExclusive = true
const fourthPackageTransferShared = true

const fifthPackageId = randomUUID()
const fifthPackageIsActive = 'active'
const fifthPackageName = 'Tour da Fé'
const fifthPackageDescription =
  'A basílica de Nossa Senhora Aparecida, a Canção Nova e os locais dedicados a Frei Galvão, o primeiro santo brasileiro, são destaques do circuito turístico religioso.'
const fifthPackageImagePath =
  'https://images.pexels.com/photos/12990351/pexels-photo-12990351.jpeg?w=2880&h=1620'
const fifthDepartureDate = '2023-07-13T03:00:00.000Z'
const fifthBackDate = '2023-07-15T03:00:00.000Z'
const fifthPackageTransferParticular = true
const fifthPackageTransferExclusive = true
const fifthPackageTransferShared = true
// #endregion

// #region itinerariesOnPackages
const firstItinerariesOnPackages = randomUUID()
const secondItinerariesOnPackages = randomUUID()
const thirdItinerariesOnPackages = randomUUID()
const fourthItinerariesOnPackages = randomUUID()
const fifthItinerariesOnPackages = randomUUID()
const sixthItinerariesOnPackages = randomUUID()
const seventhItinerariesOnPackages = randomUUID()
// #endregion

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

    prisma.accommodation.create({
      data: {
        id: fourthAccommodationsId,
        isActive: fourthAccommodationsStatus,
        name: fourthAccommodationsName,
        description: fourthAccommodationsDescription,
        dailyValue: fourthAccommodationsDailyValue,
        imagePath: fourthAccommodationsImagePath,
        zipCode: fourthAccommodationsZipCode,
        addressName: fourthAccommodationsAddressName,
        districtName: fourthAccommodationsDistrictName,
        addressNumber: fourthAccommodationsAddressNumber,
        uf: fourthAccommodationsUf,
        city: fourthAccommodationsCity,
        singleRoom: fourthAccommodationsSingleRoom,
        doubleRoom: fourthAccommodationsDoubleRoom,
        doubleBedroom: fourthAccommodationsDoubleBedroom,
        dormRoom: fourthAccommodationsDormRoom,
        breakfast: fourthAccommodationsBreakfast,
        lunch: fourthAccommodationsLunch,
        dinner: fourthAccommodationsDinner,
        wifi: fourthAccommodationsWifi,
        petFriendly: fourthAccommodationsPetFriendly,
        parking: fourthAccommodationsParking,
        gyn: fourthAccommodationsGyn,
        pool: fourthAccommodationsPool,
        onSiteRestaurants: fourthAccommodationsOnSiteRestaurants,
        nearbyRestaurants: fourthAccommodationsNearbyRestaurants,
        roomService: fourthAccommodationsRoomService,
        transportService: fourthAccommodationsTransportService,
        childrensArea: fourthAccommodationsChildrensArea,
        createdAt: new Date(),
      },
    }),

    prisma.accommodation.create({
      data: {
        id: fifthAccommodationsId,
        isActive: fifthAccommodationsStatus,
        name: fifthAccommodationsName,
        description: fifthAccommodationsDescription,
        dailyValue: fifthAccommodationsDailyValue,
        imagePath: fifthAccommodationsImagePath,
        zipCode: fifthAccommodationsZipCode,
        addressName: fifthAccommodationsAddressName,
        districtName: fifthAccommodationsDistrictName,
        addressNumber: fifthAccommodationsAddressNumber,
        uf: fifthAccommodationsUf,
        city: fifthAccommodationsCity,
        singleRoom: fifthAccommodationsSingleRoom,
        doubleRoom: fifthAccommodationsDoubleRoom,
        doubleBedroom: fifthAccommodationsDoubleBedroom,
        dormRoom: fifthAccommodationsDormRoom,
        breakfast: fifthAccommodationsBreakfast,
        lunch: fifthAccommodationsLunch,
        dinner: fifthAccommodationsDinner,
        wifi: fifthAccommodationsWifi,
        petFriendly: fifthAccommodationsPetFriendly,
        parking: fifthAccommodationsParking,
        gyn: fifthAccommodationsGyn,
        pool: fifthAccommodationsPool,
        onSiteRestaurants: fifthAccommodationsOnSiteRestaurants,
        nearbyRestaurants: fifthAccommodationsNearbyRestaurants,
        roomService: fifthAccommodationsRoomService,
        transportService: fifthAccommodationsTransportService,
        childrensArea: fifthAccommodationsChildrensArea,
        createdAt: new Date(),
      },
    }),

    prisma.accommodation.create({
      data: {
        id: sixthAccommodationsId,
        isActive: sixthAccommodationsStatus,
        name: sixthAccommodationsName,
        description: sixthAccommodationsDescription,
        dailyValue: sixthAccommodationsDailyValue,
        imagePath: sixthAccommodationsImagePath,
        zipCode: sixthAccommodationsZipCode,
        addressName: sixthAccommodationsAddressName,
        districtName: sixthAccommodationsDistrictName,
        addressNumber: sixthAccommodationsAddressNumber,
        uf: sixthAccommodationsUf,
        city: sixthAccommodationsCity,
        singleRoom: sixthAccommodationsSingleRoom,
        doubleRoom: sixthAccommodationsDoubleRoom,
        doubleBedroom: sixthAccommodationsDoubleBedroom,
        dormRoom: sixthAccommodationsDormRoom,
        breakfast: sixthAccommodationsBreakfast,
        lunch: sixthAccommodationsLunch,
        dinner: sixthAccommodationsDinner,
        wifi: sixthAccommodationsWifi,
        petFriendly: sixthAccommodationsPetFriendly,
        parking: sixthAccommodationsParking,
        gyn: sixthAccommodationsGyn,
        pool: sixthAccommodationsPool,
        onSiteRestaurants: sixthAccommodationsOnSiteRestaurants,
        nearbyRestaurants: sixthAccommodationsNearbyRestaurants,
        roomService: sixthAccommodationsRoomService,
        transportService: sixthAccommodationsTransportService,
        childrensArea: sixthAccommodationsChildrensArea,
        createdAt: new Date(),
      },
    }),

    prisma.accommodation.create({
      data: {
        id: seventhAccommodationsId,
        isActive: seventhAccommodationsStatus,
        name: seventhAccommodationsName,
        description: seventhAccommodationsDescription,
        dailyValue: seventhAccommodationsDailyValue,
        imagePath: seventhAccommodationsImagePath,
        zipCode: seventhAccommodationsZipCode,
        addressName: seventhAccommodationsAddressName,
        districtName: seventhAccommodationsDistrictName,
        addressNumber: seventhAccommodationsAddressNumber,
        uf: seventhAccommodationsUf,
        city: seventhAccommodationsCity,
        singleRoom: seventhAccommodationsSingleRoom,
        doubleRoom: seventhAccommodationsDoubleRoom,
        doubleBedroom: seventhAccommodationsDoubleBedroom,
        dormRoom: seventhAccommodationsDormRoom,
        breakfast: seventhAccommodationsBreakfast,
        lunch: seventhAccommodationsLunch,
        dinner: seventhAccommodationsDinner,
        wifi: seventhAccommodationsWifi,
        petFriendly: seventhAccommodationsPetFriendly,
        parking: seventhAccommodationsParking,
        gyn: seventhAccommodationsGyn,
        pool: seventhAccommodationsPool,
        onSiteRestaurants: seventhAccommodationsOnSiteRestaurants,
        nearbyRestaurants: seventhAccommodationsNearbyRestaurants,
        roomService: seventhAccommodationsRoomService,
        transportService: seventhAccommodationsTransportService,
        childrensArea: seventhAccommodationsChildrensArea,
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

    prisma.itinerary.create({
      data: {
        id: fourthItineraryId,
        isActive: fourthItineraryStatus,
        name: fourthItineraryName,
        numberOfDays: fourthItineraryNumberOfDays,
        description: fourthItineraryDescription,
        valuePerPerson: fourthItineraryValuePerPerson,
        content: fourthItineraryContent,
        classification: fourthItineraryClassification,
        categoryId: fourthItineraryCategoryId,
        accommodationId: fourthItineraryAccommodationId,
        createdAt: new Date(),
      },
    }),

    prisma.itinerary.create({
      data: {
        id: fifthItineraryId,
        isActive: fifthItineraryStatus,
        name: fifthItineraryName,
        numberOfDays: fifthItineraryNumberOfDays,
        description: fifthItineraryDescription,
        valuePerPerson: fifthItineraryValuePerPerson,
        content: fifthItineraryContent,
        classification: fifthItineraryClassification,
        categoryId: fifthItineraryCategoryId,
        accommodationId: fifthItineraryAccommodationId,
        createdAt: new Date(),
      },
    }),

    prisma.itinerary.create({
      data: {
        id: sixthItineraryId,
        isActive: sixthItineraryStatus,
        name: sixthItineraryName,
        numberOfDays: sixthItineraryNumberOfDays,
        description: sixthItineraryDescription,
        valuePerPerson: sixthItineraryValuePerPerson,
        content: sixthItineraryContent,
        classification: sixthItineraryClassification,
        categoryId: sixthItineraryCategoryId,
        accommodationId: sixthItineraryAccommodationId,
        createdAt: new Date(),
      },
    }),

    prisma.itinerary.create({
      data: {
        id: seventhItineraryId,
        isActive: seventhItineraryStatus,
        name: seventhItineraryName,
        numberOfDays: seventhItineraryNumberOfDays,
        description: seventhItineraryDescription,
        valuePerPerson: seventhItineraryValuePerPerson,
        content: seventhItineraryContent,
        classification: seventhItineraryClassification,
        categoryId: seventhItineraryCategoryId,
        accommodationId: seventhItineraryAccommodationId,
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

    prisma.package.create({
      data: {
        id: thirdPackageId,
        isActive: thirdPackageIsActive,
        name: thirdPackageName,
        description: thirdPackageDescription,
        imagePath: thirdPackageImagePath,
        departureDate: thirdDepartureDate,
        backDate: thirdBackDate,
        transferParticular: thirdPackageTransferParticular,
        transferExclusive: thirdPackageTransferExclusive,
        transferShared: thirdPackageTransferShared,
        createdAt: new Date(),
      },
    }),

    prisma.package.create({
      data: {
        id: fourthPackageId,
        isActive: fourthPackageIsActive,
        name: fourthPackageName,
        description: fourthPackageDescription,
        imagePath: fourthPackageImagePath,
        departureDate: fourthDepartureDate,
        backDate: fourthBackDate,
        transferParticular: fourthPackageTransferParticular,
        transferExclusive: fourthPackageTransferExclusive,
        transferShared: fourthPackageTransferShared,
        createdAt: new Date(),
      },
    }),

    prisma.package.create({
      data: {
        id: fifthPackageId,
        isActive: fifthPackageIsActive,
        name: fifthPackageName,
        description: fifthPackageDescription,
        imagePath: fifthPackageImagePath,
        departureDate: fifthDepartureDate,
        backDate: fifthBackDate,
        transferParticular: fifthPackageTransferParticular,
        transferExclusive: fifthPackageTransferExclusive,
        transferShared: fifthPackageTransferShared,
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
        itineraryId: thirdItineraryId,
        createdAt: new Date(),
      },
    }),

    prisma.itinerariesOnPackages.create({
      data: {
        id: fourthItinerariesOnPackages,
        packageId: thirdPackageId,
        itineraryId: fourthItineraryId,
        createdAt: new Date(),
      },
    }),

    prisma.itinerariesOnPackages.create({
      data: {
        id: fifthItinerariesOnPackages,
        packageId: fourthPackageId,
        itineraryId: fifthItineraryId,
        createdAt: new Date(),
      },
    }),

    prisma.itinerariesOnPackages.create({
      data: {
        id: sixthItinerariesOnPackages,
        packageId: fourthPackageId,
        itineraryId: sixthItineraryId,
        createdAt: new Date(),
      },
    }),

    prisma.itinerariesOnPackages.create({
      data: {
        id: seventhItinerariesOnPackages,
        packageId: fifthPackageId,
        itineraryId: seventhItineraryId,
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
