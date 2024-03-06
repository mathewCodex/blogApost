import Profile from "./profile"
// import Link from "next/link"
import Image from "next/image"
export default function Trending() {
	return (
		<div className="flex flex-col space-y-2">
			<Profile />
			<a
				href="#"
				className="relative block overflow-hidden rounded-md border border p-4 sm:p-6 lg:p-8"
			>
				<span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

				<div className="sm:flex sm:justify-between sm:gap-4">
					<div>
						<h3 className="text-lg font-bold  sm:text-xl">
							How to position your furniture for positivity
						</h3>

						<p className="mt-1 text-xs font-medium text-gray-400">By John Doe</p>
					</div>

					<div className="hidden sm:block sm:shrink-0">
						<Image
							alt="Office"
							src="/dump/bad-road.jpg"
							className="h-16 w-16 rounded-lg object-cover shadow-sm"
							width={200}
							height={170}
						/>
					</div>
				</div>

				<div className="mt-4">
					<p className="max-w-[40ch] text-sm text-gray-400">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
						provident a, ipsa maiores deleniti consectetur nobis et eaque.
					</p>
				</div>

				<dl className="mt-6 flex gap-4 sm:gap-6">
					<div className="flex flex-col-reverse">
						<dt className="text-sm font-medium text-gray-400">Published</dt>
						<dd className="text-xs text-gray-500">31st June, 2024</dd>
					</div>

					<div className="flex flex-col-reverse">
						<dt className="text-sm font-medium text-gray-400">Reading time</dt>
						<dd className="text-xs text-gray-500">3 minute</dd>
					</div>
				</dl>
			</a>
		</div>
	)
}
