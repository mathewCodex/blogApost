import React from "react"
import Image from "next/image"
import Profile from "./profile"
import { Badge } from "../ui/badge"
import Link from "next/link"

interface ArticleProps {
	title?: string
	image?: string
	des?: string
	categories?: string[]
	author?: {
		name: string
		image: string
	}
}

export function Article({ title, image, des, categories }: ArticleProps) {
	return (
		<div className="flex items-center justify-between gap-4 pt-3">
			<div className="flex flex-col items-start space-y-2">
				<Profile />
				<Link href="/articles" className="font-bold leading-tight hover:underline">
					{title}
				</Link>
				<p className="line-clamp-2 text-sm opacity-60">{des}</p>
				<div className="flex w-full items-center justify-between">
					<div className="flex items-center gap-3 text-xs">
						<p>Nov. 8 . 17 min read</p>
						{categories && <Badge variant="outline">{categories[0]}</Badge>}
					</div>
					<span className="flex items-center gap-1 text-xs">
						12
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
						</svg>
					</span>
				</div>
			</div>
			{image && (
				<Image
					className="aspect-video h-full bg-gray-300"
					src={image}
					alt={title || "title name"}
					width={350}
					height={200}
				/>
			)}
		</div>
	)
}
