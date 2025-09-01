import {PrismaClient} from '@prisma/client';

const Prisma = new PrismaClient({log : ['info', 'query']});

async function main(){
  await Prisma.post.create({
    data : {
      title : "title of the post has changed by karan",
      content : "content of the post has changed by karan",
      // author : {
      //   connect : {
      //     id : 1
      //   }
      // },
      published : true,
      authorId : 2,

    }
  })
}

main()
.then(async () => {
  await Prisma.$disconnect();
})
.catch(async (e) => {
  console.log(e);
  await Prisma.$disconnect();
  process.exit(1);
})