// import { useDropzone } from "@uploadthing/react/hooks"
// import { useCallback, useState } from "react"
// import Image from "next/image"
"use client"

import { CldUploadWidget } from "next-cloudinary"
import Image from "next/image"
import { useCallback } from "react"
import { TbPhotoPlus } from "react-icons/tb"

declare global {
	const cloudinary: string
}

interface ImageUploadProps {
	onChange: (value: string) => void
	value: string
}
// interface CustomUploadResult {
// 	info: {
// 		secure_url: string

// 	}

// }
const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
	const handleUploads = useCallback(
		(result: any) => {
			onChange(result.info.secure_url)
		},
		[onChange],
	)

	const keyDowner = () => {
		console.log("no key")
	}

	return (
		<CldUploadWidget
			onUpload={handleUploads}
			uploadPreset="klmyjpuc" //my preset value from cloudinary
			options={{
				maxFiles: 1,
			}}
		>
			{({ open }) => {
				return (
					<div
						role="button"
						onKeyDown={keyDowner}
						tabIndex={0}
						onClick={() => open?.()}
						className=" relative flex cursor-pointer flex-col items-center justify-center gap-4 border-2 border-dashed border-neutral-300 bg-background p-20 text-neutral-600 transition  hover:opacity-70 "
					>
						<TbPhotoPlus size={50} />
						<div className="text-lg font-semibold"> Click to Upload</div>
						{value && (
							<div className="insert-0 absolute h-full w-full">
								<Image alt="Uploads" fill style={{ objectFit: "cover" }} src={value} />
							</div>
						)}
					</div>
				)
			}}
		</CldUploadWidget>
	)
}

export default ImageUpload

// interface ImageUploadProps {
// 	onChange: (base64: string) => void
// 	value?: string
// 	label: string
// 	disabled: boolean
// }

// const ImageUpload: React.FC<ImageUploadProps> = ({
// 	onChange,
// 	label,
// 	value,
// 	disabled,
// }) => {
// 	const [base64, setBase64] = useState(value)
// 	const handleChange = useCallback(
// 		(base64: string) => {
// 			onChange(base64)
// 		},
// 		[onChange],
// 	)

// 	// const handleDrop = useCallback(
// 	// 	(files: string) => {
// 	// 		const file = files[0]
// 	// 		const reader = new FileReader()

// 	// 		reader.onload = async (event) => {
// 	// 			const imageDataUrl = event.target?.result?.toString() || " "
// 	// 			handleChange(imageDataUrl)
// 	// 		}
// 	// 		reader.readAsDataURL(file)
// 	// 	},
// 	// 	[handleChange],
// 	// )

// 	const handleDrop = useCallback(
// 		(files: any) => {
// 			const file = files[0]

// 			const reader = new FileReader()

// 			reader.onload = async (event: any) => {
// 				const imageDataUrl = event.target.result
// 				setBase64(imageDataUrl)
// 				handleChange(imageDataUrl)
// 			}
// 			reader.readAsDataURL(file)
// 		},
// 		[handleChange],
// 	)
// 	const { getRootProps, getInputProps } = useDropzone({
// 		maxFiles: 1,
// 		onDrop: handleDrop,
// 		disabled,
// 		accept: {
// 			"image/jpeg": [],
// 			"image/png": [],
// 		},
// 	})
// 	return (
// 		<div
// 			{...getRootProps()}
// 			className="b-4 border-bottom w-full border-2 text-center text-white"
// 		>
// 			<input {...getInputProps()} />

// 			{base64 ? (
// 				<div className="flex items-center justify-center">
// 					<Image src={base64} height="100" width="100" alt="Uploaded image" />
// 				</div>
// 			) : (
// 				<p className="text-white">{label}</p>
// 			)}
// 		</div>
// 	)
// }
// export default ImageUpload
