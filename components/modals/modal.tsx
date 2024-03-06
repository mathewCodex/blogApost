"use client"
import { useCallback, useEffect, useState } from "react"
import { IoMdClose } from "react-icons/io"
import Button from "../Button"

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	onSubmit: () => void

	title: string
	body: React.ReactElement

	actionLabel: string
	disabled: boolean
	secondaryAction?: () => void
	secondaryActionLabel?: string
}

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	onSubmit,
	disabled,
	title,
	body,
	actionLabel,
	secondaryAction,
	secondaryActionLabel,
}) => {
	const [showModal, setShowModal] = useState(isOpen)
	useEffect(() => {
		setShowModal(isOpen)
	}, [isOpen])
	const handleClose = useCallback(() => {
		if (disabled) {
			return
		}
		setShowModal(false)
		setTimeout(() => {
			onClose()
		}, 300)
	}, [disabled, onClose])
	const handleSubmit = useCallback(() => {
		if (disabled) {
			return
		}
		onSubmit()
	}, [disabled, onSubmit])
	const handleSecondaryAction = useCallback(() => {
		if (disabled || !secondaryAction) {
			return
		}
		secondaryAction()
	}, [disabled, secondaryAction])
	if (!isOpen) {
		return null
	}
	return (
		<>
			<div className="fixed inset-0 z-50 flex items-center justify-center  overflow-y-auto overflow-x-hidden bg-neutral-800/70 outline-none focus:outline-none ">
				<div className="w-fullmd:w-4/6 relative mx-auto my-6 h-4 md:h-auto lg:h-auto lg:w-3/6 xl:w-2/5">
					{/* content */}
					<div
						className={`translate h-full duration-300 ${
							showModal ? "translate-y-0" : "translate-y-full"
						} ${showModal ? "opacity-100" : "opacity-0"}`}
					>
						<div className="translate relative flex h-4 w-full flex-col rounded-lg border-0 bg-background shadow-lg outline-none focus:outline-none md:h-auto lg:h-auto">
							{/* Header */}
							<div className="relative flex items-center justify-center rounded-t border-b-[1px] p-6">
								<button
									type="button"
									title="Close a Modal"
									onClick={handleClose}
									className="absolete left-9 border-0 p-1 transition hover:opacity-70"
								>
									<IoMdClose size={18} />
								</button>
								<div className="text-lg font-semibold">{title}</div>
							</div>
							{/* Body */}
							<div className="relative flex-auto p-6">{body}</div>
							{/* footer */}
							<div className="flex flex-col gap-2 p-6">
								<div className="flex w-full flex-row items-center gap-4">
									{secondaryAction && secondaryActionLabel && (
										<Button
											outline
											disabled={disabled}
											label={secondaryActionLabel}
											onClick={handleSecondaryAction}
										/>
									)}

									<Button
										disabled={disabled}
										label={actionLabel}
										onClick={handleSubmit}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Modal
