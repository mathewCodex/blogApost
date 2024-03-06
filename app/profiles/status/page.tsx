import React from "react"
// import ClientOnly from "@/components/ClientOnly"
import getCurrentUser from "@/lib/session"
// import { redirect } from "next/navigation"

import BreadCrumb from "@/components/breadcrumb"
import { KycForm } from "@/components/forms/kyc-form"
// import SubmitForm from "@/components/Input/form-kyc"
const KYCForm = async () => {
	const user = await getCurrentUser()
	const userData = {
		id: user?.id as string,
		name: (user?.name as string) ?? "",
		email: (user?.email as string) ?? "",
		bio: user ? (user?.bio as string) : "",
		imageSrc: user ? (user?.image as string) : " ",
	}
	// const content = (
	// 	<CardHeader className="border-b border-solid border-gray-100">
	// 		<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
	// 			Welcome lets help you get started
	// 		</h2>
	// 	</CardHeader>
	// )
	// return (
	// 	<div>
	// 		<div className="flex min-h-screen w-screen items-center justify-center ">
	// 			<Card className="[lg:w-70 sm:min-h-1/2] h-full min-h-screen border border-solid border-gray-100 md:h-screen">
	// 				<CardHeader className="border-b border-solid border-gray-100">
	// 					{content}
	// 					{/* <SubmitForm currentUser={user} btnTitle={"Submit"} /> */}
	// 					<CreateProfileOne categories={[]} initialData={null} />
	// 				</CardHeader>
	// 			</Card>
	// 		</div>
	// 	</div>
	// )
	const breadcrumbItems = [
		{ title: "Kyc", link: "/dashboard/kyc" },
		{ title: "Create", link: "/dashboard/kyc/create" },
	]
	return (
		<div className="flex-1 space-y-4 p-8">
			<BreadCrumb items={breadcrumbItems} />
			<KycForm
				categories={[
					{ _id: "Sc", name: "Science" },
					{ _id: "MT", name: "Motivation" },
					{ _id: "A&C", name: "Art & Culture" },
					{ _id: "RS", name: "Research" },
					{ _id: "CS", name: "Case Studies" },
					{ _id: "PT", name: "Politics" },
					{ _id: "VD", name: "Visual Design" },
					{ _id: "PD", name: "Product Design" },
					{ _id: "EDU", name: "Education" },
					{ _id: "NG", name: "Nigeria" },
					{ _id: "GP", name: "Gossip" },
				]}
				initialData={userData}
				key={null}
			/>
		</div>
	)
}

export default KYCForm
