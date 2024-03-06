import { Separator } from "./ui/separator"

export default function ContentTitle() {
	return (
		<div className="space-y-4">
			<Separator />
			<h2 className="line-clamp-2 text-left text-3xl font-bold">
				Headwave: Temperature of 40 expected this weekend
			</h2>
			<Separator />
		</div>
	)
}
