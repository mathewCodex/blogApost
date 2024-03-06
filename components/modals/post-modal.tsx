"use client"
import useCreateModal from "@/app/hooks/create-modal"
import Modal from "./modal"
import { useMemo, useState } from "react"
import Heading from "../Heading"

import CategoryInput from "@/components/Input/categories-Input"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"

import Input from "@/components/Input/input"
import ImageUpload from "@/components/Input/image-uploads"
import axios from "axios"

import { useRouter } from "next/navigation"

interface Category {
	name: string
	path: string
}

const CATS: Category[] = [
	{ name: "Science", path: "/" },
	{ name: "Motivation", path: "/" },
	{ name: "Art & Culture", path: "/" },
	{ name: "Research", path: "/" },
	{ name: "Case Studies", path: "/" },
	{ name: "Politics", path: "/" },
	{ name: "Visual Design", path: "/" },
	{ name: "Product Design", path: "/" },
	{ name: "Education", path: "/" },
	{ name: "Nigerian", path: "/" },
	{ name: "Gossip", path: "/" },
	// Repeat "Science" entries have been removed for leaner code
]

enum STEPS {
	CATEGORY = 0,
	POST = 1,
	IMAGES = 2
	
}

const PostModal = () => {
	const router = useRouter()
	const createModal = useCreateModal()

	const [isLoading, setIsLoading] = useState(false)
	const [step, setStep] = useState(STEPS.CATEGORY)

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
		reset,
	} = useForm<FieldValues>({
		defaultValues: {
			category: "",
			// location: null,
			title: "",
			imageSrc: "",
			description: "",
		},
	})

	// const location = watch("location")
	const category = watch("category")
	const imageSrc = watch("imageSrc")

	const setCustomValue = (id: string, value: string | number) => {
		setValue(id, value, {
			shouldDirty: true,
			shouldTouch: true,
			shouldValidate: true,
		})
	}

	const onBack = () => {
		setStep((value) => value - 1)
	}

	const onNext = () => {
		setStep((value) => value + 1)
	}

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		if (step !== STEPS.IMAGES) {
			return onNext()
		}

		setIsLoading(true)

		axios
			.post("/api/post-route", data)
			.then(() => {
				router.refresh()
				reset()
				setStep(STEPS.CATEGORY)
				createModal.onClose()
			})
			.catch((error) => {
				error
			})
			.finally(() => {
				setIsLoading(false)
			})
	}

	const actionLabel = useMemo(() => {
		if (step === STEPS.IMAGES) {
			return "Create"
		}

		return "Next"
	}, [step])

	const secondaryActionLabel = useMemo(() => {
		if (step === STEPS.CATEGORY) {
			return undefined
		}

		return "Back"
	}, [step])

	let bodyContent = (
		<div className="flex flex-col gap-8">
			<Heading
				title="Please select  category"
				subtitle="Pick a category"
				center={false}
			/>
			<div
				className="
          grid 
          max-h-[50vh] 
          grid-cols-1 
          gap-3
          overflow-y-auto
          md:grid-cols-2
        "
			>
				{CATS.map((cat) => (
					<div key={cat.name} className="col-span-1">
						<CategoryInput
							onClick={(category: string) => setCustomValue("category", category)}
							selected={category === cat.name}
							label={cat.name}
						/>
					</div>
				))}
			</div>
		</div>
	)

	if (step === STEPS.POST) {
		bodyContent = (
			<div className="flex flex-col gap-8">
				<Heading
					title="create post"
					subtitle="Short and sweet works best!"
					center={false}
				/>
				<Input
					id="title"
					label="Title"
					disabled={isLoading}
					register={register}
					errors={errors}
					required
				/>
				<hr />
				<Input
					id="description"
					label="Description"
					disabled={isLoading}
					register={register}
					errors={errors}
					required
				/>
			</div>
		)
	}

	if (step === STEPS.IMAGES) {
		bodyContent = (
			<div className="flex flex-col gap-8">
				<Heading
					title="Add a photo"
					subtitle="Show  what your  Post looks like!"
					center={false}
				/>
				<ImageUpload
					onChange={(value) => setCustomValue("imageSrc", value)}
					value={imageSrc}
				/>
			</div>
		)
	}

	return (
		<Modal
			disabled={isLoading}
			isOpen={createModal.isOpen}
			title="SMNK BLOG!"
			actionLabel={actionLabel}
			onSubmit={handleSubmit(onSubmit)}
			secondaryActionLabel={secondaryActionLabel}
			secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
			onClose={createModal.onClose}
			body={bodyContent}
		/>
	)
}

export default PostModal
