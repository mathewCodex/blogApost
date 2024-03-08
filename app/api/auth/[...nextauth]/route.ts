import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";
import { env } from "@/env.mjs";
import CredentialProvider from "next-auth/providers/credentials"
// import TwitterProvider from "next-auth/providers/twitter"

export const authOptions = {
	adapter: PrismaAdapter(prisma),
	session: { strategy: "jwt" },
	secret: env.NEXTAUTH_SECRET,
	providers: [
		GoogleProvider({
			clientId: env.GOOGLE_CLIENT_ID,
			clientSecret: env.GOOGLE_CLIENT_SECRET,
		}),
    //   TwitterProvider({
	// 		clientId: env.TWITTER_CLIENT_ID,
	// 		clientSecret: env.TWITTER_CLIENT_SECRET,
	// 		version: "2.0", // opt-in to Twitter OAuth 2.0
	// 	}),
		CredentialProvider({
			name: "credentials",
			credentials: {
				email: { label: "email", type: "text" },
				password: { label: "password", type: "password" },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials.password) {
					throw new Error("Invalid credentials")
				}

				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email,
					},
				})
				if (!user || !user?.hashedPassword) {
					throw new Error("Invalid Credentials")
				}
				return user
			},
		}),
	],

	pages: {
		signIn: "/account/signin",
		newUser: "/onboard",
		signOut: "/",
	},
	debug: env.NODE_ENV === "development",
} satisfies AuthOptions

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }