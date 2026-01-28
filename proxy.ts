
import { createRouteMatcher, clerkMiddleware, auth } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  console.log(userId)

  // if ((!userId) && (isProtectedRoute(req))) {
  //   await auth.protect();
  // }
  // if (isProtectedRoute.includes(req.nextUrl.pathname)) await auth.protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};


// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// // const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);
// const isProtectedRoute = [
//   "dashboard/",
// ];

// export default clerkMiddleware(async (auth, req) => {
//   // if (isProtectedRoute(req)) await auth.protect();
//   if (isProtectedRoute.includes(req.nextUrl.pathname)) await auth.protect();
// });

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// };
