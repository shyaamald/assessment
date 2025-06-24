// backend/prisma/seed.js
require('dotenv').config()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const categories = [
    'AC Repair',
    'Plumbing',
    'Electrical',
    'Carpentry',
    'Cleaning',
    'Painting',
    'Delivery',
    'Gardening',
    'Pest Control',
    'Moving',
  ]

  await prisma.category.createMany({
    data: categories.map(name => ({ name })),
    skipDuplicates: true,      // won’t error if you’ve already run it
  })

  console.log('✅ Categories seeded')
  await prisma.$disconnect()
}

main().catch(e => {
  console.error(e)
  process.exit(1)
})
