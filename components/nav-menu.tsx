import Link from "next/link"
// import { cn } from "@/lib/utils"

const LINKS = [
	{ title: "Home", path: "/" },
	{ title: "Articles", path: "/articles" },
	{ title: "Categories", path: "/categories" },
	{ title: "About", path: "/about" },
	{ title: "Contact", path: "/contact" },
]

export default function NavMenu() {
	return (
		<nav className="flex items-center gap-4">
			{LINKS.map((link) => (
				<Link href={link.path} key={link.title} className="hover:text-primary">
					{link.title}
				</Link>
			))}
		</nav>
	)
}
