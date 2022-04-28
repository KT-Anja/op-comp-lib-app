import React, { FormEvent, InputHTMLAttributes } from 'react'
import Form from '../atoms/forms/form'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
	onSubmit: (event: FormEvent) => void
	placeholder?: string
}
const SearchInput = ({ placeholder = 'Suche', onSubmit, ...rest }: SearchInputProps) => {
	const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		onSubmit(event)
	}
	return (
		<Form onSubmit={handleOnSubmit}>
			<div className="input-group">
				<input
					id="search"
					type="search"
					placeholder={placeholder}
					aria-label="search"
					className="form-control border-right-0 border-end-0"
					{...rest}
				/>
				<button className="btn bg-white" type="submit" id="button-addon">
					<i className="fa-solid fa-magnifying-glass"></i>
				</button>
			</div>
		</Form>
	)
}
export default SearchInput
