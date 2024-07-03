import { NextRequest, NextResponse } from "next/server";
import schema from "./users/schema";

// in this function the request object is not used
// but still needed to prevent caching the response
export const GET = (request: NextRequest) => {
  return NextResponse.json({ message: "hello" });
};
export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 404 });
  }
  return NextResponse.json(body);
};
