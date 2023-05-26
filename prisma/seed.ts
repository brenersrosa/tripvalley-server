import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const firstRolesId = 'e956493a-f039-11ed-a05b-0242ac120003'
const firstRolesName = 'administrator'
const firstRolesCreatedDate = new Date()

const secondRolesId = 'f2aabaf2-f039-11ed-a05b-0242ac120003'
const secondRolesName = 'user'
const secondRolesCreatedDate = new Date()

const firstUsersId = 'f649b096-f039-11ed-a05b-0242ac120003'
const firstUsersName = 'admin'
const firstUsersEmail = 'admin@email.com'
const firstUsersPassword =
  'f95bda7f6a9c9585d126cecab02ec51b3d925209d5c2106ba2a493c918d1aa8f83a42e535c1b7ace464f3e52ed3cc8317bdcc0dc0953bf116b9825e0d6eb90ab'
const firstUsersSalt = 'de5813f689b2888e23424db5f5a559fb'
const firstUsersCreatedDate = new Date()
const firstUsersRoleId = firstRolesId

const secondUsersId = 'fa5a749a-f039-11ed-a05b-0242ac120003'
const secondUsersName = 'client'
const secondUsersEmail = 'client@email.com'
const secondUsersPassword =
  '571bd42f0094e72f817769a63a93d1628040c3ffd9594e1efc6c2186d5e102884ad94f3b01af0267d78302a40cd0c60ac68a8d618f89b1b6dfc7170355014c23'
const secondUsersSalt = 'a4725c31bd66b133f57c380459db7e79'
const secondUsersCreatedDate = new Date()
const secondUsersRoleId = secondRolesId

const firstPermissionsId = 'ffed25e2-f039-11ed-a05b-0242ac120003'
const firstPermissionsName = 'users.list'
const firstPermissionsCreatedDate = new Date()

const secondPermissionsId = '034638e6-f03a-11ed-a05b-0242ac120003'
const secondPermissionsName = 'users.create'
const secondPermissionsCreatedDate = new Date()

const thirdPermissionsId = '0669ccea-f03a-11ed-a05b-0242ac120003'
const thirdPermissionsName = 'metrics.list'
const thirdPermissionsCreatedDate = new Date()

const firstRolesPermissionsId = '096b7664-f03a-11ed-a05b-0242ac120003'
const firstRolesPermissionsCreatedDate = new Date()
const firstRolesPermissionsRoleId = firstRolesId
const firstRolesPermissionsPermissionId = firstPermissionsId

const secondRolesPermissionsId = '13d0abec-f03a-11ed-a05b-0242ac120003'
const secondRolesPermissionsCreatedDate = new Date()
const secondRolesPermissionsRoleId = firstRolesId
const secondRolesPermissionsPermissionId = secondPermissionsId

const thirdRolesPermissionsId = '1aa007f6-f03a-11ed-a05b-0242ac120003'
const thirdRolesPermissionsCreatedDate = new Date()
const thirdRolesPermissionsRoleId = firstRolesId
const thirdRolesPermissionsPermissionId = thirdPermissionsId

const fourthRolesPermissionsId = '1ef56710-f03a-11ed-a05b-0242ac120003'
const fourthRolesPermissionsCreatedDate = new Date()
const fourthRolesPermissionsRoleId = secondRolesId
const fourthRolesPermissionsPermissionId = firstPermissionsId

const fifthRolesPermissionsId = '227b1146-f03a-11ed-a05b-0242ac120003'
const fifthRolesPermissionsCreatedDate = new Date()
const fifthRolesPermissionsRoleId = secondRolesId
const fifthRolesPermissionsPermissionId = thirdPermissionsId

async function run() {
  await prisma.user.deleteMany()
  await prisma.role.deleteMany()
  await prisma.permission.deleteMany()
  await prisma.rolePermission.deleteMany()

  await Promise.all([
    prisma.role.create({
      data: {
        id: firstRolesId,
        name: firstRolesName,
        created_at: firstRolesCreatedDate,
      },
    }),

    prisma.role.create({
      data: {
        id: secondRolesId,
        name: secondRolesName,
        created_at: secondRolesCreatedDate,
      },
    }),
  ])

  await Promise.all([
    prisma.permission.create({
      data: {
        id: firstPermissionsId,
        name: firstPermissionsName,
        created_at: firstPermissionsCreatedDate,
      },
    }),

    prisma.permission.create({
      data: {
        id: secondPermissionsId,
        name: secondPermissionsName,
        created_at: secondPermissionsCreatedDate,
      },
    }),

    prisma.permission.create({
      data: {
        id: thirdPermissionsId,
        name: thirdPermissionsName,
        created_at: thirdPermissionsCreatedDate,
      },
    }),
  ])

  await Promise.all([
    prisma.rolePermission.create({
      data: {
        id: firstRolesPermissionsId,
        created_at: firstRolesPermissionsCreatedDate,
        role_id: firstRolesPermissionsRoleId,
        permission_id: firstRolesPermissionsPermissionId,
      },
    }),

    prisma.rolePermission.create({
      data: {
        id: secondRolesPermissionsId,
        created_at: secondRolesPermissionsCreatedDate,
        role_id: secondRolesPermissionsRoleId,
        permission_id: secondRolesPermissionsPermissionId,
      },
    }),

    prisma.rolePermission.create({
      data: {
        id: thirdRolesPermissionsId,
        created_at: thirdRolesPermissionsCreatedDate,
        role_id: thirdRolesPermissionsRoleId,
        permission_id: thirdRolesPermissionsPermissionId,
      },
    }),

    prisma.rolePermission.create({
      data: {
        id: fourthRolesPermissionsId,
        created_at: fourthRolesPermissionsCreatedDate,
        role_id: fourthRolesPermissionsRoleId,
        permission_id: fourthRolesPermissionsPermissionId,
      },
    }),

    prisma.rolePermission.create({
      data: {
        id: fifthRolesPermissionsId,
        created_at: fifthRolesPermissionsCreatedDate,
        role_id: fifthRolesPermissionsRoleId,
        permission_id: fifthRolesPermissionsPermissionId,
      },
    }),
  ])

  await Promise.all([
    prisma.user.create({
      data: {
        id: firstUsersId,
        name: firstUsersName,
        email: firstUsersEmail,
        password: firstUsersPassword,
        salt: firstUsersSalt,
        created_at: firstUsersCreatedDate,
        role_id: firstUsersRoleId,
      },
    }),

    prisma.user.create({
      data: {
        id: secondUsersId,
        name: secondUsersName,
        email: secondUsersEmail,
        password: secondUsersPassword,
        salt: secondUsersSalt,
        created_at: secondUsersCreatedDate,
        role_id: secondUsersRoleId,
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
