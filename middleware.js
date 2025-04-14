import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const token = await getToken({ req });
  const url = req.nextUrl.clone();
  
  // Redirect unauthenticated users to login
  if (!token) {
    if (url.pathname !== "/login" && url.pathname !== "/register") {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next();
  }

  const userRole = token.role; 

  // User restrictions: Can only access /dashboard
  if (userRole === "user") {
    if (url.pathname === "/admin" || url.pathname === "/login" || url.pathname === "/register") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }

  // Admin restrictions: Can only access /admin
  if (userRole === "admin") {
    if (url.pathname === "/dashboard" || url.pathname === "/login" || url.pathname === "/register") {
      return NextResponse.redirect(new URL("/admin", req.url));
    }
  }

  return NextResponse.next();
}

// Apply middleware only to relevant routes
export const config = {
  matcher: ["/admin", "/dashboard", "/login", "/register"],
};
