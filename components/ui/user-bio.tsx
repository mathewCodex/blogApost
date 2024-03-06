"use client"
// import Button from "../Button"
import { BiCalendar } from "react-icons/bi"
// import UseEditModal from "@/app/hooks/edit-modal"
// import UseFollow from "@/app/hooks/useFollow"
// import { SafePost, SafeUser } from "@/app/types"
import { User } from "@prisma/client"
import Link from "next/link"

interface userBioProps {
	currentUser: User | null
	// getUsersPost: PostBlog
}

const userBio: React.FC<userBioProps> = ({ currentUser }) => {
	const user = currentUser
	// const data = getUsersPost
	// const currentUser = await getCurrentUser()
	// const editModal = UseEditModal()
	// const { isFollowing, toggleFollow } = UseFollow(data?.id)
	const formatDateTime = new Intl.DateTimeFormat(undefined, { dateStyle: "short" })
	return (
		<div>
			<div className="border-b[1px] border-nuetral-800  pb-4">
				<div className="flex justify-end p-2">
					{user?.id && <Link href={`/auth/auth-form`}>Edit</Link>}
					{/* {data?.id === user?.id ? (
						<Button label="Edit" onClick={editModal.onOpen}></Button>
					// ) : (
					// 	<Button
					// 		onClick={() => {
					// 			toggleFollow
					// 		}}
					// 		label={isFollowing ? "unfollow" : "follow"}
					// 		//  secondary={!isFollowing}
					// 		outline={isFollowing}
					// 	></Button>
					// )} */}
				</div>
				<div className="mt-8 px-4">
					<div className="flex flex-col">
						<div className="text-2xl font-semibold text-white">{user?.name}</div>
						<p className="text-md text-neutral-500">@{user?.name}</p>
						<div className="mt-4 flex flex-col">
							<p>{user?.bio}</p>
							<div className="text-nuetra-500 flex flex-row items-center gap-2">
								<BiCalendar size={24} />
								<time
									dateTime={formatDateTime.format(user?.createdAt)}
									className="text-gray-500"
								>
									{formatDateTime.format(user?.createdAt)}
								</time>
							</div>
						</div>
						<div className="mt-20 border-b pb-12 text-center">
							<h1 className="text-4xl font-medium text-gray-700">
								@{user?.name}, <span className="font-light text-gray-500">27</span>
							</h1>
							<p className="mt-3 font-light text-gray-600">Abuja, Nigeria</p>
							<p className="mt-8 text-gray-500">
								Solution Manager - Creative Tim Officer
							</p>
							<p className="mt-2 text-gray-500">University of Computer Science</p>
						</div>
						<div className="mt-12 flex flex-col justify-center">
							<p className="text-center font-light text-gray-600 lg:px-16">
								An artist of considerable range, Ryan — the name taken by
								Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
								records all of his own music, giving it a warm, intimate feel with a solid
								groove structure. An artist of considerable range.
							</p>
							<button className="mt-4 px-4 py-2 font-medium text-indigo-500">
								Show more
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default userBio
