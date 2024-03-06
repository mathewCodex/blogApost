"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Link from "next/link"
import { FacebookAuthButton, TwitterAuthButton,GoogleAuthButton } from "@/components/auth-buttons"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
// import { Icons } from "@/components/icons"
const formSchema = z.object({
	email: z.string().email({ message: "Enter a valid email address" }),
	password: z
		.string()
		.min(8, { message: "Password is too short" })
		.max(20, { message: "Password is too long" })
	
})
type UserFormValue = z.infer<typeof formSchema>
export function CreateAccount() {
	const searchParams = useSearchParams()
	const callbackUrl = searchParams.get("callbackUrl")
		const [loading, setLoading] = useState(false)
	const defaultValues = {
		email: "demo@gmail.com",
		password: "",
	}
	const form = useForm<UserFormValue>({
		resolver: zodResolver(formSchema),
		defaultValues,
	})

	const onSubmit = async (data: UserFormValue) => {
		setLoading(true)
		signIn("credentials", {
			email: data.email,
			password: data.password,
			callbackUrl: callbackUrl ?? "/",
		})
		setLoading(false)
	}
	return (
		<Card>
			<CardHeader className="space-y-1">
				<CardTitle className="text-2xl">Login an account</CardTitle>
				<CardDescription>Insert your credentials to login</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4">
				<div className="grid grid-cols-2 gap-6">
					<FacebookAuthButton />
					<GoogleAuthButton />
					<TwitterAuthButton />
				</div>
				<div className="relative">
					<div className="absolute inset-0 flex items-center">
						<span className="w-full border-t" />
					</div>
					<div className="relative flex justify-center text-xs uppercase">
						<span className="bg-background px-2 text-muted-foreground">
							Or continue with
						</span>
					</div>
				</div>
				<div className="grid gap-2">
					{/* <Label htmlFor="email">Email</Label>
					<Input id="email" type="email" placeholder="m@example.com" /> */}
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-2">
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												type="email"
												placeholder="Enter your email..."
												disabled={loading}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							{/* password */}
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>password</FormLabel>
										<FormControl>
											<Input
												type="password"
												placeholder="password..."
												disabled={loading}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button disabled={loading} className="ml-auto w-full" type="submit">
								Login
							</Button>
						</form>
					</Form>
				</div>
				{/* <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div> */}
			</CardContent>
			<CardFooter className="flex flex-col gap-2">
				<Button variant="outline" className="w-full">
					dont have an account
				</Button>
				<Link href="/account/signup">SignUp</Link>
			</CardFooter>
		</Card>
	)
}
