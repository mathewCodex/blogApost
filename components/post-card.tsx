// import { useState } from "react"

// import Link from "next/link"
import Image from "next/image"

// import {articles}  from "../lib/data"
// interface PostProps {
// 	description: string
// 	title: string
// 	image: string
// }
/**
 *  @PostCard : the dynamic layout commented out because i am still working on th UI
 *  @POstCardProps : @data & @search we use to import data from an api
 */




// export function InlinePostCard() {
// 	return (
// 		<Link href="/" className="flex items-start gap-2 rounded-lg hover:bg-primary/10">
// 			<div className="relative aspect-video w-full max-w-[160px] overflow-hidden rounded-lg">
// 				<Image
// 					src="/dump/bad-road.jpg"
// 					alt="alt content"
// 					fill
// 					className="object-cover object-center"
// 				/>
// 			</div>
// 			<div className="flex flex-1 flex-col gap-1">
// 				<p className="text-sm">Published: date goes here</p>
// 				<h3 className="line-clamp-3 text-sm font-bold">
// 					A Total Ban On The Use Of Ethnic Slurs On Nairaland - Politics - Nairaland
// 				</h3>
// 			</div>
// 		</Link>
// 	)
// }

// export function PostShowcase() {
// 	return (
// 		<div className="space-y-4">
// 			<h2 className="text-3xl font-bold">Featured Story</h2>
// 			<Image
// 				src="/dump/flag.jpg"
// 				alt="news"
// 				width={960}
// 				height={640}
// 				className="aspect-video max-h-[400px] rounded-lg object-cover object-center"
// 			/>
// 			<h2 className="line-clamp-2 text-3xl font-bold">
// 				Bayelsa Polls: Protest In Front Of INEC Office Over Alleged Doctored Results
// 			</h2>
// 			<p className="line-clamp-3 ">
// 				Top Bayelsa based civil society operatives, women groups, youth groups, state and
// 				National Assembly members and other concerned citizens gathered at the office of
// 				INEC to protest alleged move by the top leadership of INEC to distort the votes in
// 				the Saturday election.
// 			</p>
// 			<div className="flex items-center gap-4">auth</div>
// 		</div>
// 	)
// }


// /////======================== POST CARD UI ===============///////////




export function PostCard() {
	return (
		<>
			<div className="flex items-center justify-between text-xs opacity-60">
				<article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
					<Image
						alt="Office"
						src="/dump/bad-road.jpg"
						className="absolute inset-0 h-full w-full object-cover"
						width={250}
						height={150}
					/>

					<div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
						<div className="p-4 sm:p-6">
							<time dateTime="2022-10-10" className="block text-xs text-white/90">
								10th Oct 2024
							</time>

							<a href="#">
								<h3 className="mt-0.5 text-lg text-white">
									How to position your furniture for positivity
								</h3>
							</a>

							<p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
								dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
								sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
								voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
								Molestias explicabo corporis voluptatem?
							</p>
						</div>
					</div>
				</article>
			</div>
		</>
	)
}
