"use client"
import axios from "axios"
import { useCallback, useState } from "react"
import { toast } from "react-hot-toast"

// import { useRouter } from "next/navigation"

// import useCurrentUser from "@/app/hooks/useCurrentuser"
import usePosts from "@/app/hooks/usePosts"
import usePost from "@/app/hooks/usePost"
import { useSession } from "next-auth/react"
import Avatar from "./Avatar"
import Button from "./Button"

interface FormProps {
	placeholder: string
	isComment?: boolean
	postId?: string
}

const Form: React.FC<FormProps> = ({ placeholder, isComment, postId }) => {
	// const router = useRouter()

	// const { data: currentUser } = useCurrentUser()
		const { data: session, status } = useSession()
	const { mutate: mutatePosts } = usePosts()
	const { mutate: mutatePost } = usePost(postId as string)

	const [body, setBody] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	const onSubmit = useCallback(async () => {
		try {
			setIsLoading(true)

			const url = isComment ? `/api/comments?postId=${postId}` : "/api/auth/signin"

			await axios.post(url, { body })

			toast.success("Comment created")
			setBody("")
			mutatePosts()
			mutatePost()
		} catch (error) {
			toast.error("Something went wrong")
		} finally {
			setIsLoading(false)
		}
	}, [body, mutatePosts, isComment, postId, mutatePost])

	return (
		<div className="border-b-[1px] border-neutral-800 px-5 py-2">
			{session && status === "authenticated" ? (
				<div className="flex flex-row gap-4">
					<div>
						<Avatar userId={session.user?.email as string} />
					</div>
					<div className="w-full">
						<textarea
							disabled={isLoading}
							onChange={(event) => setBody(event.target.value)}
							value={body}
							className="
                peer
                mt-3
                w-full 
                resize-none 
                bg-black 
                text-[20px] 
                text-white 
                placeholder-neutral-500 
                outline-none 
                ring-0 
                disabled:opacity-80
              "
							placeholder={placeholder}
						></textarea>
						<hr
							className="
                h-[1px] 
                w-full 
                border-neutral-800 
                opacity-0 
                transition 
                peer-focus:opacity-100"
						/>
						<div className="mt-4 flex flex-row justify-end">
							<Button disabled={isLoading || !body} onClick={onSubmit} label="Comment" />
						</div>
					</div>
				</div>
			) : (
				<div className="py-8">
					<h1 className="mb-4 text-center text-2xl font-bold text-white">
						Welcome to SMNK
					</h1>
					<div className="flex flex-row items-center justify-center gap-4">
						{/* <Button label="Login"  /> */}
						Login
					</div>
				</div>
			)}
		</div>
	)
}

export default Form
