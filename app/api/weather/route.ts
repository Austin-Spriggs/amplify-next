import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");

    const response = await fetch( `https://www.7timer.info/bin/api.pl?lon=${lon}&lat=${lat}&product=astro&output=json`);

    const data = await response.json();

    return NextResponse.json(data);
}