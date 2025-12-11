import db from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { JWT } from "next-auth/jwt";
import { NextAuthOptions, Session, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { z } from "zod";

// Define Zod schema for input validation
const credentialsSchema = z.object({
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^\d+$/, "Phone number must contain only digits"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});

// TypeScript types
interface CustomUser extends User {
  id: string;
}

interface CustomSession extends Session {
  user: {
    id: string;
    name?: string | null;
    email?: string | null;
  };
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: {
          label: "Phone number",
          type: "text",
          placeholder: "1231231231",
          required: true,
        },
        password: {
          label: "Password",
          type: "password",
          required: true,
        },
      },
      async authorize(credentials) {
          if (!credentials?.phone || !credentials?.password) {
              throw new Error("Phone and password are required");
            }
            
            try {
                // Validate input with Zod
                const validatedCredentials = credentialsSchema.parse({
                    phone: credentials.phone,
                    password: credentials.password,
                });
                
                // Check if user exists
                const existingUser = await db.user.findFirst({
                    where: {
                        number: validatedCredentials.phone,
                    },
                });

          if (existingUser) {
            // User exists, validate password
            const passwordValidation = await bcrypt.compare(
              validatedCredentials.password,
              existingUser.password
            );

            if (!passwordValidation) {
              throw new Error("Invalid password");
            }

            return {
              id: existingUser.id.toString(),
              name: existingUser.name || "",
              email: existingUser.number,
              phone: existingUser.number, // Added for consistency
            };
          } else {
            // Create new user
            console.log("Creating new user");
            const hashedPassword = await bcrypt.hash(
              validatedCredentials.password,
              10
            );
            
            const user = await db.user.create({
              data: {
                number: validatedCredentials.phone,
                password: hashedPassword,
              },
            });

            return {
              id: user.id.toString(),
              name: user.name || "",
              email: user.number,
              phone: user.number,
            };
          }
        } catch (error) {
          if (error instanceof z.ZodError) {
            // Format Zod validation errors
            
            throw new Error(`Validation failed:`);
          }

          // Handle database errors
          if (error instanceof Error) {
            // Check if it's a unique constraint violation
            if (
              error.message.includes("Unique constraint failed") ||
              error.message.includes("P2002") // Prisma unique constraint error code
            ) {
              throw new Error("Phone number already exists");
            }
            throw error;
          }

          console.error("Authentication error:", error);
          throw new Error("Authentication failed");
        }
      },
    }),
  ],
  secret: process.env.JWT_SECRET || "secret",
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.phone = (user as CustomUser & { phone?: string }).phone;
      }
      return token;
    },
    async session({ token, session }: { token: JWT; session: CustomSession }) {
    if(session && session.user){
        session.user.id = token.id;
      }
      return session; 
    },
  },
//   pages: {
//     signIn: "api/auth/signin", // Custom sign-in page
//     error: "/auth/error", // Error page
//   },
  session: {
    strategy: "jwt", // Use JWT strategy for better security
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  debug: process.env.NODE_ENV === "development", // Enable debug in development
};