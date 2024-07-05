import NextAuth from "next-auth";
import { signInSchema } from "@/lib/zod";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { comparePassword } from "@/utils/password";
import db from "@/utils/db";

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: { label: "Username" },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: async (credentials, request) => {
        if (!credentials?.email || !credentials.password) return null;

        const { email, password } = await signInSchema.parseAsync(credentials);

        const user = await db.user.findUnique({ where: { email } });

        if (!user) {
          throw new Error("User not found.");
        }

        const passwordMatch = await comparePassword(
          password,
          user.hashedPassword!,
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
  session: {
    strategy: "jwt",
  },
});
