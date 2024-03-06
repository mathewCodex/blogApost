"use client"
interface CategoryInputProps {
	// icon: IconType
	label: string
	selected: boolean
	onClick: (value: string) => void
}
const CategoryInput: React.FC<CategoryInputProps> = ({
	// icon: Icon,
	label,
	selected,
	onClick,
}) => {
	const keyDowner = () => {
		console.log("no key")
	}
	return (
		<div
			role="button"
			onKeyDown={keyDowner}
			tabIndex={0}
			onClick={() => onClick(label)}
			className={` flex cursor-pointer flex-col gap-3 rounded-xl border-2 p-4 transition hover:border-black ${
				selected ? "border-blue-500" : "border-nuetral-200"
			}`}
		>
			<div className="font-semibold">{label}</div>
		</div>
	)
}

export default CategoryInput
