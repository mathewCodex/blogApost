import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

/**
 * Returns a capitalized sub-string the first two letters of a user's name
 * @usage As Avatar callback string is Avatar image is null
 */
export function cappedAvatarFallback(name: string) {
	return name.slice(0, 2).toUpperCase()
}

export const isActiveRoute = (currentRouteHref: string, providedRouteHref: string) =>
	currentRouteHref.startsWith(providedRouteHref)

export function isBase64Image(imageData: string) {
	const base64Regex = /^data:image\/(png|jpe?g|gif|webp);base64,/
	return base64Regex.test(imageData)
}
// sanitizeText
// Removing all html tags from string
export function sanitizeText(text: string) {
  return text.replace(/(<([^>]+)>)/gi, '');
}