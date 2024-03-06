"use client";
// import { OurFileRouter } from "@/app/api/uploadthing/core";
// import { UploadDropzone } from "@uploadthing/react";
import { Loader2, Trash } from "lucide-react";
import Image from "next/image";
import { UploadFileResponse } from "uploadthing/client"
import { IMG_MAX_LIMIT } from "./forms/kyc-form"
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { UploadButton } from "@/lib/uploadthing"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface ImageUploadProps {
	onChange?: any
	onRemove: (value: string) => void
	value: string
}

export default function FileUpload({ onChange, onRemove, value }: ImageUploadProps) {
	const { toast } = useToast()
	const router = useRouter()
	const [image, setImage] = useState<string | undefined>("")
	const [imageIsDel, setImageIsDel] = useState(false)
	//   const onDeleteFile = (key: string) => {
	//     const files = value;
	//     let filteredFiles = files.filter((item) => item.key !== key);
	//     onRemove(filteredFiles);
	//   };
	const onUpdateFile = (newFiles: UploadFileResponse[]) => {
		onChange([...value, ...newFiles])
	}
	const handleImageDelete = (image: string) => {
		setImageIsDel(true)
		const imageKey = image?.substring(image?.lastIndexOf("/") + 1)
		const files = value
		const filteredFiles = files.filter((item) => item.key !== image)
		onRemove(filteredFiles)
		// console.log(filteredFiles)
		axios
			.post("/api/uploadthing/delete", { imageKey })
			.then((res) => {
				if (res.data.success) {
					setImage(" ")
					toast({
						variant: "success",
						description: "Image removed",
					})
					router.refresh()
				}
			})
			.catch(() => {
				toast({
					variant: "destructive",
					description: "something went wrong",
				})
			})
			.finally(() => {
				setImageIsDel(false)
			})
	}
	return (
		<>
			<div className="mb-4 flex items-center gap-4">
				{!!value.length && (
					<div className="relative h-[200px] w-[200px] overflow-hidden rounded-md">
						<div className="absolute right-2 top-2 z-10">
							<Button
								type="button"
								onClick={() => handleImageDelete(image)}
								variant="destructive"
								size="sm"
							>
								{imageIsDel ? <Loader2 /> : <Trash className="h-4 w-4" />}
							</Button>
						</div>
						<div>
							<Image
								fill
								className="object-cover"
								alt="Image"
								src={item.fileUrl || "" || image}
							/>
						</div>
					</div>
				)}
			</div>
			{value.length < IMG_MAX_LIMIT && (
				<div className="max-w[4000px] mt-4 flex flex-col items-center rounded border-2 border-dashed border-primary/50 p-12">
					<UploadButton
						endpoint="imageUploader"
						onClientUploadComplete={(res) => {
							// Do something with the response
							console.log("Files: ", res)
							setImage(res[0].url)
							toast({
								variant: "success",
								title: "Image uploaded Succefully",
								description: "your request will be approved by the admin",
							})
							onUpdateFile(res)
						}}
						onUploadError={(error: Error) => {
							// Do something with the error.
							alert(`ERROR! ${error.message}`)
						}}
					/>
				</div>
			)}
		</>

		//
	)
}