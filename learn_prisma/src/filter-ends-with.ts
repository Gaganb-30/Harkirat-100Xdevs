import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient({log : ['info', 'query']});

async function main(){
  const users = await prisma.user.findMany({
    where : {
      email : {
        endsWith : "example.com",
      },
      posts : {
        some :{
          published : true,
        }
      }
    },
    include : {
      posts : {
        where : {
          published : true,
        }
      }
    }
  });
  console.log(users);
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