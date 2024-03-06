import { useRouter } from "next/navigation"
import { useCallback, useMemo } from "react"
import { formatDistanceToNowStrict } from "date-fns"

import Avatar from "../Avatar"

interface CommentItemProps {
	data: Record<string, any>
}

const CommentItem: React.FC<CommentItemProps> = ({ data = {} }) => {
	const router = useRouter()

	const goToUser = useCallback(
		(ev: any) => {
			ev.stopPropagation()

			router.push(`/app/profiles/users/${data.user.id}`)
		},
		[router, data.user.id],
	)

	const createdAt = useMemo(() => {
		if (!data?.createdAt) {
			return null
		}

		return formatDistanceToNowStrict(new Date(data.createdAt))
	}, [data.createdAt])

	return (
		<div
			className="
        cursor-pointer 
        border-b-[1px] 
        border-neutral-800 
        p-5 
        transition 
        hover:bg-neutral-900
      "
		>
			<div className="flex flex-row items-start gap-3">
				<Avatar userId={data.user.id} />
				<div>
					<div className="flex flex-row items-center gap-2">
						<div role="button" onKeyDown={goToUser} tabIndex={0} onClick={goToUser}>
							<p
								className="
                cursor-pointer 
                font-semibold 
                text-white 
                hover:underline
            "
							>
								{data.user.name}
							</p>
						</div>

						<span
							role="button"
							onKeyDown={goToUser}
							tabIndex={0}
							onClick={goToUser}
							className="
                hidden
                cursor-pointer
                text-neutral-500
                hover:underline
                md:block
            "
						>
							@{data.user.name}
						</span>
						<span className="text-sm text-neutral-500">{createdAt}</span>
					</div>
					<div className="mt-1 text-white">{data.body}</div>
				</div>
			</div>
		</div>
	)
}

export default CommentItem
