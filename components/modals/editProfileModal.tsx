// "use client"

// // import { Button } from "@/components/ui/button"
// // import {
// // 	Dialog,
// // 	DialogContent,
// // 	DialogDescription,
// // 	// DialogFooter,
// // 	DialogHeader,
// // 	DialogTitle,
// // 	DialogTrigger,
// // } from "@/components/ui/dialog"
// // import { Input } from "@/components/ui/input"
// // import { Label } from "@/components/ui/label"
// // import ProfilePage from "@/components/profilePage"
// // import { Icons } from "@/components/icons"
// import UseEditModal from "@/app/hooks/edit-modal"
// import useUser from "@/app/hooks/use-user"
// import axios from "axios"
// import { useCallback, useEffect, useState } from "react"
// import Modal from "./modal"
// import { Input } from "../ui/input"
// import ImageUpload from "../Input/image-uploads"
// // import findByIdAndUpdate from "@/app/api/update-user/route"
// // import { usePathname } from "next/navigation"
// export function EditProfileModal() {
// 	const editModal = UseEditModal()

// 	const [profileImage, setProfileImage] = useState([])
// 	const [name, setName] = useState("")
// 	const [bio, setBio] = useState("")
// 	// const pathname = usePathname()
// 	useEffect(() => {
// 		setProfileImage(currentuser?.imageSrc)
// 		setName(currentuser?.name)
// 		setBio(currentuser?.bio)
// 	}, [currentuser])

// 	const [isLoading, setIsLoading] = useState(false)
// 	const onSubmit = useCallback(async () => {
// 		try {
// 			setIsLoading(true)
// 			await axios.patch("/api/edituser", {
// 				name,
// 				profileImage,
// 				bio,
// 			})

// 			// const data = { name, bio, profileImage }
// 			// findByIdAndUpdate(data, pathname)
// 			mutateUser()
// 			editModal.onClose()
// 		} catch (err) {
// 			new Error("Something went wrong")
// 		}
// 	}, [bio, profileImage, name, mutateUser, editModal])

// 	const bodyContent = (
// 		<div className="flex flex-col gap-4">
// 			<ImageUpload
// 				value={profileImage}
// 				disabled={isLoading}
// 				onChange={(image) => setProfileImage(image)}
// 				label="Upload Image"
// 			/>
// 			<Input
// 				placeholder="Name"
// 				onChange={(e) => setName(e.target.value)}
// 				value={name}
// 				disabled={isLoading}
// 			/>
// 			<Input
// 				placeholder="Bio"
// 				onChange={(e) => setBio(e.target.value)}
// 				value={bio}
// 				disabled={isLoading}
// 			/>
// 		</div>
// 	)
// 	return (
// 		<Modal
// 			disabled={isLoading}
// 			isOpen={editModal.isOpen}
// 			title="Edit profile"
// 			actionLabel="Save"
// 			onClose={editModal.onClose}
// 			onSubmit={onSubmit}
// 			body={bodyContent}
// 		/>
// 	)
// }
