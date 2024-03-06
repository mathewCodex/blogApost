"use client"

import { PostBlog, User } from "@prisma/client"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import useFavorites from "@/app/hooks/useLikes"

interface heartProps {
	postId: PostBlog
	currentUser: User
}
const HeartButton: React.FC<heartProps> = ({ postId, currentUser }) => {
	
	const { hasFavorited, toggleLikes } = useFavorites({
		postId,
		currentUser,
	})
	// const likedIcon = hasFavorited ? (
	// 	<AiFillHeart size={30} className="fill-rose-500" />
	// ) : (
	// 	<AiOutlineHeart
	// 		size={30}
	// 		className="fill-nuetral-500/70 absolute -right-[2px]  -top-[2px]"
	// 	/>
	// )
	const handleClick = () => {
		console.log("clicked")
	}
	return (
		<>
			<div
				role="button"
				onKeyDown={handleClick}
				tabIndex={0}
				onClick={toggleLikes}
				className="absolute flex cursor-pointer flex-col transition hover:opacity-80"
			>
				<AiOutlineHeart
					size={28}
					className="
          absolute
          -right-[2px]
          -top-[2px]
          fill-white
        "
				/>
				<AiFillHeart
					size={24}
					className={hasFavorited ? "fill-rose-500" : "fill-nuetral-500/70"}
				/>
				<p className="space-y-4">{currentUser.favoritesIds.length}</p>
			</div>
		</>
	)
}

export default HeartButton
