// import Image from "next/image";
import { cappedAvatarFallback } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { User } from "@/lib/prisma"
// import useUser from "@/app/hooks/use-user"
// import { SafeUser } from "@/app/types"

interface UserHeroProps {
	currentUser: User | null
}

const UserHero: React.FC<UserHeroProps> = ({ currentUser }) => {
	// const { user } = useUser(userId)
	const user = currentUser
	return (
		<div>
			<div className=" h-44 bg-accent">
				{/* <div className="adbsolute -buttom-16 left-4">
						{user && (
							<Avatar className="h-8 w-8 rounded-full">
								<AvatarImage src={user.image ?? ""} alt={user.name ?? "user name"} />
								<AvatarFallback className="font-bold">
									{user.name ? cappedAvatarFallback(user.name) : "SM"}
								</AvatarFallback>
							</Avatar>
						)}
					</div> */}

				<div className="grid grid-cols-1 md:grid-cols-3">
					<div className="order-last mt-20 grid grid-cols-3 text-center md:order-first md:mt-0">
						<div>
							<p className="text-xl font-bold text-gray-700">22</p>
							<p className="text-gray-400">views</p>
						</div>
						<div>
							<p className="text-xl font-bold text-gray-700">10</p>
							<p className="text-gray-400">Photos</p>
						</div>
						<div>
							<p className="text-xl font-bold text-gray-700">89</p>
							<p className="text-gray-400">Comments</p>
						</div>
					</div>
					<div className="relative">
						<div className="absolute inset-x-0 top-0 mx-auto -mt-24 flex h-48 w-48 items-center justify-center rounded-full bg-indigo-100 text-indigo-500 shadow-2xl">
							{user && (
								<Avatar className=" h-48 w-48 rounded-full">
									<AvatarImage src={user.image ?? ""} alt={user.name ?? "user name"} />
									<AvatarFallback className="font-bold">
										{user.name ? cappedAvatarFallback(user.name) : "SM"}
									</AvatarFallback>
								</Avatar>
							)}
						</div>
					</div>
					<div className="mt-32 flex justify-between space-x-8 md:mt-0 md:justify-center">
						<button className="transform rounded bg-blue-400 px-4 py-2 font-medium uppercase text-white shadow transition hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-lg">
							socials
						</button>
						<button className="transform rounded bg-gray-700 px-4 py-2 font-medium uppercase text-white shadow transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg">
							posts
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
export default UserHero


