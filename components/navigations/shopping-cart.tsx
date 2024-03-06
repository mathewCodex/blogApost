import { Icons } from "../icons"
import { Button } from "../ui/button"

export default function ShoppingCart() {
	return (
		<div>
			<Button size={"icon"} variant="secondary" className="relative p-1">
				<Icons.shoppingBasket className="h-8 w-8" />
				<span className="absolute -right-2 -top-2 aspect-square w-5 rounded-full bg-red-400 p-0.5 text-xs">
					3
				</span>
			</Button>
		</div>
	)
}
