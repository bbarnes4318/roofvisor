import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host")?.split(":")[0].toLowerCase();

  if (
    (hostname === "velocityre.pro" ||
      hostname === "www.velocityre.pro" ||
      hostname === "properties.leadsbystorm.com") &&
    request.nextUrl.pathname === "/"
  ) {
    const destination = request.nextUrl.clone();
    destination.pathname = "/properties";
    return NextResponse.rewrite(destination);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
