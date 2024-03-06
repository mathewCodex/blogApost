"use client"
import { useState } from "react"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { ThemeToggle } from "../theme-toggle"
import { ScrollArea } from "../ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import Link from "next/link"
import { Icons } from "../icons"
// import { signOut } from "next-auth/react"
import { cappedAvatarFallback } from "@/lib/utils"
import MenuItem from "@/components/navigations/createMenu"
import { User } from "@prisma/client"
import { signOut } from "next-auth/react"
// import { DropdownMenuItem, DropdownMenuShortcut } from "../ui/dropdown-menu"
interface navBarProps {
	user?: User | null
}
const MobileNav: React.FC<navBarProps> = ({ user }) => {
	const [open, setOpen] = useState(false)
	return (
		<div className="md:hidden">
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger asChild>
					<Button
						variant={"ghost"}
						className="flex items-center gap-1 rounded-full border p-0"
						onClick={() => setOpen(!open)}
					>
						<Icons.menu className="h-8 w-8 pl-1" />
						<Avatar className="h-8 w-8 rounded-full">
							{user ? (
								<>
									<AvatarImage src={user.image ?? ""} alt={user.name ?? "user name"} />
									<AvatarFallback className="font-bold">
										{user.name ? cappedAvatarFallback(user.name) : "SM"}
									</AvatarFallback>
								</>
							) : (
								<>
									<AvatarImage src={""} alt={"user name"} />
									<AvatarFallback className="font-bold">{"SM"}</AvatarFallback>
								</>
							)}
						</Avatar>
					</Button>
				</SheetTrigger>
				<SheetContent side="right" className="w-[300px] sm:w-[540px]">
					<ScrollArea className="my-4 h-[calc(100vh-9rem)] pb-10">
						<div className="flex flex-col items-stretch justify-between gap-10 py-2">
							{/* <UserDropdown user={user} onOpenChange={setOpen} /> */}
							<nav className="flex flex-1 flex-col items-center justify-center space-y-4">
								{user ? (
									<ul>
										<li>
											<Link href="/">Home</Link>
										</li>
										<li>
											<Link href={`/profiles/${user.id}`}>Profile</Link>
										</li>
										<li>
											<Link href={`/profiles/dashboard/?${user.id}`}>Dashboard</Link>
										</li>
										<li>
											<li>
											<MenuItem onClick={createModal.onOpen} label="Post blog" />
										</li>
										</li>
										<li>
											<Link href={`/profiles/settings?${user.name}`}>Billing</Link>
										</li>
										<li>
											<Link href={"/profiles/pending-items"}></Link>
										</li>
										
										<li>
											<Link href={`/profiles/onBoarding?${user.id}`}>Edit profile</Link>
										</li>
										<li>
											<Link href={`/profiles/status`}>Kyc</Link>
										</li>

										<li>
											<Link href={`#/`} onClick={() => signOut()}>
												log out
											</Link>
										</li>
									</ul>
								) : (
									<ul>
										<li>
											<Link href="/api/auth/signin">Sign Up</Link>
										</li>
									</ul>
								)}
							</nav>
							<div className="flex items-center justify-between">
								<Link href={"#"}>Privacy</Link>
								<ThemeToggle />
							</div>
						</div>
					</ScrollArea>
				</SheetContent>
			</Sheet>
		</div>
	)
}
export default MobileNav
