"use client"
import { useState } from "react"
import useSWR from "swr"
import { useSession } from "next-auth/react"

const fetcher = async (url: any) => {
	const res = await fetch(url)

	const data = await res.json()

	if (!res.ok) {
		const error = new Error(data.message)
		throw error
	}

	return data
}

// interface propsUser {
// 	id: number
// 	name: string
// 	kycApproved: boolean
// }
const PendingRequest = () => {
	const session = useSession()

	const [userId, setUserId] = useState("")

	const { data, mutate } = useSWR(
		`http://localhost:3000/api/getuser?params=${userId}`,
		fetcher,
	)

	const handleApproveKYC = async () => {
		await fetch(`/api/kyc?${userId}`, {
			method: "POST",
			body: JSON.stringify({ userId }),
		})
		mutate()
	}

	return (
		<>
			<div className="p-4">
				<input
					type="number"
					className="mr-2 border border-gray-300 p-2"
					placeholder="Enter User ID"
					value={userId}
					onChange={(e) => setUserId(e.target.value)}
				/>
				<button
					className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
					onClick={handleApproveKYC}
				>
					Approve KYC
				</button>
				{session && (
					<div className="mt-4">
						<p className="mb-2">Name: {data?.user?.name}</p>
						<p>KYC Approved: {data.user.kycApproved ? "Yes" : "No"}</p>
					</div>
				)}
			</div>
		</>
	)
}

export default PendingRequest
