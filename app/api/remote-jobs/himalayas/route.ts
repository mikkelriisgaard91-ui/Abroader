import { NextResponse } from "next/server";

/** Proxies Himalayas public jobs API so the client avoids CORS (no ACAO on origin requests). */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit") ?? "20";
  const url = `https://himalayas.app/jobs/api?limit=${encodeURIComponent(limit)}`;

  try {
    const res = await fetch(url, {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });
    if (!res.ok) {
      return NextResponse.json(
        { jobs: [], error: `Himalayas returned ${res.status}` },
        { status: 200 }
      );
    }
    const json: unknown = await res.json();
    return NextResponse.json(json);
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ jobs: [], error: message }, { status: 200 });
  }
}
