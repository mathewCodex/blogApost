"use client"

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

interface InputProps {
	id: string
	label: string
	type?: string
	disabled?: boolean
	// formatPrice?: boolean
	required?: boolean
	register: UseFormRegister<FieldValues>
	errors: FieldErrors
}

const Inputs: React.FC<InputProps> = ({
	id,
	label,
	type = "text",
	disabled,
	register,
	required,
	errors,
}) => {
	return (
		<div className="relative w-full">
			<input
				id={id}
				disabled={disabled}
				{...register(id, { required })}
				placeholder=" "
				type={type}
				className={`disabled-cursor-not-allowed peer w-full rounded-md border-2 bg-background p-4 pl-4 pt-6 font-light outline-none transition 
					disabled:opacity-70
			
                ${errors[id] ? `border-blue-500` : `border-neutral-300`}
                ${errors[id] ? `focus:border-blue-500` : `focus:border-black`}`}
			/>
			<label
				className={`text-md transform-translate-y-3 absolute left-4 top-5 z-10 origin-[0]
				duration-150
				
				peer-placeholder-shown:translate-y-0
				peer-placeholder-shown:scale-100
				peer-focus:-translate-y-4
				peer-focus:scale-75
				${errors[id] ? `text-blue-500` : `text-zinc-400`}`}
				htmlFor="label"
			>
				{" "}
				{label}
			</label>
		</div>
	)
}

export default Inputs
