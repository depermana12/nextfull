import { NextRequest, NextResponse } from "next/server";
import { userSchema } from "@/lib/zod";
import db from "@/utils/db";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } },
) => {
  const user = await db.user.findUnique({
    where: { id: params.id },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json(user);
};

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } },
) => {
  const body = await request.json();

  const validation = userSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const user = await db.user.findUnique({
    where: { id: params.id },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const updatedUser = await db.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(updatedUser);
};

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } },
) => {
  const user = await db.user.findUnique({
    where: { id: params.id },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  await db.user.delete({
    where: { id: user.id },
  });

  return NextResponse.json({});
};
