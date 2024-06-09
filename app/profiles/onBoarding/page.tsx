import React from "react"
// import { Card, CardHeader } from "@/components/ui/card"
// import ClientOnly from "@/components/ClientOnly"
// import getCurrentUser from "@/lib/session"
import { getCurrentUserId, getCurrentuser } from "@/app/actions/User";
import BreadCrumb from "@/components/breadcrumb"
import { ScrollArea } from "@/components/ui/scroll-area"
import { getuser } from "@/app/actions/User"
import { User } from "@clerk/nextjs/server"
// import AuthForm from "@/app/auth/auth-form"
// import { redirect } from "next/navigation"
import { CreateProfileOne } from "@/components/forms/user-profile-stepper/create-profile"

const OnBoarding = async () => {
	const user = await getCurrentuser();
	const userId = await getCurrentUserId()
 const User:User = await getuser(userId)
	// if (user?.onBoarded) redirect(`/profiles/?${user.id}`)
const breadcrumbItems = [{ title: "Profile", link: `/profiles/onBoarding/${User?.firstName}`}]

	const userData = {
		id: userId as string,
		name: (User?.firstName as string) ?? "",
		email: (User.emailAddresses[0].emailAddress as string) ?? "",
		bio: user ? (user?.bio as string) : "",
		imageSrc: user ? (User?.imageUrl as string) : " ",
	}
	return (
		<div>
			{/* <div className="flex min-h-screen w-screen items-center justify-center ">
				<Card className="[lg:w-70 sm:min-h-1/2] h-full min-h-screen border border-solid border-gray-100 md:h-screen">
					<CardHeader className="border-b border-solid border-gray-100">
					
					</CardHeader>

				</Card>
			</div> */}
			<ScrollArea className="h-full">
				<div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
					<BreadCrumb items={breadcrumbItems} />
					{/* <CreateProfileOne categories={[]} initialData={null} /> */}
					<CreateProfileOne initialData={userData} categories={[]} />
				</div>
			</ScrollArea>
		</div>
	)
}

export default OnBoarding



