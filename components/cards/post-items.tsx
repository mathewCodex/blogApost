"use client"
import { useMemo } from "react"
import { Avatar, AvatarImage } from "../ui/avatar"
import { AiOutlineMessage } from "react-icons/ai"
// import useLike from "@/app/hooks/useLikes"
import { format } from "date-fns"
import { PostBlog, User } from "@prisma/client"
import { useRouter } from "next/navigation"

interface PostItemProps {
	data: PostBlog
	// userData: SafeUser
	postId?: string
	currentUser: User | null //for sanitization and server errors
	onAction?: (id: string) => void
}

const PostItem: React.FC<PostItemProps> = ({ currentUser, data }) => {
	const router = useRouter()
	const createdAt = useMemo(() => {
		if (!data?.createdAt) {
			return null
		}

		return format(new Date(data.createdAt), "MMMM yyyy")
	}, [data?.createdAt])
	const keyPress = () => {
		return null
	}
	return (
		<div
			onClick={() => router.push(`/postdetail/${data.id}`)}
			onKeyDown={keyPress}
			role="button"
			tabIndex={0}
			className="border-nuetral-800  cursor-pointer border-b-[1px] p-5 transition hover:bg-accent"
		>
			<div
				onKeyDown={keyPress}
				role="button"
				tabIndex={0}
				className="flex flex-row items-start gap-3"
				// onClick={goToUser}
			>
				<Avatar className="h-8 w-8 rounded-full">
					<AvatarImage
						src={currentUser?.image ?? ""}
						alt={currentUser?.name ?? "user name"}
					/>
				</Avatar>
				<div className="flex flex-row items-center gap-2">
					<p className="cursor-pointer font-semibold text-white hover:underline">
						{currentUser?.name}
					</p>
					<span
						onKeyDown={keyPress}
						role="button"
						tabIndex={0}
						// onClick={goToUser}
						className="text-nuetral-500 hidden cursor-pointer hover:underline md:block"
					>
						@{currentUser?.name}
					</span>
					<span className="text-nuetral-500 text-sm">{createdAt}</span>
				</div>
				<div className="mt-1 text-white">{data.title}</div>
				<div className="mt-3 flex flex-row items-center gap-10">
					<div className="text-nuetral-500 flex cursor-pointer flex-row items-center gap-2 transition hover:text-sky-500">
						<AiOutlineMessage size={20} />
					</div>
					{/* <p>{data.comments?.length || 0}</p> */}
					12
				</div>
				<div
					onKeyDown={keyPress}
					role="button"
					tabIndex={0}
					className="mt-3 flex flex-row items-center gap-10"
					// onClick={onLike}
				>
					{/* <div className="text-nuetral-500 flex cursor-pointer flex-row items-center gap-2 transition hover:text-red-500">
						{hasLiked ? (
							<AiFillHeart size={20} color={hasLiked ? "red" : " "} />
						) : (
							<AiOutlineHeart size={20} />
						)}
					</div> */}
					<p>{data.likedIds?.length || 0}</p>
				</div>
			</div>
		</div>
	)
}
export default PostItem
