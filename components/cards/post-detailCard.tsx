"use client"

import Image from "next/image"
import Link from "next/link"
// import DeletePost from "@/components/ui/delete-card"
import { PostBlog, User } from "@prisma/client"
// import HeartButton from "../Heart-button"
// import { useRouter } from "next/navigation"
// import { useCallback, useState } from "react"
// import axios from "axios"
// import { Button } from "../ui/button"

interface Props {
	posts: PostBlog
	currentUser: User
	// isComment: false
}
// interface Category {
// 	name: string
// 	path: string
// }

// const CATS: Category[] = [
// 	{ name: "Science", path: "/" },
// 	{ name: "Motivation", path: "/" },
// 	{ name: "Art & Culture", path: "/" },
// 	{ name: "Research", path: "/" },
// 	{ name: "Case Studies", path: "/" },
// 	{ name: "Politics", path: "/" },
// 	{ name: "Visual Design", path: "/" },
// 	{ name: "Product Design", path: "/" },
// 	{ name: "Education", path: "/" },
// 	{ name: "Nigerian", path: "/" },
// 	{ name: "Gossip", path: "/" },
// 	// Repeat "Science" entries have been removed for brevity
// ]
const PostCard: React.FC<Props> = ({ posts, currentUser }) => {
	const user = currentUser
	// const router = useRouter()
	// const [deletingId, setDeletingId] = useState("")

	// const ondelete = useCallback(
	// 	(id: string) => {
	// 		setDeletingId(id)

	// 		axios
	// 			.delete(`/api/post-delete/${id}`)
	// 			.then(() => {
	// 				console.log("deleted")
	// 				router.refresh()
	// 			})
	// 			.catch((err) => {
	// 				throw new Error("Error making request", err)
	// 			})
	// 			.finally(() => {
	// 				setDeletingId("")
	// 			})
	// 	},
	// 	[router],
	// )

	return (
		<article>
			{/* <Header /> */}
			<div>{posts.category}</div>
			<div className="align-center flex flex-col  items-start justify-between">
				<div className="flex w-full flex-1 flex-col gap-4">
					<div className="flex flex-col items-center">
						<Link href={`/profiles/user?${user?.id}`} className="relative h-11 w-11">
							<Image
								src={user?.image as string}
								alt="user_community_image"
								fill
								className="cursor-pointer rounded-full"
							/>
						</Link>

						<div className="Post-card_bar" />
					</div>

					<div className="flex w-full flex-col">
						<Link href={`/profiles/user/?${user?.id}`} className="w-fit">
							<h4 className="text-base-semibold text-light-1 cursor-pointer">
								{user?.name}
							</h4>
						</Link>

					
					</div>

					<article>
						<div className="flex w-full flex-col gap-2">
							<div
								className="
            relative 
            aspect-square 
            w-full 
            overflow-hidden 
            rounded-xl
          "
							>
								<Image
									fill
									className="
              lg:h-200
              lg:w-200
			  
			  h-full
			  w-full
              object-cover 
              transition 
              group-hover:scale-110
            "
									src={posts.imageSrc}
									alt="posted image"
								/>
							</div>
							<div className="text-lg font-semibold">Post Detail</div>
							<div className="font-light text-neutral-500">{posts.category}</div>
							<div className="flex flex-row items-center gap-1">
								
								<div className="font-semibold">{posts.title}</div>

								<p>{posts.description}</p>
								
							</div>
					
						</div>
					</article>
				</div>
			</div>

		
		</article>
	)
}

export default PostCard
