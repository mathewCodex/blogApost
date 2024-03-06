import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export default function Footer() {
	return (
		<footer className="space-y-4 bg-primary/10">
			<section className="max-screen-xl mx-auto flex items-center justify-between gap-4 px-4 py-4">
				<div>logo</div>
				<nav className="flex flex-1 items-center justify-center gap-4">
					<Link href="#">Advertising</Link>
					<Link href="#">Careers</Link>
					<Link href="#">About</Link>
					<Link href="#">Support</Link>
				</nav>
				<div>social links</div>
			</section>
			<section className="max-screen-xl mx-auto flex items-center justify-between px-4 text-sm">
				<div className="flex items-center gap-2">
					<span>Switch theme</span>
					<ThemeToggle />
				</div>
				<nav className="flex items-center gap-2">
					<Link href="/terms-of-servoce">Terms of Service</Link>
					<Link href="/privacy-policy">Privacy Policy</Link>
					<Link href="/copyright-notice">Copyright Notice</Link>
				</nav>
			</section>
		</footer>
	)
}
