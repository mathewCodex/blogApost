"use client"
import * as z from "zod"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
// import { DialogTrigger, Dialog } from "@/components/ui/dialog"

import { isBase64Image } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { authSchema } from "@/lib/validations/auth.schema"
import { cappedAvatarFallback } from "@/lib/utils"
import { ChangeEvent, useState } from "react"
import { Textarea } from "@/components/ui/textarea"
// import GetUserData from "@/app/hooks/getuser-data"
import { useUploadThing } from "@/lib/uploadthing"
// import findByIdAndUpdate from "@/app/api/update-user/route"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import ClientOnly from "@/components/ClientOnly"

interface dataProps {
	user: {
		id: string
		name: string
		bio: string
		imageSrc: string
	}
	btnTitle: string
}

function AccountProfile({ user, btnTitle }: dataProps) {
	const pathname = usePathname()
	const router = useRouter()
	// const { user } = GetUserData(params.id)

	const { startUpload } = useUploadThing("media")
	const [files, setFiles] = useState<File[]>([])

	const form = useForm<z.infer<typeof authSchema>>({
		resolver: zodResolver(authSchema),
		defaultValues: {
			name: user?.name || "",
			bio: user?.bio || "",
			imageSrc: user?.imageSrc || " ",
		},
	})

	const handleImage = (
		e: ChangeEvent<HTMLInputElement>,
		fieldChange: (value: string) => void,
	) => {
		e.preventDefault()
		const fileReader = new FileReader()

		if (e.target.files && e.target.files.length > 0) {
			const file = e.target.files[0]

			setFiles(Array.from(e.target.files))

			if (!file.type.includes("image")) return

			fileReader.onload = async (event) => {
				const imageDataUrl = event.target?.result?.toString() || " "
				fieldChange(imageDataUrl)
			}
			fileReader.readAsDataURL(file)
		}
	}

	const onSubmit = async (values: z.infer<typeof authSchema>) => {
		console.log(values)
		const blob = values.imageSrc
		const hasImageChanged = isBase64Image(blob)

		if (hasImageChanged) {
			const imgRes = await startUpload(files)
			if (imgRes && imgRes[0].url) {
				values.imageSrc = imgRes[0].url
			}
		}

		// update user profile
		// await findByIdAndUpdate(
		// 	{
		// 		name: values.name,
		// 		profileImage: values.imageSrc,
		// 		bio: values.bio,
		// 	},
		// 	pathname,
		// )
		if (pathname === "/profiles/edit") {
			router.back()
		} else {
			router.push("/")
		}
	}
	if (!user) {
		return (
			<ClientOnly>
				<>
					Hello You : ) this page renders because thers no logged in user in the session
				</>
			</ClientOnly>
		)
	}
	return (
		<>
			{" "}
			<ClientOnly>
				{/* <Modal /> */}
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="flex flex-col justify-start gap-10"
					>
						<FormField
							name="imageSrc"
							control={form.control}
							render={({ field }) => (
								<FormItem className="flex items-center gap-4">
									<FormLabel className="account-form_image-label">
										{field.value ? (
											<>
												<Avatar className="h-8 w-8 rounded-full">
													<AvatarImage
														src={user.imageSrc ?? ""}
														alt={user.name ?? "user name"}
													/>
													<AvatarFallback className="font-bold">
														{user.name ? cappedAvatarFallback(user.name) : "SM"}
													</AvatarFallback>
												</Avatar>
											</>
										) : (
											<>
												<Avatar className="h-8 w-8 rounded-full">
													<AvatarImage src={""} alt={"user name"} />
													<AvatarFallback className="font-bold">
														{user.name ? cappedAvatarFallback(user.name) : "SM"}
													</AvatarFallback>
												</Avatar>
											</>
										)}
									</FormLabel>
									<FormControl className="text-base-semibold text-grey-200 flex-1">
										<Input
											type="file"
											accept="image/*"
											placeholder="upload a photo"
											{...field}
											className="account-form_image-input"
											onChange={(e) => handleImage(e, field.onChange)}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						{/* Form field for the user name */}
						<FormField
							name="name"
							control={form.control}
							render={({ field }) => (
								<FormItem className="flex w-full flex-col  gap-3">
									<FormLabel className="text-base-semibold text-light-2 w-full">
										Name
									</FormLabel>
									<FormControl>
										<Input
											type="text"
											{...field}
											className="account-form_input no-focus"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						{/* field for bio */}
						<FormField
							name="name"
							control={form.control}
							render={({ field }) => (
								<FormItem className="flex w-full flex-col gap-3">
									<FormLabel className="text-base-semibold text-light-2">Bio</FormLabel>
									<FormControl>
										<Textarea
											rows={10}
											{...field}
											className="account-form_input no-focus"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit" className="bg-primary-500">
							{btnTitle}
						</Button>
					</form>
				</Form>
			</ClientOnly>
		</>
	)
}

export default AccountProfile
