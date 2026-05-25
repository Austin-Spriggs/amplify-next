import { NextResponse } from "next/server";

export async function GET() {
	try {
		const response = await fetch('https://apip.cc/json');
		const data = await response.json();

		return NextResponse.json(data);
	} catch (e) {
		console.error(e);

		return NextResponse.json({ error: 'Request failed.'});
	}
}