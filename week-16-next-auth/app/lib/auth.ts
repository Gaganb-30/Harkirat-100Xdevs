import { DefaultUser, ISODateString } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import type { AdapterUser } from "next-auth/adapters"

interface DefaultSession {
  user?: {
    name?: string | null
    email?: string | null
    image?: string | null
  }
  expires: ISODateString
}
export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
          username: { label: 'Email', type: 'text', placeholder: 'Email' },
          password: { label: 'Password', type: 'password', placeholder: 'Password' },
        },
      async authorize(credentials: any){
        // const email = credentials.email;
        // const password = credentials.password;
        // const user = await prisma.user.findOne({
        //   where : {
        //     email : email,
        //     password : password,
        //   }
        // })

        console.log(credentials);
        return {
          id:"user1",
          name : "Gagan Bisht",
          email : "gaganbisht286@gmail.com"
        }
      }
    }),
    GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID || "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
  }),
  GitHubProvider({
    clientId: process.env.GITHUB_ID || "",
    clientSecret: process.env.GITHUB_SECRET || ""
  })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    signIn : ({user} : {user : DefaultUser}) => {
        if(user.email == "randomperson@getMaxListeners.com"){
          return false;
        }
        return true;
    },
    jwt : ({token , user} : {token : JWT, user : DefaultUser}) => {
      token.id = token.sub;
      console.log(token);
      return token;
    },
    session : ({session, token, user} : {session : DefaultSession, token : JWT, user : AdapterUser}) => {
      if(session && session.user){
        session.user.id = token.id;
      }
      return session; 
    }
  },
  pages: {
    signIn : "/signin"
  }
};