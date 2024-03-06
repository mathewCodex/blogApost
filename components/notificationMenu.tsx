"use client"

import { useState, useRef, useEffect } from "react"
import {
	KnockProvider,
	KnockFeedProvider,
	NotificationIconButton,
	NotificationFeedPopover,
} from "@knocklabs/react"
// import { env } from "@/env.mjs"
import { useSession } from "next-auth/react"
// Required CSS import, unless you're overriding the styling
import "@knocklabs/react/dist/index.css"
import Notifications from "@/components/ui/notification"
// interface Props {
// 	knockToken: string
// }
const Notification = () => {
	const [isVisible, setIsVisible] = useState(false)
	const notifButtonRef = useRef(null)
	const { data: session, status } = useSession()
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [setIsClient])
	return isClient && status === "authenticated" ? (
		<KnockProvider
			apiKey="pk_test_xCo8rSFHpivzHbU9p87STc_ONDsZfxbmn5XXsP9Lqgw"
			userId={session.user?.email as string}
			// userToken={knockToken}
			// In production, you must pass a signed userToken
			// and enable enhanced security mode in your Knock dashboard
			// userToken={currentUser.knockUserToken}
		>
			<KnockFeedProvider feedId="be518af5-52cb-4a9c-9346-b67a7ddf27e9">
				<>
					<NotificationIconButton
						ref={notifButtonRef}
						onClick={() => setIsVisible(!isVisible)}
					/>
					<NotificationFeedPopover
						buttonRef={notifButtonRef}
						isVisible={isVisible}
						onClose={() => setIsVisible(false)}
					/>
				</>
			</KnockFeedProvider>
		</KnockProvider>
	) : (
		<Notifications />
	)
}
export default Notification
