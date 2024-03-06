import * as z from "zod";

export const profileSchema = z.object({
	name: z.string().min(3, { message: " Name must be at least 3 characters" }),

	email: z.string().email({ message: "email must be at least 3 characters" }),
	bio: z.string().min(3, { message: " bio must be at least 10 characters" }),

	contactno: z.coerce.number(),
	country: z.string().min(1, { message: "Please select a category" }),
	city: z.string().min(1, { message: "Please select a category" }),
	// jobs array is for the dynamic fields
	jobs: z.string().min(1, { message: "Please select a category" }),
})

export type ProfileFormValues = z.infer<typeof profileSchema>;
