import Link from "next/link"
import Image from "next/image"
import { Button } from "../ui/button"

type PropsType = {
	name: string
	title?: string
	picture: string
}

export function Contributor(props: PropsType) {
	console.log(props)
	return (
		<div className="w-42 flex flex-col items-center gap-2 rounded-md border p-1 leading-none">
			<Image
				width={70}
				height={70}
				src={""}
				alt="contributor"
				className="overflow-hidden rounded-full bg-gray-50/50 object-cover object-center"
			/>
			<Link href="#" className="line-clamp-1 w-full text-center hover:underline">
				Name of contributor
			</Link>
			<p className="text-sm">sub title</p>
			<Button size={"sm"} variant={"secondary"}>
				Follow
			</Button>
		</div>
	)
}
