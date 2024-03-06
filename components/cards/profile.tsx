import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Separator } from "../ui/separator"
import { Button } from "../ui/button"
import Image from "next/image"

export default function Profile() {
	return (
		<HoverCard>
			<div className="flex items-center gap-2">
				{/* <Image
					src="/keldeo.png"
					alt="name"
					width={30}
					height={30}
					className="overflow-hidden rounded-full"
				/> */}
				<div className="flex items-center gap-1 text-sm font-medium">
					<HoverCardTrigger asChild>
						<Link href="/" className="decoration-primary hover:underline">
							Suileman Umar
						</Link>
					</HoverCardTrigger>
					<HoverCardContent className="w-72">
						<div className="flex flex-col justify-between space-y-3">
							<div className="flex items-center gap-3">
								<Avatar>
									<AvatarImage src="https://github.com/vercel.png" />
									<AvatarFallback>VC</AvatarFallback>
								</Avatar>
								<h4 className="text-sm font-semibold">Suileman Umar</h4>
							</div>
							<div className="space-y-1">
								<p className="text-sm">Product and DevRel lead for Angular at Google.</p>
								<Separator />
								<div className="flex items-center justify-between pt-2">
									<span className="text-xs text-muted-foreground">599k followers</span>
									<Button variant="secondary" size="sm">
										follow
									</Button>
								</div>
							</div>
						</div>
					</HoverCardContent>
					<span className="font-normal opacity-60">in</span>
					<Link
						href={`/categories?category=politics`}
						className="decoration-primary hover:underline"
					>
						Politics
					</Link>
				</div>
			</div>
		</HoverCard>
	)
}
