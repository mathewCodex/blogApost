import { getCurrentuser } from "@/app/actions/User";
import SignIn from "@/app/account/signin/page";
import Header from "./side-nav/header";
import Sidebar from "./side-nav/page";
// import { env } from "@/env.mjs"

// import { Knock } from "@knocklabs/node"
export default async function profileLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const currentUser = await getCurrentuser();
	// const knockClient = new Knock(env.KNOCK_SECRET_APIKEY)
	// const knockUser = await knockClient.users.identify(currentUser?.id as string, {
	// 	name: currentUser?.name as string,
	// 	email: currentUser?.email as string,
	// })
	// const knock_token = Knock.signUserToken(currentUser?.id as string, {
	// 	signingKey: env.KNOCK_SIGNING_KEY,
	// 	expiresInSeconds: 60 * 60,
	// })
	// knockToken={knock_token} props
	return (
		<>
			{currentUser ? (
				<div>
					<Header />

					<div className=" flex h-screen  overflow-y-auto bg-background">
						<Sidebar currentUser={currentUser} />
						{/* <div className="flex-grow text-gray-800"></div> */}
						<main className="w-full pt-16"> {children}</main>
					</div>
				</div>
			) : (
				<div>
					<SignIn />
				</div>
			)}
		</>
	);
}
