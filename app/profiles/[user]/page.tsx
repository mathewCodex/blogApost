import { TbFidgetSpinner } from "react-icons/tb"
import { getCurrentUserId, getuser } from "@/app/actions/User"
// import { useSearchParams } from "next/navigation"
// import getCurrentUser from "@/lib/session"
// import useUser from "@/app/hooks/use-user"
// import { Avatar } from "@/components/ui/avatar"
// import { cappedAvatarFallback } from "@/lib/utils"
// import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
// import GET from "@/app/api/get-mypost/[route]"
// import UserHero from "@/components/ui/hero"
// import UserBio from "@/components/ui/user-bio"
import { BiCalendar } from "react-icons/bi"
// import { getCurrentuser } from "@/app/actions/User";
// import PostItem from "@/components/cards/post-items"
import { cappedAvatarFallback } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

// import { getPublishedStoryById } from "@/app/actions/getStories"

async function ProfilePage() {
	// const currentUser = await getCurrentuser();
    //  const PublishedStory = await getPublishedStoryById(params.userId)
	// const getUsersPost = await GET(currentUser.id)
	// const { user, isLoading } = useUser(userId as string)
	const userId = await getCurrentUserId()
const currentUser = await getuser(userId);

	if (!currentUser) {
		return (
			<div className="flex h-full items-center justify-center">
				<TbFidgetSpinner size={24} />
			</div>
		)
	}
	const formatDateTime = new Intl.DateTimeFormat(undefined, { dateStyle: "short" })
	
	return (
		<>
			<div className="flex flex-col items-center justify-center ">
				<section className="bg-background pt-16">
					<div className="mx-auto w-full px-4 lg:w-4/12">
						<div className="relative mb-6 mt-16 flex w-full min-w-0 flex-col break-words rounded-lg  shadow-xl">
							<div className="px-6">
								<div className="flex flex-wrap justify-center">
									<div className="flex w-full justify-center px-4">
										<div className="relative">
											{currentUser && (
												<Avatar className=" h-48 w-48 rounded-full">
													<AvatarImage
														src={currentUser.imageUrl ?? ""}
														alt={currentUser.firstName?? "currentUser name"}
													/>
													<AvatarFallback className="font-bold">
														{currentUser.firstName
															? cappedAvatarFallback(currentUser.firstName)
															: "SM"}
													</AvatarFallback>
												</Avatar>
											)}
										</div>
									</div>
									<div className="mt-20 w-full px-4 text-center">
										<div className="flex justify-center py-4 pt-8 lg:pt-4">
											<div className="mr-4 p-3 text-center">
												<span className="text-blueGray-600 block text-xl font-bold uppercase tracking-wide">
													22
												</span>
												<span className="text-blueGray-400 text-sm">Views</span>
											</div>
											<div className="mr-4 p-3 text-center">
												<span className="text-blueGray-600 block text-xl font-bold uppercase tracking-wide">
													10
												</span>
												<span className="text-blueGray-400 text-sm">Posts</span>
											</div>
											<div className="p-3 text-center lg:mr-4">
												<span className="text-blueGray-600 block text-xl font-bold uppercase tracking-wide">
													89
												</span>
												<span className="text-blueGray-400 text-sm">Comments</span>
											</div>
										</div>
									</div>
								</div>
								<div className="text-nuetra-500 flex flex-row items-center gap-2">
									<BiCalendar size={24} />
									<time
										dateTime={formatDateTime.format(currentUser?.createdAt)}
										className="text-gray-500"
									>
										{formatDateTime.format(currentUser?.createdAt)}
									</time>
								</div>
								<div className="mt-12 text-center">
									<h3 className="text-blueGray-700 mb-2 mb-2 text-xl font-semibold leading-normal">
										{currentUser?.name}
									</h3>
									<div className="text-blueGray-400 mb-2 mt-0 text-sm font-bold uppercase leading-normal">
										<i className="fas fa-map-marker-alt text-blueGray-400 mr-2 text-lg"></i>
										Abuja, Nigeria
									</div>
									<div className="text-blueGray-600 mb-2 mt-10">
										<i className="fas fa-briefcase text-blueGray-400 mr-2 text-lg"></i>
										Solution Manager - Creative Tim Officer
									</div>
									<div className="text-blueGray-600 mb-2">
										<i className="fas fa-university text-blueGray-400 mr-2 text-lg"></i>
										University of Computer Science
									</div>
								</div>

								<div className="border-blueGray-200 mt-10 border-t py-10 text-center">
									<div className="flex flex-wrap justify-center">
										<div className="w-full px-4 lg:w-9/12">
											<p className="text-blueGray-700 mb-4 text-lg leading-relaxed">
												An artist of considerable range, Jenna the name taken by
												Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and
												records all of his own music, giving it a warm, intimate feel with
												a solid groove structure. An artist of considerable range.
											</p>
											<a href="javascript:void(0);" className="font-normal text-pink-500">
												<Link href={`/profiles/onBoarding?${currentUser.id}`}>Edit</Link>
											</a>
										</div>
									</div>
								</div>
								{/* <div className="align-center flex flex-col justify-center">
									{getUsersPost.map((data) => {
										return (
											<PostItem currentUser={currentUser} key={data.id} data={data} />
										)
									})}
								</div> */}
							</div>
						</div>
					</div>
					{/* <footer className="relative mt-8 pb-6 pt-8">
						<div className="container mx-auto px-4">
							<div className="flex flex-wrap items-center justify-center md:justify-between">
								<div className="mx-auto w-full px-4 text-center md:w-6/12">
									<div className="text-blueGray-500 py-1 text-sm font-semibold"></div>
								</div>
							</div>
						</div>
					</footer> */}
				</section>
			</div>
		</>
	)
}

export default ProfilePage
