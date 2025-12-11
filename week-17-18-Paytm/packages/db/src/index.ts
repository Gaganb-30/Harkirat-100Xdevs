import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

// console.log(process.env.DATABASE_URL||"ye raha chor 1");

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
    throw new Error('DATABASE_URL environment variable is not set')
}

const globalForPrisma = global as unknown as {
    prisma: PrismaClient
}

const adapter = new PrismaPg({
  connectionString,
})

const prisma =  new PrismaClient({
  adapter,
}) || globalForPrisma.prisma 

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma