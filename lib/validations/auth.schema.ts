import * as z from "zod"
export const authSchema = z.object({
	name: z.string().min(3).max(30),

	// email: z
	// 	.string({ required_error: "Please provide a valid email address." })
	// 	.email()
	// 	.trim()
	// 	.toLowerCase(),
	bio: z.string().min(10).max(1000),
	imageSrc: z.string().url().nonempty(),
})

export const CommentValidation = z.object({
	post: z.string().nonempty().min(3, { message: "Minimum 3 characters." }),
})

 export const kycSchema = z.object({
		name: z.string().min(3).max(30),
		occuppation: z.string().min(3).max(30),

		// email: z
		// 	.string({ required_error: "Please provide a valid email address." })
		// 	.email()
		// 	.trim()
		// 	.toLowerCase(),
		description: z.string().min(10).max(1000),

		identityImg: z.string().url().nonempty(),
 })