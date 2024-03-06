import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function AccountLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<section className="container relative flex h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
				<section className="absolute right-4 top-4 flex items-center gap-4 md:right-8 md:top-8">
					<Link
						href="/"
						className={cn(
							buttonVariants({ variant: "ghost" }),
							// "absolute right-4 top-4 md:right-8 md:top-8",
						)}
					>
						Login
					</Link>
					<ThemeToggle />
				</section>
				<div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
					{/* <div className="absolute inset-0 bg-zinc-900" /> */}
					<Image
						src="/xavier-von-erlach-sOC2EZu9Mqg-unsplash.jpg"
						alt="login"
						fill
						className="absolute inset-0 object-cover object-center"
					/>
					<div className="relative z-20 flex items-center text-lg font-medium">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="mr-2 h-6 w-6"
						>
							<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
						</svg>
						<Link href="/">SMNK Ltd.</Link>
					</div>
					<div className="relative z-20 mt-auto rounded-md bg-black/30 p-2">
						<blockquote className="space-y-2">
							<p className="text-lg">
								&ldquo;This library has saved me countless hours of work and helped me
								deliver stunning designs to my clients faster than ever before.&rdquo;
							</p>
							<footer className="text-sm">Sofia Davis</footer>
						</blockquote>
					</div>
				</div>
				{children}
			</section>
		</>
	)
}
