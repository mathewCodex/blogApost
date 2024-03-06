import { TfiWrite } from "react-icons/tfi"
import { AiFillFormatPainter } from "react-icons/ai"
import { LuChefHat } from "react-icons/lu"
import { TbNeedleThread } from "react-icons/tb"
import { IoCameraOutline } from "react-icons/io5"
import { GoLaw } from "react-icons/go"

///Section to advertize the service smnk renders and who can basically benefit from this blog page///

const advert = () => {
	return (
		<div className="flex   content-center items-center justify-center   pt-4">
			<div className="max-w-screen-xl content-center justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
				<div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
					<div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
						<h2 className="text-3xl font-bold sm:text-4xl">
							Find your career path with SMNK
						</h2>

						<p className="mt-4 text-gray-600">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero aliquid
							sint distinctio iure ipsum cupiditate? Quis, odit assumenda? Deleniti quasi
							inventore, libero reiciendis minima aliquid tempora. Obcaecati, autem.
						</p>

						<a
							href="#"
							className="mt-8 inline-block rounded bg-blue-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
						>
							Get Started Today
						</a>
					</div>

					<div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
						<a
							className="hover:ring-blue-250 block rounded-xl  border p-4  shadow-sm hover:ring-1 focus:outline-none focus:ring"
							href="/accountant"
						>
							<span className="inline-block rounded-lg  bg-blue-400 p-4">
								<TfiWrite className="h-6 w-6" />
							</span>

							<h2 className="mt-2 font-bold">Content creator</h2>

							<p className="hidden sm:mt-1 sm:block sm:text-sm  sm:text-gray-500">
								{" "}
								People are waiting to see what you got and how you can deliver.
							</p>
						</a>

						<a
							className="hover:ring-blue-250 block rounded-xl  border p-4  shadow-sm hover:ring-1 focus:outline-none focus:ring"
							href="/accountant"
						>
							<span className="inline-block rounded-lg  bg-blue-400 p-4">
								<AiFillFormatPainter className="h-6 w-6" />
							</span>

							<h2 className="mt-2 font-bold">Painter</h2>

							<p className="hidden sm:mt-1 sm:block sm:text-sm  sm:text-gray-500">
								{" "}
								People are waiting to see what you got and how you can deliver.
							</p>
						</a>

						<a
							className="hover:ring-blue-250 block rounded-xl  border p-4  shadow-sm hover:ring-1 focus:outline-none focus:ring"
							href="/accountant"
						>
							<span className="inline-block rounded-lg  bg-blue-400 p-4">
								<LuChefHat className="h-6 w-6" />
							</span>

							<h2 className="mt-2 font-bold">Chef</h2>

							<p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
								People are waiting to see what you got and how you can deliver.
							</p>
						</a>

						<a
							className="hover:ring-blue-250 block rounded-xl  border p-4  shadow-sm hover:ring-1 focus:outline-none focus:ring"
							href="/accountant"
						>
							<span className="inline-block rounded-lg  bg-blue-400 p-4">
								<TbNeedleThread className="h-6 w-6" />
							</span>

							<h2 className="mt-2 font-bold">Fashion Designer</h2>

							<p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
								People are waiting to see what you got and how you can deliver.
							</p>
						</a>

						<a
							className="hover:ring-blue-250 block rounded-xl  border p-4  shadow-sm hover:ring-1 focus:outline-none focus:ring"
							href="/accountant"
						>
							<span className="inline-block rounded-lg  bg-blue-400 p-4">
								<IoCameraOutline className="h-6 w-6" />
							</span>

							<h2 className="mt-2 font-bold">Plumber</h2>

							<p className="hidden sm:mt-1 sm:block sm:text-sm  sm:text-gray-500">
								{" "}
								People are waiting to see what you got and how you can deliver.
							</p>
						</a>

						<a
							className="hover:ring-blue-250 block rounded-xl  border p-4  shadow-sm hover:ring-1 focus:outline-none focus:ring"
							href="/accountant"
						>
							<span className="inline-block rounded-lg  bg-blue-400 p-4">
								<GoLaw className="h-6 w-6" />
							</span>

							<h2 className="mt-2 font-bold">Lawyer</h2>

							<p className="hidden sm:mt-1 sm:block sm:text-sm  sm:text-gray-500">
								People are waiting to see what you got and how you can deliver.
							</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default advert
