import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import db from "@/utils/db";

export const GET = async (request: NextRequest) => {
  const products = await db.product.findMany({});

  return NextResponse.json({
    success: true,
    length: products.length,
    data: products,
  });
};
export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 404 });
  }

  const newProduct = await db.product.create({
    data: {
      name: body.name,
      price: body.price,
    },
  });

  return NextResponse.json(newProduct);
};
