import { NextRequest, NextResponse } from "next/server";
import db from "@/utils/db";
import { saltAndHashPassword } from "@/utils/password";
import { signInSchema } from "@/lib/zod";

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const validation = signInSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const user = await db.user.findUnique({
    where: { email: body.email },
  });

  if (user) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const hashedPassword = await saltAndHashPassword(body.password);
  const newUser = await db.user.create({
    data: {
      email: body.email,
      hashedPassword,
    },
  });

  return NextResponse.json({ email: newUser.email });
};
