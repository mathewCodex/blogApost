import React from "react"
// import { Card, CardHeader } from "@/components/ui/card"
// import ClientOnly from "@/components/ClientOnly"
import getCurrentUser from "@/lib/session"
import BreadCrumb from "@/components/breadcrumb"
import { ScrollArea } from "@/components/ui/scroll-area"
// import AuthForm from "@/app/auth/auth-form"
// import { redirect } from "next/navigation"
import { CreateProfileOne } from "@/components/forms/user-profile-stepper/create-profile"

const OnBoarding = async () => {
	const user = await getCurrentUser()
	// if (user?.onBoarded) redirect(`/profiles/?${user.id}`)
const breadcrumbItems = [{ title: "Profile", link: `/profiles/onBoarding/${user?.name}`}]
	const userData = {
		id: user?.id as string,
		name: (user?.name as string) ?? "",
		email: (user?.email as string) ?? "",
		bio: user ? (user?.bio as string) : "",
		imageSrc: user ? (user?.image as string) : " ",
	}

	// if (!user) {
	// 	return (
	// 		<ClientOnly>
	// 			<>Hello You you got to be a user : )</>
	// 		</ClientOnly>
	// 	)
	// }

	// const content = (
	// 	<CardHeader className="border-b border-solid border-gray-100">
	// 		<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
	// 			Welcome lets help you get started
	// 		</h2>
	// 	</CardHeader>
	// )
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



