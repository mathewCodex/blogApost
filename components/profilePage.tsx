"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
// import { useState, useRef } from "react"
// import { z } from "zod"
import { Icons } from "@/components/icons"

// interface UserData {
// 	name: string
// 	email: string
// 	bio: string
// 	image: string
// 	twitter: string
// 	linkedin: string
// }

// const schema = z.object({
// 	avatar: z.optional(z.string()),
// 	name: z.string().trim().min(3),
// 	linkedin: z
// 		.string({
// 			message:
// 				"Invalid input: must be in the format 'https://www.linkedin.com/in/your-profile'.",
// 		})
// 		.trim()
// 		.refine((value) =>
// 			/^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/.test(value),
// 		),
// 	twitter: z
// 		.string({
// 			message:
// 				"Invalid input: must be in the format 'https://twitter.com/your_username'.",
// 		})
// 		.trim()
// 		.refine((value) =>
// 			/^(https?:\/\/)?(www\.)?twitter\.com\/([a-zA-Z0-9_]+)\/?$/.test(value),
// 		),
// 	role: z.string().trim().nonempty({ message: "Select a role" }),
// 	bio: z.string().trim().min(3).max(270),
// })

export default function ProfilePage() {
	// const [selectedFile, setSelectedFile] = useState(null)

	// const [userData, setUserData] = useState<UserData>({
	// 	name: "",
	// 	email: "",
	// 	bio: "",
	// 	image: "",
	// 	twitter: "",
	// 	linkedin: "",
	// 	avatar: {},
	// })

	// const [enabledEdit, setEnabledEdit] = useState({
	// 	name: false,
	// 	email: false,
	// 	bio: false,
	// 	image: false,
	// 	twitter: false,
	// 	linkedin: false,
	// })

	// const [errors, setErrors] = useState({})
	// const [enableSaveBtn, setEnableSaveBtn] = useState(false)

	// refs
	// const nameRef = useRef(null)
	// const emailRef = useRef(null)
	// const bioRef = useRef(null)
	// const imageRef = useRef(null)
	// const twitterRef = useRef(null)
	// const linkedinRef = useRef(null)

	// const handleFormChange = (e) => {
	// 	setEnableSaveBtn(true)
	// 	const { name, value } = e.target
	// 	setUserData((prevData) => ({ [name]: value }))
	// }

	// const handleEditBtn = (name) => {
	// 	setEnabledEdit((prev) => ({ ...prev, [name]: true }))

	// 	const ref = {
	// 		name: nameRef,
	// 		email: emailRef,
	// 		bio: bioRef,
	// 		image: imageRef,
	// 		twitter: twitterRef,
	// 		linkedin: linkedinRef,
	// 	}[name]

	// 	ref.current.focus()
	// }

	// const getImageData = (e) => {
	// 	const file = e.target.files[0]
	// 	if (file) {
	// 		if (file.type.startsWith("image/")) {
	// 			// setSelectedFile(file)
	// 			setFormData((prev) => ({ ...prev, avatar: file }))

	// 			const reader = new FileReader()
	// 			reader.onload = (f) => {
	// 				setSelectedFile((prev) => f.target.result)
	// 			}

	// 			reader.readAsDataURL(file)
	// 		}
	// 	} else {
	// 		setErrors({ ...errors, avatar: "Please select a valid image file" })
	// 	}
	// }

	// const handleFormSubmit = (e) => {
	// 	e.preventDefault()

	// 	const validationResult = schema.safeParse(userData)
	// 	if (validationResult.success) {
	// 		// api call
	// 	} else {
	// 		const err = validationResult.error.issues.map((el) => ({
	// 			[el.path[0]]: el.message,
	// 		}))
	// 		const errorsObject = err.reduce((acc, curr) => ({ ...acc, ...curr }), {})

	// 		setErrors((prevErrors) => errorsObject)
	// 	}
	// }

	return (
		<main className="w-full">
			<div className="flex flex-col justify-center gap-1 ">
				<form>
					<div className="container flex items-center justify-between gap-4 border p-4">
						<Avatar className="shawdow-md mt-6 h-32 w-32 border-4 border-white">
							<AvatarImage src="" alt="@shadcn" className="relative" />
							<AvatarFallback>
								NN
								{/* {userData[0]} */}
							</AvatarFallback>
						</Avatar>
						<Input
							className="mt-4"
							id="avatar"
							type="file"
							// onChange={(e) => getImageData(e)}
						/>
					</div>
					<div className="mt-12 flex min-w-full flex-col gap-4 p-6 sm:mx-auto">
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="name">Name</Label>
							<div className="flex flex-row">
								<Input
									className="flex-4"
									id="name"
									placeholder="John Doe"
									name="name"
									// value={userData.name}
									// onChange={handleFormChange}
									// readOnly={!enabledEdit.name}
									// ref={nameRef}
								/>
								<Button
									className="flex-1"
									// onClick={() => handleEditBtn("name")}
									// disabled={enabledEdit.name}
								>
									<Icons.edit />
								</Button>
							</div>

							{/* {errors?.name && enabledEdit.name && (
								<small className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
									{errors.name}
								</small>
							)} */}
						</div>

						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="email">Email</Label>
							<div className="flex flex-row">
								<Input
									className="flex-4"
									id="email"
									placeholder="JohnDoe@mail.com"
									name="email"
									// value={userData.email}
									// onChange={handleFormChange}
									// readOnly={!enabledEdit.email}
									// ref={emailRef}
								/>
								<Button
									className="flex-1"
									// onClick={() => handleEditBtn("email")}
									// disabled={enabledEdit.email}
								>
									<Icons.edit />
								</Button>
							</div>

							{/* {errors?.email && enabledEdit.email && (
								<small className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
									{errors.email}
								</small>
							)} */}
						</div>

						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="linkedIn">Socails: </Label>
						</div>
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="linkedin">LinkedIn</Label>
							<div className="flex flex-row">
								<Input
									id="linkedin"
									placeholder="https://www.linkedin.com/in/your-profile"
									name="linkedin"
									// value={userData.linkedin}
									// onChange={handleFormChange}
									// readOnly={!enabledEdit.linkedin}
									// ref={linkedinRef}
								/>
								<Button
									className="flex-1"
									// onClick={() => handleEditBtn("linkedin")}
									// disabled={enabledEdit.linkedin}
								>
									<Icons.edit />
								</Button>
							</div>

							{/* {errors?.linkedin && enabledEdit.linkedin && (
								<small className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
									{errors.linkedin}
								</small>
							)} */}
						</div>
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="twitter">Twitter</Label>
							<div className="flex flex-row">
								<Input
									id="twitter"
									placeholder="https://twitter.com/your_username"
									name="twitter"
									// value={userData.twitter}
									// onChange={handleFormChange}
									// readOnly={!enabledEdit.twitter}
									// ref={twitterRef}
								/>
								<Button
									className="flex-1"
									// onClick={() => handleEditBtn("twitter")}
									// disabled={enabledEdit.twitter}
								>
									<Icons.edit />
								</Button>
							</div>

							{/* {errors?.twitter && enabledEdit.twitter && (
								<small className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
									{errors.twitter}
								</small>
							)} */}
						</div>

						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="bio">Bio</Label>
							<div className="flex flex-col items-end">
								<Textarea
									id="bio"
									placeholder="Enter your bio here..."
									name="bio"
									// value={userData.bio}
									// onChange={handleFormChange}
									// readOnly={!enabledEdit.bio}
									// ref={bioRef}
								/>
								<Button
									className="mt-2"
									// onClick={() => handleEditBtn("bio")}
									// disabled={enabledEdit.bio}
								>
									<Icons.edit />
								</Button>
							</div>

							{/* {errors?.bio && enabledEdit.bio && (
								<small className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
									{errors.bio}
								</small>
							)} */}
						</div>
						<div className="mt-4 flex justify-center">
							<Button className="w-full md:w-2/3">Save</Button>
						</div>
					</div>
				</form>
			</div>
		</main>
	)
}
