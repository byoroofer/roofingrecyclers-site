import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const CANONICAL_HOST = "roofingrecyclers.com";
const WWW_HOST = `www.${CANONICAL_HOST}`;

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");

  if (host === WWW_HOST) {
    const url = request.nextUrl.clone();
    url.host = CANONICAL_HOST;
    url.protocol = "https";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
