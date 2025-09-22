import { PrismaClient } from "./app/generated/prisma";

// console.log("inside db");
const prismaClientSingleton = () => {
  // console.log("inside client");
  return new PrismaClient();
}

declare global {
  var prisma : undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton() ;

export default prisma;

if(process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;