import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import db from "@/utils/db";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } },
) => {
  const id = Number(params.id);
  const product = await db.product.findUnique({
    where: { id },
  });

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
};

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } },
) => {
  const body = await request.json();

  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const id = Number(params.id);
  const product = await db.product.findUnique({
    where: { id },
  });

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  const updatedProduct = await db.product.update({
    where: { id },
    data: {
      name: body.name,
      price: body.price,
    },
  });
  return NextResponse.json(updatedProduct);
};

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } },
) => {
  const id = Number(params.id);
  const product = await db.product.findUnique({
    where: { id },
  });

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  await db.product.delete({
    where: { id: product.id },
  });
  return NextResponse.json({});
};
