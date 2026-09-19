import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
    const { nextUrl, auth: session } = req;

    const isLoggedIn = !!session?.user;
    const isProtectedRoute = nextUrl.pathname.startsWith("/dashboard");
    const isLoginPage = nextUrl.pathname === "/login";

    if (isProtectedRoute && !isLoggedIn) {
        return NextResponse.redirect(new URL("/login", nextUrl));
    }

    if (isLoginPage && isLoggedIn) {
        return NextResponse.redirect(new URL("/dashboard", nextUrl));
    }

    return NextResponse.next();
});

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};