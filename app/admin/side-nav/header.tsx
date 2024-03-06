"use client"
import React from "react"

import NotificationsMenu from "@/components/notificationMenu"

import SmnkBrand from "@/components/smnk-brand"

import MobileNav from "@/components/navigations/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
// import { SafeUser } from "@/app/types"
import UserDropdown from "@/components/navigations/user-dropdown"
import MenuItem from "@/components/navigations/createMenu"
import useModal from "@/app/hooks/create-modal"
import { User } from "@/lib/prisma"
import ClientOnly from "@/components/ClientOnly"

interface HeaderProps {
	currentUser?: User | null
	// knockToken: any
}

const Header: React.FC<HeaderProps> = ({ currentUser }) => {
	const createModal = useModal()

	if (!currentUser) {
		return (
			<ClientOnly>
				<>Hello You : )</>
			</ClientOnly>
		)
	}
	return (
		<ClientOnly>
			<header className="mx-auto flex max-w-screen-xl items-center justify-between bg-transparent px-4 py-3">
				<SmnkBrand />
				<nav className="hidden items-center space-x-6 md:flex">
					<MenuItem onClick={createModal.onOpen} label="Post blog" />
					<UserDropdown user={currentUser} />
					<NotificationsMenu />
					<ThemeToggle />
				</nav>
				<MobileNav user={currentUser} />
			</header>
		</ClientOnly>
	)
}

export default Header
