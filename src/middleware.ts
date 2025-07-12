import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerSupabase } from "./lib/supabaseServer";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const supabase = await createServerSupabase();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;
  const protectedRoutes = ["/new"];
  const authRoutes = ["/sign-in", "/sign-up"];

  if (user && authRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!user && protectedRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/sign-in", "/sign-up", "/new/:path*"],
};
