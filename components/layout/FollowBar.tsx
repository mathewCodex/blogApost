// import useUsers from "@/app/hooks/useUsers"

// import { AvatarImage } from "../ui/avatar"

// const FollowBar = () => {
// 	const { data: users = [] } = useUsers()
// 	if (users.length === 0) {
// 		return null
// 	}
// 	return (
// 		<div className="hidden px-6 py-6 lg:block">
// 			<div className="bg-nuetral-800 rounded-xl p-4">
// 				<h2 className="text-xl font-semibold text-white">who to follow</h2>
// 				<div className="mt-6 flex flex-col gap-6">
// 					{users.map((user: Record<string, any>) => (
// 						<div key={user.id} className="flex flex-row gap-4">
// 							<AvatarImage src={user.image ?? ""} alt={user.name ?? "user name"} />
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default FollowBar
