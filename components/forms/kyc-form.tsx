"use client";
import * as z from "zod";
import { ChangeEvent, useState } from "react"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Loader2, Trash, XCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	// FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Separator } from "@/components/ui/separator"
import { Heading } from "@/components/ui/heading"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { useUploadThing } from "@/lib/uploadthing"
// import { Checkbox } from "@/components/ui/checkbox";
// import FileUpload from "@/components/FileUpload";
import { useToast } from "../ui/use-toast"
// import FileUpload from "../file-upload"
import axios from "axios"
// import { UploadButton } from "@/lib/uploadthing"
import { isBase64Image } from "@/lib/utils"
// const ImgSchema = z.object({
// 	fileName: z.string(),
// 	name: z.string(),
// 	fileSize: z.number(),
// 	size: z.number(),
// 	fileKey: z.string(),
// 	key: z.string(),
// 	fileUrl: z.string(),
// 	url: z.string(),
// })

export const IMG_MAX_LIMIT = 3
const formSchema = z.object({
	name: z.string().min(3, { message: " Name must be at least 1 characters" }),
	identityImg: z.string().url().min(1, { message: "Insert an image" }),
	// .array(ImgSchema)
	// .max(IMG_MAX_LIMIT, { message: "You can only add up to 1 images" })
	// .min(1, { message: "At least one image must be added." }),
	description: z
		.string()
		.min(3, { message: "description must be at least 3 characters" }),
	phone: z.coerce.number(),
	occupation: z.string().min(3, { message: "Name must be at least 3 characters" }),
	category: z.string().min(1, { message: "Please select a category" }),
})

type FormValues = z.infer<typeof formSchema>

interface ProductFormProps {
	initialData: any | null
	categories: any
}

export const KycForm: React.FC<ProductFormProps> = ({ initialData, categories }) => {
	// const params = useParams();
	const router = useRouter()
	const { toast } = useToast()
	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)
	const [files, setFiles] = useState<File[]>([])
	const { startUpload } = useUploadThing("media")
	const [image, setImage] = useState<string | undefined>("")
	console.log(image)
	const [imageIsDel, setImageIsDel] = useState(false)
	// const [imgLoading, setImgLoading] = useState<string | undefined>("")
	const title = initialData ? "Create Kyc" : "Kyc form"
	const description = initialData ? "Verify Kyc" : "Complete kyc"
	// const toastMessage = initialData ? "Kyc updated." : "Kyc created."
	const action = initialData ? "Save changes" : "Create"
	// alert(toastMessage)
	console.log(open)
	const defaultValues = {
		name: initialData.name || "",
		occupation: "",
		description: "",
		phone: 0,
		identityImg: "",
		category: "",
	}

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues,
	})
	const handleImage = async (
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
				const imageDataurl = event.target?.result?.toString() || " "
				fieldChange(imageDataurl)
			}
			fileReader.readAsDataURL(file)
		}
	}
	const onSubmit = async (data: FormValues) => {
		console.log(data)
		const blob = data.identityImg
		const hasImageChanged = isBase64Image(blob)
		if (hasImageChanged) {
			const imgRes = await startUpload(files)
			if (imgRes && imgRes[0].url) {
				data.identityImg = imgRes[0].url
			}
		}
		try {
			if (initialData) {
				await axios.post(`/api/kyc`, {
					name: data.name,
					occupation: data.occupation,
					description: data.description,
					phone: data.phone,
					identityImg: data.identityImg,
					category: data.category
				})
				router.refresh()
				router.push(`/profiles/status`)
				toast({
					variant: "success",
					title: "Kyc updated",
					description: "You have edited your data ",
				})
			} else {
				await axios.post(`/api/kyc`, data)
				router.refresh()
				router.push(`/profiles/status`)
				toast({
					variant: "success",
					title: "Kyc Completed",
					description: "You have completed your kyc Form reg ",
				})
			}
		} catch (error: any) {
			toast({
				variant: "destructive",
				title: "Uh oh! Something went wrong.",
				description: "There was a problem with your request.",
			})
		} finally {
			setLoading(false)
		}
	}

	// const onDelete = async () => {
	//   try {
	//     setLoading(true);
	//     //   await axios.delete(`/api/${params.storeId}/products/${params.productId}`);
	//     router.refresh();
	//     router.push(`/${params.storeId}/products`);
	//   } catch (error: any) {
	//   } finally {
	//     setLoading(false);
	//     setOpen(false);
	//   }
	// };

	// const triggerImgUrlValidation = () => form.trigger("imgUrl");
	const handleImageDelete = (image: string) => {
		setImageIsDel(true)
		const imageKey = image.substring(image.lastIndexOf("/") + 1)
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
			{/* <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      /> */}
			<div className="flex items-center justify-between">
				<Heading title={title} description={description} />
				{initialData && (
					<Button
						disabled={loading}
						variant="destructive"
						size="sm"
						onClick={() => setOpen(true)}
					>
						<Trash className="h-4 w-4" />
					</Button>
				)}
			</div>
			<Separator />
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
					<FormField
						control={form.control}
						name="identityImg"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Insert an Identity *</FormLabel>

								<FormControl>
									{field.value ? (
										<div className="relative mt-4 max-h-[4000px] min-h-[200px] min-w-[200px] max-w-[4000px]">
											<Image
												fill
												src={field.value}
												alt="user identity image"
												className="object-contain "
												width={200}
												height={200}
											/>
											<Button
												type="button"
												size="icon"
												variant="ghost"
												className="absolute right-[-12px] top-0 "
												onClick={() => handleImageDelete(field.value)}
											>
												{imageIsDel ? <Loader2 /> : <XCircle />}
											</Button>
										</div>
									) : (
										<div className="max-w[4000px] mt-4 flex flex-col items-center rounded border-2 border-dashed border-primary/50 p-12">
											<Input
												type="file"
												accept="image/*"
												placeholder="upload a photo"
												className="account-form_image-input"
												onChange={(e) => handleImage(e, field.onChange)}
											/>
										</div>
									)}
									{/* {image ? (
										<>
											<div className="relative mt-4 max-h-[4000px] min-h-[200px] min-w-[200px] max-w-[4000px]">
												<Image
													fill
													src={image}
													alt="user identity image"
													className="object-contain "
													width={200}
													height={200}
												/>
												<Button
													type="button"
													size="icon"
													variant="ghost"
													className="absolute right-[-12px] top-0 "
													onClick={() => handleImageDelete(image)}
												>
													{imageIsDel ? <Loader2 /> : <XCircle />}
												</Button>
											</div>
										</>
									) : (
										<>
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
													}}
													onUploadError={(error: Error) => {
														// Do something with the error.
														alert(`ERROR! ${error.message}`)
													}}
												/>
											</div>
										</>
									)} */}
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="gap-8 md:grid md:grid-cols-3">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input disabled={loading} placeholder="User name" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="occupation"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Occupation</FormLabel>
									<FormControl>
										<Input
											disabled={loading}
											placeholder="Please tell us your occupatoin"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Phone </FormLabel>
									<FormControl>
										<Input type="number" disabled={loading} {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="category"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Category</FormLabel>
									<Select
										disabled={loading}
										onValueChange={field.onChange}
										value={field.value}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue
													defaultValue={field.value}
													placeholder="Select a category"
												/>
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{categories.map((category) => (
												<SelectItem key={category._id} value={category._id}>
													{category.name}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<Button disabled={loading} className="ml-auto" type="submit">
						{action}
					</Button>
				</form>
			</Form>
		</>
	)
}


