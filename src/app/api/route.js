import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET() {
  // Do whatever you want
  return NextResponse.json({ message: "OK" }, { status: 200 });
}

// To handle a POST request to /api
export async function POST() {
  // Do whatever you want
  return NextResponse.json({ message: "OK" }, { status: 200 });
}
