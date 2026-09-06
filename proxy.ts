import { auth } from "@/auth";
import { NextResponse } from "next/server";

const publicRoutes = ["/login"];

export default auth((req) => {
    const { nextUrl, auth: session } = req;

    const isLoggedIn = !!session?.user;
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

    if (!isLoggedIn && !isPublicRoute) {
        return NextResponse.redirect(new URL("/login", nextUrl));
    }

    if (isLoggedIn && isPublicRoute) {
        return NextResponse.redirect(new URL("/", nextUrl));
    }

    return NextResponse.next();
});

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};