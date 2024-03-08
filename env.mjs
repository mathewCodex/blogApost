import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
	server: {
		DATABASE_URL: z.string().url(),
		NODE_ENV: z.enum(["development", "test", "production"]),
		NEXTAUTH_SECRET: z.string().min(1),
		GOOGLE_CLIENT_ID: z.string(),
		GOOGLE_CLIENT_SECRET: z.string(),
		// MAIL_PASS: z.string(),
		// MAIL_SERVICE: z.string(),
		// MAIL_USER: z.string(),
		// tryruiotptyppypyi
		TWITTER_CLIENT_ID: z.string(),
		TWITTER_CLIENT_SECRET: z.string(),
		KNOCK_SECRET_APIKEY: z.string(),
		KNOCK_PUBLIC_API_KEY: z.string(),
		CHANNELL_ID: z.string(),
		NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:z.string(),
		NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL:z.string(),
        CLERK_SECRET_KEY: z.string(),
    NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET: z.string(),
	NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: z.string(),
		KNOCK_SIGNING_KEY: z.string(),

	},
	skipValidation: process.env.SKIP_ENV_VALIDATION === "true",
	client: {
		// NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
	},
})

