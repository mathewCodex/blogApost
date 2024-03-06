"use client"
import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { ChevronDownIcon } from "@radix-ui/react-icons"
// import { SIDENAV_ITEMS } from "../dashboard/constant"
// import GetUserData from "@/app/hooks/getuser-data"
// import { SafeUser } from "@/app/types"

// import UseUser from "@/app/hooks/useUsers"
import { AiFillDashboard } from "react-icons/ai"
import { BiHome, BiUser } from "react-icons/bi"
import { TbBell, TbSettings } from "react-icons/tb"
// import { User } from "@/lib/prisma"
import { cn } from "@/lib/utils"
import { useSession } from "next-auth/react";
type SideNavItem = {
	title: string
	path: string
	icon?: JSX.Element
	submenu?: boolean
	subMenuItems?: SideNavItem[]
	auth?: boolean
	alert?: string
}
// interface sideNavProps {
// 	currentUser?: User | null
// }
// mx-4 my-8 flex flex-col space-y-4
const SideNav = () => {
	// const { user } = GetUserData()
	// const { user: currentuser } = UseUser()
 const { data: session } = useSession();
	const SIDENAV_ITEMS: SideNavItem[] = [
		{
			title: "Home",
			path: `/profiles/user?${session?.user.email}`,
			icon: <BiHome size={24} />,
		},
		{
			title: "Activities",
			path: `/profiles/dashboard?${session?.user.email}`,
			icon: <AiFillDashboard size={24} />,
		},
		{
			title: "Accounts",
			path: `/profiles/dropdown`,
			icon: <BiUser size={24} />,
			submenu: true,

			subMenuItems: [
				{ title: "verification", path: `/profiles/status` },
				{ title: "Pending approval", path: "/profiles/pending-items" },
			],
		},
		{
			title: "Notification",
			path: "/profiles/notifications",
			alert: session?.user.email,
			auth: true,
			icon: <TbBell size={24} />,
		},
		{
			title: "Settings",
			path: "/settings",
			icon: <TbSettings size={24} />,
			submenu: true,
			subMenuItems: [
				{
					title: "Edit Account",
					path: `/profiles/onBoarding?${currentUser?.id}`,
				},
				{ title: "Privacy", path: "/settings/privacy" },
			],
			auth: true,
		},
		{
			title: "Help",
			path: "/help",
			// icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
		},
	];

	return (
		<aside
			// className={
			// 	" z-50 mt-2 hidden h-full w-64 space-y-2 bg-background px-4 sm:flex sm:flex-col "
			// }
			className={cn(
				`relative hidden h-screen w-72 overflow-hidden border-r pt-16 lg:block`,
			)}
		>
			{/* <div className="ml-4 pt-8">
				<ArrowLeftIcon />
			</div> */}
			{/* className="fixed flex h-full flex-grow flex-col justify-between space-x-4 " */}
			<div className="space-y-4 py-4">
				{/* <Nav /> */}
				{/* className="flex flex-grow justify-between  pt-8 md:px-6" */}
				<div className="px-3 py-2">
					<div className="space-y-1">
						<div className=" flex-col space-y-4  md:px-6">
							{SIDENAV_ITEMS.map((item, idx) => {
								return <MenuItem key={idx} item={item} />
							})}
						</div>
					</div>
				</div>
			</div>
		</aside>
	)
}

export default SideNav

const MenuItem = ({ item }: { item: SideNavItem }) => {
	const pathname = usePathname()
	const [subMenuOpen, setSubMenuOpen] = useState(false)
	const toggleSubMenu = () => {
		setSubMenuOpen(!subMenuOpen)
	}

	return (
		<div className="">
			{item.submenu ? (
				<>
					<button
						onClick={toggleSubMenu}
						className={` flex w-full flex-row items-center justify-between rounded-lg p-2 hover:bg-accent ${
							pathname.includes(item.path) ? "bg-accent" : ""
						}`}
					>
						<div className="flex flex-row items-center space-x-4">
							{item.icon}
							<span className="text-md border-black-700 flex border-b  font-semibold">
								{item.title}
							</span>
						</div>

						<div className={`${subMenuOpen ? "rotate-180" : ""} flex`}>
							<ChevronDownIcon />
						</div>
					</button>

					{subMenuOpen && (
						<div className="my-2 ml-10 flex flex-col space-y-2">
							{item.subMenuItems?.map((subItem, idx) => {
								return (
									<Link
										key={idx}
										href={subItem.path}
										className={`${subItem.path === pathname ? "font-bold" : ""}`}
									>
										<span>{subItem.title}</span>
									</Link>
								)
							})}
						</div>
					)}
				</>
			) : (
				<Link
					href={item.path}
					className={`border-black-800 flex flex-row items-center  space-x-4 border-b p-2 hover:bg-accent ${
						item.path === pathname ? "bg-accent" : ""
					}`}
				>
					{item.icon}
					<span className="text-md flex font-semibold">{item.title}</span>
				</Link>
			)}
		</div>
	)
}
