import * as React from "react"
import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"

import { Balancer } from "react-wrap-balancer"

// import { constant } from "~/app/recipes/[recipe_id]/constant"
// import { Icons } from "@/components/icons"
import { PostSummary } from "@/components/summarry"
// import { Section } from "@/components/section"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Separator } from "@/components/ui/separator"
import { sanitizeText } from "@/lib/utils"
import { PostBlog, User } from "@prisma/client"
import Link from "next/link"

export interface RecipeDetailPageProps {
	params: { recipe_id: string }
}
interface Props {
	posts: PostBlog
	currentUser: User
	// isComment: false
}
export async function generateMetadata({posts}: Props): Promise<Metadata> {
	try {
	
		if (posts === null) {
			return {
				title: constant.notFound.title,
				description: constant.notFound.description,
			}
		}

		return {
			title: posts.title,
			description: sanitizeText(posts.description),
			openGraph: {
				title: posts.title,
				description: sanitizeText(posts.description),
			},
		}
	} catch (error) {
		return {}
	}
}

const  DetailPage: React.FC<Props> = ({ posts, currentUser }) => {
	if (posts === null) return notFound()
   const user = currentUser
	return (
		<main className="container flex-1 pt-4">
			<article className="space-y-6">
				<div className="flex flex-col items-center">
					<Link href={`/profiles/user?${user?.id}`} className="relative h-11 w-11">
						<Image
							src={user?.image as string}
							alt="user_community_image"
							fill
							className="cursor-pointer rounded-full"
						/>
					</Link>

					<div className="Post-card_bar" />
				</div>
				<header className="space-y-3">
					<AspectRatio ratio={2 / 1}>
						<Image
							fill
							src={posts.imageSrc}
							alt={posts.title}
							className="rounded-lg border object-cover"
						/>
					</AspectRatio>
					<h1 className="text-2xl font-bold">
						<Balancer>{posts.title}</Balancer>
					</h1>
					<Separator className="my-3" />
					<PostSummary>{posts.description}</PostSummary>
					<div className="text-lg font-semibold">Post Detail</div>
					<div className="font-light text-neutral-500">{posts.category}</div>
				</header>

				{/* <Section
					icon={<Icons.Instruction />}
					title="Instructions"
					subtitle="Let's follow the instructions for cooking it"
				>
					<div
						dangerouslySetInnerHTML={{ __html: post.instructions }}
						className="text-sm sm:text-base [&>*]:ml-6 [&>*]:list-decimal [&_li]:mb-3"
					/>
				</Section> */}
			</article>
		</main>
	)
}
export default  DetailPage
//////////////////////


export const constant = {
  notFound: {
    title: "No post found!",
    description:
      "It looks like the post you are looking for could not be found",
  },
};
