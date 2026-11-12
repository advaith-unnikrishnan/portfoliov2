import { NextResponse } from "next/server";
import { publicPages, publicAssets } from "./content/routing.mjs";
export function middleware(request) {
  const { pathname, searchParams } = request.nextUrl;
  if (pathname === "/_next/image") {
    if (!publicAssets.includes(searchParams.get("url")))
      return new NextResponse(null, { status: 404 });
  }
  if (pathname === "/api/weather") return NextResponse.next();
  if (pathname.startsWith("/api/") || pathname === "/api")
    return new NextResponse(null, { status: 404 });
  if (
    publicPages.includes(pathname) ||
    publicAssets.includes(pathname) ||
    pathname.startsWith("/_next/static/") ||
    pathname.startsWith("/_next/webpack-hmr") ||
    pathname === "/_next/image" ||
    pathname.startsWith("/_vercel/insights/") ||
    pathname.startsWith("/_vercel/speed-insights/")
  )
    return NextResponse.next();
  const response = NextResponse.redirect(new URL("/", request.url), 307);
  response.headers.set("Cache-Control", "no-store");
  return response;
}
export const config = { matcher: "/:path*" };
