// import { withAuth } from "next-auth/middleware"
import { authMiddleware } from "@clerk/nextjs"

// export default withAuth({
// 	callbacks: {
// 		authorized: ({ req, token }) => {
// 			if (req.nextUrl.pathname === "/admin") {
// 				return token?.Role === "ADMIN"
// 			}
// 			return Boolean(token)
// 		},
// 	},
// })
export default authMiddleware({})
// if (request.nextUrl.pathname.startsWith("/admin") && request. !== "ADMIN")
// export

export const config = {
	matcher: [
		"/((?!.+\\.[\\w]+$|_next).*)",
		"/",
		"/(api|trpc)(.*)",
		"/admin/:path*",
	],
}
