import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import db from "@/utils/db";

export const GET = async (request: NextRequest) => {
  const users = await db.user.findMany({});

  return NextResponse.json({
    success: true,
    length: users.length,
    data: users,
  });
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json({ error: "Nama is required" }, { status: 400 });
  }

  const newUser = await db.user.create({
    data: {
      name: body.name,
      email: body.name,
    },
  });
  return NextResponse.json(newUser, { status: 201 });
};
