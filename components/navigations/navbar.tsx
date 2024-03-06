"use client"
import SmnkBrand from "../smnk-brand"
import { ThemeToggle } from "../theme-toggle"

import MobileNav from "./mobile-nav"
import UserDropdown from "./user-dropdown"
// import { SafeUser } from "@/app/types"

import Link from "next/link"
// import ShoppingCart from "./shopping-cart"
import NavMenu from "./nav-menu"
import React from "react"
import useModal from "@/app/hooks/create-modal"
import MenuItem from "./createMenu"
import Notification from "../notificationMenu"
import { User } from "@/lib/prisma"
interface navBarProps {
	currentUser?: User | null
	// knockToken: string
}
const Navbar: React.FC<navBarProps> = ({ currentUser }) => {
	const createModal = useModal()
	const user = currentUser
	//dark:bg-black/20  bg-gray-800
	return (
		<header
			id="scrollId"
			className={`fixed z-10 w-full bg-transparent backdrop-blur-sm dark:border-gray-800  `}
		>
			<section className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-3">
				<SmnkBrand />
				<nav className="hidden items-center space-x-6 md:flex">
					{/* <ShoppingCart /> */}

					{/* TODO: add notification icon */}
					{user ? (
						<>
							<NavMenu />
							{/* <Link href="/profiles/dashboard">DashBoard</Link> */}
							<MenuItem onClick={createModal.onOpen} label="Post blog" />
							<UserDropdown user={user} />
							<div className="ml-3 space-x-1 border-l pl-3">
								{/* for signup notification */}
								<Notification />
							</div>
						</>
					) : (
						<>
							<Link href="/api/auth/signin">Sign Up</Link>
						</>
					)}

					<ThemeToggle />
				</nav>
				<MobileNav user={user} />
			</section>
		</header>
	)
}
export default Navbar
