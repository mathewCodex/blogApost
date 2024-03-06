import { User, PostBlog } from "@prisma/client"
import { Icons } from "@/components/icons"
export type SafePost = Omit<PostBlog, "createdAt"> & {
	createdAt: string
}

export type SafeUser = Omit<User, "createdAt" | "updatedAt" | "emailVerified"> & {
	createdAt: string
	updatedAt: string
	emailVerified: string | null
}

export interface NavItem {
	title: string
	href?: string
	disabled?: boolean
	external?: boolean
	icon?: keyof typeof Icons
	label?: string
	description?: string
}

export interface NavItemWithChildren extends NavItem {
	items: NavItemWithChildren[]
}

export interface NavItemWithOptionalChildren extends NavItem {
	items?: NavItemWithChildren[]
}

export interface FooterItem {
	title: string
	items: {
		title: string
		href: string
		external?: boolean
	}[]
}

export type MainNavItem = NavItemWithOptionalChildren

export type SidebarNavItem = NavItemWithChildren
