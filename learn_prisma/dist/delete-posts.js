import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["info", "query"] });
async function main() {
    // await prisma.post.deleteMany({});   // to delete all posts
    await prisma.user.update({
        where: {
            id: 1
        },
        data: {
            posts: {
                deleteMany: {
                    published: false
                }
            }
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
