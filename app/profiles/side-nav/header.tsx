"use client"
import React from "react"

// import NotificationsMenu from "@/components/notificationMenu"

// import SmnkBrand from "@/components/smnk-brand"

// import MobileNav from "@/components/navigations/mobile-nav"
// import { ThemeToggle } from "@/components/theme-toggle"
// import { SafeUser } from "@/app/types"
// import UserDropdown from "@/components/navigations/user-dropdown"
// import MenuItem from "@/components/navigations/createMenu"
// import useModal from "@/app/hooks/create-modal"
// import { User } from "@/lib/prisma"
import ClientOnly from "@/components/ClientOnly"
import Navbar from "@/components/Navbar";
// interface HeaderProps {
// 	currentUser?: User | null
// 	// knockToken: any
// }

const Header  = () => {

	return (
		<ClientOnly>
		
            <Navbar />
		</ClientOnly>
	)
}

export default Header
