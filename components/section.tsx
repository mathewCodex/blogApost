import * as React from "react"

interface SectionProps {
	children?: React.ReactNode
	icon: React.ReactNode
	title: string
	subtitle: string
}

export function Section({ children, icon, title, subtitle }: SectionProps) {
	return (
		<section>
			<header className="sticky top-[65px] z-40 mb-1 flex items-start gap-2 bg-background py-2">
				<div className="flex aspect-square w-10 shrink-0 items-center justify-center rounded-lg border bg-slate-100 text-primary">
					{icon}
				</div>
				<div>
					<h2 className="font-bold">{title}</h2>
					<p className="text-xs text-muted-foreground">{subtitle}</p>
				</div>
			</header>
			{children}
		</section>
	)
}
