// "use client"
import Image from "next/image"

import { PostBlog, User } from "@prisma/client"
// import { SafeUser } from "@/app/types"
// import { useRouter } from "next/navigation"
// import Categories from "@/app/categories/page"
import ClientOnly from "@/components/ClientOnly"
import Link from "next/link"
import { AspectRatio } from "../ui/aspect-ratio"
import { cn } from "@/lib/utils"
interface postCardProps {
	data: PostBlog
	// userData: SafeUser
	postId?: string
	openInNewTab?: boolean
	currentUser: User | null //for sanitization and server errors
	onAction?: (id: string) => void
}
// const handleClick = () => {
// 	console.log("Ok change location")
// }
const PostCard: React.FC<postCardProps> = ({ data }) => {
	// const router = useRouter()
	// const keyPress = () => {
	// 	return
	// }
	const openInNewTab = false
	const formatDateTime = new Intl.DateTimeFormat(undefined, { dateStyle: "short" })
	return (
		<>
			<ClientOnly>
				<Link
					href={`/postdetail/${data.id}`}
					target={openInNewTab ? "_blank" : undefined}
					className={cn(
						"inline-block w-36 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
					)}
				>
					<article className="group relative h-auto w-full space-y-2 overflow-hidden rounded-lg border after:absolute after:inset-0 after:bg-gradient-to-t after:from-slate-900 after:to-transparent after:content-[''] hover:after:to-50%">
						<AspectRatio ratio={8 / 12}>
							<Image
								fill
								src={data.imageSrc}
								alt={data.title}
								className="object-cover transition-transform duration-300 group-hover:scale-110"
							/>
						</AspectRatio>
						<span className="sr-only">{data.title}</span>
						<span className="sr-only"></span>
						<header className="absolute bottom-0 z-10 p-3">
							<span>
								<time dateTime="2022-10-10" className="block text-xs text-white/90">
									{formatDateTime.format(data.createdAt)}
								</time>
							</span>
							<h2 title={data.title} className="line-clamp-2 text-xs text-white">
								{data.title}
							</h2>
							<h3 className="line-clamp-2 text-xs">{data.category}</h3>
						</header>
					</article>
				</Link>
			</ClientOnly>
		</>
	)
}
export default PostCard
