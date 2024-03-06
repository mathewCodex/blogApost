"use client"

import { useSearchParams } from "next/navigation"
import { signIn, signOut } from "next-auth/react"
import { Button, buttonVariants } from "./ui/button"
import { Icons } from "./icons"
import Link from "next/link"

export function GoogleAuthButton() {
	// const searchParams = useSearchParams()
	// const callbackUrl = searchParams.get("callbackUrl") as string

	return (
		<Button variant="outline" onClick={() => signIn("google", { callbackUrl: "/" })}>
			<Icons.google className="mr-2 h-4 w-4" />
			Google
		</Button>
	)
}

export function FacebookAuthButton() {
	const searchParams = useSearchParams()
	const callbackUrl = searchParams.get("callbackUrl") as string

	return (
		<Button variant="outline" onClick={() => signIn("facebook", { callbackUrl })}>
			<Icons.twitter className="mr-2 h-4 w-4" />
			Facebook
		</Button>
	)
}
export function TwitterAuthButton() {
	const searchParams = useSearchParams()
	const callbackUrl = searchParams.get("callbackUrl") as string

	return (
		<Button variant="outline" onClick={() => signIn("twitter", { callbackUrl })}>
			<Icons.twitter className="mr-2 h-4 w-4" />
			Twitter
		</Button>
	)
}
export function SignInButton() {
	return (
		<Button className="text-white" onClick={() => signIn()}>
			Join for free
		</Button>
	)
}

export function SignOutButton() {
	return (
		<Button variant="destructive" onClick={() => signOut()}>
			Sign out
		</Button>
	)
}

export function AuthButton() {
	return (
		<Link href="/auth" className={buttonVariants({ variant: "default" })}>
			Get Started
		</Link>
	)
}
