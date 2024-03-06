"use client"

import { signOut } from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import Link from "next/link"
import { Button, buttonVariants } from "../ui/button"
import { cappedAvatarFallback } from "@/lib/utils"
import { Icons } from "../icons"
import { Skeleton } from "../ui/skeleton"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu"
// import { SafeUser } from "@/app/types/index"
import { User } from "@prisma/client"
// import { SafeUser } from "@/app/types"

interface navBarProps {
	user?: User | null
}

const UserDropdown: React.FC<navBarProps> = ({ user }) => {
	return user ? (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild className="p-1">
					<Button variant="ghost" className="relative flex items-center gap-1">
						<Avatar className="h-8 w-8 rounded-full">
							<AvatarImage src={user.image ?? ""} alt={user.name ?? "user name"} />
							<AvatarFallback className="font-bold">
								{user.name ? cappedAvatarFallback(user.name) : "SM"}
							</AvatarFallback>
						</Avatar>
						<ChevronDownIcon />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56" align="end" forceMount>
					<DropdownMenuLabel className="font-normal">
						<div className="flex flex-col space-y-1">
							<p className="text-sm font-medium leading-none">{user.name}</p>
							<p className="text-xs leading-none text-muted-foreground">{user.email}</p>
						</div>
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem asChild>
							<Link href={`/profiles/user?${user.id}`}>Profile</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>
							Billing
							<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
						</DropdownMenuItem>
						<DropdownMenuItem asChild>
							<Link href={`/profiles/dashboard?${user.id}`}>DashBoard</Link>
						</DropdownMenuItem>
						<DropdownMenuItem asChild>
							<Link href={`/profiles/settings?${user.id}`}>Settings</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>New Team</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuItem onClick={() => signOut()}>
						Log out
						<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	) : (
		<Link href="/api/auth/signin" className={buttonVariants({ variant: "default" })}>
			Get Started
		</Link>
	)
}
export default UserDropdown
export function UserMenuSkeleton() {
	return (
		<div className="flex items-center gap-3">
			<Skeleton className="h-8 w-8 rounded-full" />
			<Icons.menu className="opacity-50" />
		</div>
	)
}
