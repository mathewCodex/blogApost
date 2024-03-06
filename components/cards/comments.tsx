"use client"
// import axios from "axios"
import { cappedAvatarFallback } from "@/lib/utils"
import { User, PostBlog } from "@prisma/client"
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"
import axios from "axios"
import Link from "next/link"

// import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
// import router from "next/router"
import Input from "@/components/Input/input"

import { useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { useRouter } from "next/navigation"

// import { useSession } from "next-auth/react"
import useSWR from "swr"
// import { useSession } from "next-auth/react"
interface postProps {
	posts: PostBlog
	currentUser: User
}

const fetcher = async (url: any) => {
	const response = await axios.get(url)
	return response.data

	// if (!res.ok) {
	// 	const error = new Error(data.message)
	// 	throw error
	// }
}

const Comments: React.FC<postProps> = ({ posts, currentUser }) => {
	const router = useRouter()
	// Function to post a comment
	// const { status } = useSession()
	const postId = posts.id
	const { data, mutate, isLoading } = useSWR(
		`http://localhost:3000/api/comments?${postId}`,
		fetcher,
	)
	// const pId = posts.id
	// const [desc, setDesc] = useState("")
	// console.log(setDesc)
	// const onSubmit = async () => {
	// 	await fetch("/api/comments", {
	// 		method: "POST",
	// 		body: JSON.stringify({ desc, pId }),
	// 	})
	//
	// }

	const [loading, setIsLoading] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FieldValues>({
		defaultValues: {
			body: "",
		},
	})
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true)

		axios
			.post("/api/comments", data)
			.then(() => {
				router.refresh()
				reset()
			})
			.catch((error) => {
				error
			})
			.finally(() => {
				setIsLoading(false)
			})
		mutate()
	}
	return (
		<div className="container mt-10">
			<h1 className="title text-softTextColor mb-6">Post a Comments</h1>

			{currentUser ? (
				<div className="write flex items-center justify-between gap-6">
					{/* <textarea
						placeholder="write a comment..."
						onChange={(e) => setDesc(e.target.value)}
					/> */}
					<Input
						id="comment"
						label="Comment"
						disabled={loading}
						register={register}
						errors={errors}
						required
					/>
					<button
						onClick={handleSubmit(onSubmit)}
						className="button cursor-pointer rounded bg-teal-500 px-5 py-4 font-bold text-white"
					>
						Submit
					</button>
				</div>
			) : (
				<Link href="/">Login to write a comment</Link>
			)}
			{isLoading
				? "loading"
				: data?.map((user: any) => (
						<div className="comments mt-10" key={user.id}>
							<div className="comment mb-10">
								<div className="user mb-5 flex items-center gap-4">
									<Avatar className="h-8 w-8 rounded-full">
										<AvatarImage
											src={currentUser.image ?? ""}
											alt={user.name ?? "user name"}
										/>
										<AvatarFallback className="font-bold">
											{user.name ? cappedAvatarFallback(user.name) : "SM"}
										</AvatarFallback>
									</Avatar>
									<div className="userInfo">
										<span className="username font-semibold">{posts.title}</span>
										<span className="date text-sm">{user.name}</span>
									</div>
								</div>
								<p className="desc text-lg font-light">{posts.description}</p>
							</div>
						</div>
				  ))}
		</div>
	)
}

export default Comments
