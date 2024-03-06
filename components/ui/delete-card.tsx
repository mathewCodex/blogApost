"use client"

import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"

interface Props {
	postId: string
	currentUserId: string
	userId: string

	isComment?: boolean
}

function DeletePost({ postId, currentUserId, userId, isComment }: Props) {
	const pathname = usePathname()
	const router = useRouter()

	if (currentUserId !== postId || pathname === "/") return null

	return (
		<Image
			src="/assets/delete.svg"
			alt="delte"
			width={18}
			height={18}
			className="cursor-pointer object-contain"
			onClick={async () => {
				await deletePost(JSON.parse(postId), pathname)
				if (!userId || !isComment) {
					router.push("/")
				}
			}}
		/>
	)
}

export default DeletePost
