import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({ log: ['info', 'query'] });
async function main() {
    await prisma.user.create({
        data: {
            email: "karan@example.com",
            name: "Karan",
        }
    });
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
