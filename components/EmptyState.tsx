"use client"
import { useRouter } from "next/navigation"
import Heading from "./Heading"
import Button from "./Button"

interface EmptyState {
	title?: string
	subtitle?: string
	showReset?: boolean
}

const EmptyState: React.FC<EmptyState> = ({
	title = "No available Post",
	subtitle = "Please signup or signin to post a content",
	showReset,
}) => {
	const router = useRouter()

	return (
		<div className="flex h-[60vh] flex-col items-center justify-center gap-2">
			<Heading title={title} subtitle={subtitle} center />
			<div className="mt-4 w-48">
				{showReset && (
					<Button
						outline
						label="Signup to get Paid"
						onClick={() => router.push("/api/auth/signin")}
					/>
				)}
			</div>
		</div>
	)
}

export default EmptyState
