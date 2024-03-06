/* eslint-disable jsx-a11y/click-events-have-key-events */
"use client"
interface MenuItemsProps {
	onClick: () => void
	label: string
}
const MenuItem: React.FC<MenuItemsProps> = ({ onClick, label }) => {
	return (
		// eslint-disable-next-line jsx-a11y/no-static-element-interactions
		<div
			onClick={onClick}
			className=" rounded-sm bg-background px-4 py-2 font-medium  transition hover:cursor-pointer  hover:bg-accent"
		>
			{label}
		</div>
	)
}

export default MenuItem
