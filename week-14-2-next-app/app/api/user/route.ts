// import client from "@/db";
// // import { PrismaClient } from "@/app/generated/prisma";
// // import { PrismaClient } from "@prisma/client/extension";
// import { NextRequest, NextResponse } from "next/server";


// // export function GET() {
// //   return Response.json({
// //     name: "Gagan Bisht",
// //     email: "gaganbisht286@gmail.com",
// //   });
// // }

// export async function solve(req: NextRequest) {
//   const body = await req.json();
//   try{
//     const user = await client.user.create({
//       data : {
//         username : body.username,
//         password : body.password,
//       }
//     });
//     console.log(user);
//   }catch(e){
//     console.log(e);
//     return NextResponse.json({
//       message : "Error while signing up",
//     },{
//       status : 411,
//     })
//   }
// }

// export function PUT() {
//   return NextResponse.json({
//     name: "Gagan Bisht",
//     email: "gaganbisht286@gmail.com",
//   });
// }
