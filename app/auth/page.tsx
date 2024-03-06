"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import facebookImg from "@/assets/imgs/facebook.png"
import googleImg from "@/assets/imgs/google.png"
import twitterImg from "@/assets/imgs/twitter.png"
import Link from "next/link"
import AuthForm from "./auth-form"
import { signIn } from "next-auth/react"
import { Cross1Icon } from "@radix-ui/react-icons"
import {
	TooltipProvider,
	Tooltip,
	TooltipTrigger,
	TooltipContent,
} from "@/components/ui/tooltip"
import { useRouter } from "next/navigation"
// import { useSession } from "next-auth/react"

export default function AuthPage() {
	// const { data } = useSession()
	const router = useRouter()

	//   TODO: redirect users if they already have a session
	return (
		<main className="relative grid h-screen place-content-center bg-white">
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button
							onClick={() => router.push("/")}
							variant="outline"
							size="icon"
							className="absolute left-5 top-5"
						>
							<Cross1Icon />
						</Button>
					</TooltipTrigger>
					<TooltipContent>Return to home</TooltipContent>
				</Tooltip>
			</TooltipProvider>
			<section className="flex w-full max-w-[350px] flex-col space-y-4">
				<h2 className="text-center text-2xl font-bold">Join SMNK</h2>
				<p className="text-center text-sm leading-tight">
					TODO: discuss with mildred on content here.. TODO: discuss with mildred on
					content here..
				</p>
				<div className="flex w-full flex-wrap items-center gap-4">
					<Button
						onClick={() => signIn("google", { callbackUrl: "/profile" })}
						variant="outline"
						size="lg"
						className="flex w-full gap-3 p-5"
					>
						<Image width={30} height={30} src={googleImg} alt="google sign in" />
						Continue with Google
					</Button>
					<Button
						onClick={() => signIn("facebook", { callbackUrl: "/profile" })}
						variant="outline"
						size="lg"
						className="flex flex-1 gap-3 p-5"
					>
						<Image width={32} height={32} src={facebookImg} alt="facebook sign in" />
						Facebook
					</Button>
					<Button
						onClick={() => signIn("twitter", { callbackUrl: "/" })}
						variant="outline"
						size="lg"
						className="flex flex-1 gap-3 p-5"
					>
						<Image width={32} height={32} src={twitterImg} alt="twitter sign in" />
						Twitter
					</Button>
				</div>
				<div className="relative">
					<div className="absolute inset-0 flex items-center">
						<span className="w-full border-t" />
					</div>
					<div className="relative flex justify-center text-xs uppercase">
						<span className="bg-background px-2 text-muted-foreground">Or</span>
					</div>
				</div>
				<AuthForm
					user={{
						id: "",
						name: "",
						bio: "",
						imageSrc: "",
					}}
					btnTitle={""}
				/>
				<footer className="text-center text-xs font-medium opacity-90">
					By continuing, you acknowledge that you have read and understood, and agree to
					SMNK&apos;s{" "}
					<Link className="text-primary underline" href="/terms-of-service">
						Terms of Service
					</Link>{" "}
					and{" "}
					<Link className="text-primary underline" href="/privacy-policy">
						Privacy Policy
					</Link>
					.
				</footer>
			</section>
		</main>
	)
}
