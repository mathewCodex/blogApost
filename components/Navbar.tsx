"use client"
import { UserButton } from "@clerk/nextjs"
// import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import {ScrollText, Search} from "lucide-react"
import axios from "axios"
import { useRouter } from "next/navigation"
// import BlogBrand from "./blog-brand";
import { useUser } from "@clerk/nextjs"
import { useAuth } from "@clerk/nextjs";
import { ThemeToggle } from "./theme-toggle"
import BlogBrand from "./blog-brand"
type Props = {}

const Navbar = (props: Props) => {
    const [SearchInput, setSearchInput] = useState<string>("")
    const router = useRouter()
    const {  isSignedIn } = useUser()
      const {  userId } = useAuth()
    const MakeNewStory = async () => {
        try {
            const response = await axios.post("/api/new-story")
            router.push(`/story/${response.data.id}`)
            console.log(response)
        } catch (error) {   
            console.log("Error creating new story", error)
        }
    }

    const SearchFun = (event:React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter"){
            router.push(`/search?for=${SearchInput}`)
        }
    }
  return (
		<div className="border-b-[1px] px-8 py-2">
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-3">
					<Link href="/">
						
						<BlogBrand />
					</Link>
					<div className="flex items-center rounded-full bg-gray-50 px-2">
						<Search
							onClick={() => router.push(`/search?for${SearchInput}`)}
							size={20}
							className="opacity-50"
						/>
						<input
							onChange={(e) => setSearchInput(e.target.value)}
							onKeyDown={(e) => SearchFun(e)}
							type="text"
							placeholder="Search..."
							className="bg-gray-50 px-1 py-2 text-sm placeholder:text-sm focus:outline-none"
						/>
					</div>
				</div>
				<div className="flex items-center space-x-5">
					<span
						onClick={MakeNewStory}
						className="flex cursor-pointer items-center space-x-2 opacity-70 duration-100 ease-in hover:opacity-100"
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							aria-label="Write"
						>
							<path
								d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
								fill="currentColor"
							></path>
							<path
								d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
								stroke="currentColor"
							></path>
						</svg>
						<p className="text-sm font-light">Write</p>
					</span>
					<Link
						href="/me/drafts"
						className="flex items-center space-x-1 text-sm font-light opacity-60"
					>
						<ScrollText size={20} opacity={20} /> drafts
					</Link>

					{isSignedIn && (
						<Link
							 href={`/profiles/user?${userId}`}
							className="flex items-center space-x-1 text-sm font-light opacity-60"
						>
							<ScrollText size={20} opacity={20} />profile
						</Link>
					)}
					<ThemeToggle />
					<UserButton signInUrl="/" />
				</div>
			</div>
		</div>
	)
}

export default Navbar