import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials.password) return null;

        const user = (await prisma.user.findUnique({
          where: { email: credentials.email as string },
        })) as {
          id: string;
          name: string | null;
          email: string;
          emailVerified: Date | null;
          image: string | null;
          createdAt: Date;
          updatedAt: Date;
          hashedPassword: string;
        };

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.");
        }
        const passwordMatch = await bcrypt.compare(
          credentials.password as string,
          user.hashedPassword,
        );

        return passwordMatch ? user : null;
      },
    }),
    Google({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
});
