export async function GET() {
	try {
		const upstream = await fetch("https://apip.cc/json", {
			cache: "no-store",
		});

		if (!upstream.ok) {
			return Response.json(
				{ error: "Upstream location service failed" },
				{ status: upstream.status }
			);
		}

		const data = await upstream.json();
		return Response.json(data);
	} catch {
		return Response.json(
			{ error: "Unable to load location data" },
			{ status: 500 }
		);
	}
}