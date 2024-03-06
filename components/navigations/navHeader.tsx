import React from "react"

import Navigation from "./navbar"

const Header = () => {
	return (
		<header className="flex h-20 items-center bg-white px-6 sm:px-10">
			{/* <MoonIcon
				className="h-12 cursor-pointer stroke-slate-600 sm:hidden"
				onClick={() => setMobileNavsidebar(!mobileNavsidebar)}
			/> */}
			<Navigation />
			<div className="ml-auto flex flex-shrink-0 items-center">
				<div className="ml-3 space-x-1 border-l pl-3">
					Notify
					{/* <LogOutButton /> */}
				</div>
			</div>
		</header>
	)
}

export default Header
