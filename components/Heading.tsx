"use client"

interface headingProps {
	title: string
	subtitle: string
	center: boolean
}
const Heading: React.FC<headingProps> = ({ title, subtitle, center }) => {
	return (
		<div className={center ? "texte-center" : "text-start"}>
			<div className="text-2xl font-bold">{title}</div>
			<div className="mt-2 font-light text-neutral-500">{subtitle}</div>
		</div>
	)
}

export default Heading

