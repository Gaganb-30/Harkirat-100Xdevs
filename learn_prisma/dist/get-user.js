import { PrismaClient } from '@prisma/client';
import { log } from 'console';
const prisma = new PrismaClient({ log: ['info', 'query'] });
async function main() {
    const users = await prisma.user.findMany({
    // where : {
    //   name : "Gagan",
    // }
    });
    console.log(users);
    const user = await prisma.user.findUnique({
        where: {
            id: 1
        },
        include: {
            posts: true
        }
    });
    console.log(user);
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
