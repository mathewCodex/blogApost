// "use client"

import { AiOutlineHeart } from "react-icons/ai"
// import GET from "@/app/api/[get-mypost]/route"
import ClientOnly from "@/components/ClientOnly"

import { getCurrentUserId, getCurrentuser, getuser } from "@/app/actions/User";
import { TotalComment, TotalNumberOfComments, getAllComments } from "@/app/actions/Comments";
import { NumberFollowers } from "@/app/actions/Following";
import { getPublishedStory } from "@/app/actions/me";
import { ClapCount, UserTotalClap } from "@/app/actions/Clap";
import { User } from "@clerk/nextjs/server"
//the userId is equivalent to storyId I just called it userId since it rendering the content on the profile....
const DashBoardLayout = async ({params}:{params: {userId: string}}) => {
	// const { data: user } = useSession()
	const userId = await getCurrentUserId()
	const user = await getCurrentuser();
	 const User:User = await getuser(userId)
	//   const published = await getPublishedStory();
	 const commentResult = await TotalNumberOfComments(userId)
	 const  TotalClaps = await UserTotalClap()
	
	  //current user Id
	

	const totalFollowers = await NumberFollowers(userId)
	// if (!user) return null
	// const { data } = useSession()
	// const data = await GETEVENT(params)

	//get the moment if its afternoon or night
	// const res = await fetch(
	// 	`https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=${pageLimit}` +
	// 		(country ? `&search=${country}` : ""),
	// )
    //    const pendingRes = await res.json()
	// const [desc, setDesc] = useState("")
	// const loadData = async () => {
	// 	await fetch("/api/activity", {
	// 		method: "POST",
	// 		body: JSON.stringify({ params }),
	// 	})
	// 	mutate()
	// }
	function getCurrentTimeOfDay(): string {
		const currentTime = new Date()
		const currentHour = currentTime.getHours()

		if (currentHour < 12) {
			return "Good morning"
		} else if (currentHour < 18) {
			return "Good afternoon"
		} else {
			return "Good Evening"
		}
	}

	const timeOfDay = getCurrentTimeOfDay()

	return (
		<>
			<ClientOnly>
				<main className=" mt:4 space-y-6 bg-background p-6 sm:p-10">
					<div className=" flex flex-col justify-between space-y-6  md:flex-row md:space-y-0">
						<div className="mr-6">
							<h1 className="mb-2 text-4xl font-semibold">{timeOfDay}</h1>
							<h2 className="ml-0.5 text-gray-600 text-3xl font-semibold">
								{" "}
								<span className="font-semi-bold text-2xl">Welcome back</span>,

								{user?.firstName}
							</h2>
						</div>
						<div className="-mb-3 flex flex-wrap items-start justify-end">
							<button className="mb-3 ml-6 inline-flex rounded-md bg-blue-400 px-5 py-3 text-white hover:bg-blue-500 focus:bg-blue-700">
								<svg
									aria-hidden="true"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="-ml-1 mr-2 h-6 w-6 flex-shrink-0 text-white"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 6v6m0 0v6m0-6h6m-6 0H6"
									/>
								</svg>
								pending post...
							</button>
						</div>
					</div>

					<section className="mt-4 grid gap-6 bg-background md:grid-cols-2 xl:grid-cols-4">
						<div className="flex items-center rounded-lg  bg-accent p-8 shadow">
							<div className="mr-6 inline-flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600">
								<svg
									aria-hidden="true"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="h-6 w-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
							</div>
							<div>
								<span className="block text-2xl font-bold">
									{
										TotalClaps ? TotalClaps.claps : "0"
									}
								</span>
								<span className="block text-gray-500">Total Likes</span>
							</div>
						</div>
						<div className="flex items-center rounded-lg bg-accent p-8 shadow">
							<div className="mr-6 inline-flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
								<svg
									aria-hidden="true"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="h-6 w-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
									/>
								</svg>
							</div>
							<div>
								<span className="block text-2xl font-bold">{
									totalFollowers ? totalFollowers.followers :
									"0"
								}</span>
								<span className="block text-gray-500">followers</span>
							</div>
						</div>
						<div className="flex items-center rounded-lg bg-accent p-8 shadow">
							<div className="mr-6 inline-flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
								<svg
									aria-hidden="true"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="h-6 w-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
									/>
								</svg>
							</div>
							<div>
								<span className="inline-block text-2xl font-bold">9</span>
								<span className="inline-block text-xl font-semibold text-gray-500">
									(14%)
								</span>
								<span className="block text-gray-500">Shares</span>
							</div>
						</div>
						<div className="flex items-center rounded-lg bg-accent p-8 shadow">
							<div className="mr-6 inline-flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
								<svg
									aria-hidden="true"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="h-6 w-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
									/>
								</svg>
							</div>
							<div>
								<span className="text-gray-600">{
									commentResult ? commentResult.response.length :
									"No comments"
								}</span>
							</div>
						</div>
					</section>
					<div className="row-span-3 rounded-lg  bg-background shadow">
						<div className="flex items-center justify-between border-b border-gray-100 px-6 py-5 font-semibold"></div>
						<section className="grid gap-6 md:grid-cols-2 xl:grid-flow-col xl:grid-cols-4 xl:grid-rows-3">
							<div className="flex flex-col rounded-lg  bg-background shadow md:col-span-2 md:row-span-2">
								<div className="border-b border-gray-100 px-6 py-5 font-semibold">
									KYC Status
								</div>
								<div className="flex-grow p-4">
									<div className="flex h-full items-center justify-center rounded-md border-2 border-dashed border-gray-200 bg-accent px-4 py-16 text-3xl font-semibold text-gray-400">
										Status verified
									</div>
								</div>
							</div>
							<div className="flex items-center rounded-lg bg-accent p-8 shadow">
								<div className="mr-6 inline-flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
									<AiOutlineHeart size={25} />
								</div>
								<div>
									<div>
										<span className="text-gray-500">{
										TotalClaps ? TotalClaps.claps : "0"
									}</span>
									</div>
								</div>
							</div>
							<div className="flex items-center rounded-lg bg-accent p-8 shadow">
								<div className="mr-6 inline-flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600">
									<svg
										aria-hidden="true"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										className="h-6 w-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<div>
									<span className="block text-2xl font-bold">139</span>
									<span className="block text-gray-500">Views</span>
								</div>
							</div>

							<div className="row-span-3 w-full rounded-lg  shadow">
								<div className="flex items-center justify-between border-b border-gray-100  px-6 py-5 font-semibold">
									<span>Latest Articles</span>
									<button
										type="button"
										className="-mr-1 inline-flex justify-center rounded-md  px-1 text-sm font-medium leading-5 text-gray-500 hover:text-gray-600"
										id="options-menu"
										aria-haspopup="true"
										aria-expanded="true"
									>
										Last 7 days
										<svg
											className="-mr-1 ml-1 h-5 w-5"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
									</button>
								</div>
								<div className="overflow-y-auto bg-background">
									<span className="text-gray-600">No activity</span>
								</div>
							</div>
							<div className="row-span-3 flex flex-col rounded-lg bg-accent shadow">
								<div className="border-b border-gray-100 px-6 py-5 font-semibold">
									Advertisement
								</div>
								<div className="flex-grow p-4">
									<div className="flex h-full items-center justify-center rounded-md border-2 border-dashed border-gray-200 bg-accent px-4 py-24 text-3xl font-semibold text-gray-400">
										Ads
									</div>
								</div>
							</div>
						</section>
					</div>
				</main>
			</ClientOnly>
		</>
	)
}

export default DashBoardLayout
