import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient({log : ['info', 'query']});

async function main(){
  await prisma.user.create({
    data : {
      email : "trial@error.com",
      name : "Trial Error",
      posts : {
        create : [{
          title : "First Post by Trial Error",
        },{
          title : "Second Post by Trial Error",
        }]
      }
    }
  })
}

main()
.then(async () => {
  await prisma.$disconnect();
})
.catch(async (e) => {
  console.log(e);
  await prisma.$disconnect();
  process.exit(1);
})