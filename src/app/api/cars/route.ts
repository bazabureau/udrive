import { NextResponse } from "next/server";

import { cars } from "@/data/cars";

export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({
    data: cars,
    total: cars.length,
    generatedAt: new Date().toISOString(),
  });
}
