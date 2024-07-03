import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  if (!body.name) {
    return NextResponse.json({ error: "Nama is required" }, { status: 400 });
  }
  return NextResponse.json({ id: 2, name: body.name }, { status: 201 });
};
