import { GetSelectedTopics } from "@/app/actions/Topics";
import { getUniqueTopics } from "@/app/actions/getStories";
import Navbar from "@/components/Navbar";
import StoryList from "@/components/StoryList";
// import Image from "next/image";
// import { UserButton } from "@clerk/nextjs"
export default async function Home() {
  const allTopics = await getUniqueTopics()
  const UserTags = await GetSelectedTopics()
  return (
		<main className="max-w-[1400px] mx-auto ">
			<Navbar />
			<section className="relative h-[620px] bg-[url(/herobg1.png)] bg-cover bg-center bg-no-repeat">
				<div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

				<div className="relative mx-auto mt-4  max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
					<div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
						<h1 className="text-3xl font-extrabold sm:text-5xl">
							Post your craft
							<strong className="block font-extrabold text-blue-700">
								{" "}
								and get Paid.{" "}
							</strong>
						</h1>

						<p className="mt-4 max-w-lg sm:text-xl/relaxed">
							Discover stories, thinking, and expertise from writers on any
							topic. Browse through our vast collection of articles from various
							categories.
						</p>

						<div className="mt-8 flex flex-wrap gap-4 text-center">
							<a
								href="/account/signin"
								className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
							>
								Get Started
								
							</a>
   
							<a
								href="#"
								className="text-rose-blue block w-full rounded bg-accent px-12 py-3 text-sm font-medium shadow hover:text-rose-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
							>
								Learn More
							</a>
						</div>
					</div>
				</div>
			</section>
			<div className="max-w-[1100px] mx-auto px-5 mt-12">
				<StoryList allTopics={allTopics.response} UserTags={UserTags.Tags} />
			</div>
		</main>
	);
}
