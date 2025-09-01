import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [{
    emit: "event",
    level: "query",
  }]
});

async function main() {
  let res = await prisma.user.findMany({
    // take : 2,
    skip : 1,
  })
  console.log(res);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
