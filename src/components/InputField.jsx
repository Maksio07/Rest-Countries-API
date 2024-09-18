import { useContext } from 'react'
import { DarkModeContext } from '../store/DarkModeContext'
import { InputFieldContext } from '../store/InputFieldContext'

export default function InputField() {
	const themeCtx = useContext(DarkModeContext)
	const ctx = useContext(InputFieldContext)

	return (
		<form className='search-box flex justify-between my-[4rem] w-full'>
			<input
				type='text'
				placeholder='Search for a country...'
				className='search-input py-2 pr-3 pl-[3.6rem] w-[32rem] bg-[--elements] text-[1.4rem] text-[--text] shadow-md rounded-[.6rem]'
				onChange={ctx.displayMatches}
			/>
			<div>
				<label htmlFor='countries-select'></label>
				<select
					name='countries'
					id='countries-select'
					className='countries-select py-3 px-10 text-[1.2rem] shadow-md rounded-[.6rem] cursor-pointer bg-[--elements] text-[--text]'
					onClick={ctx.filterCountries}>
					<option value='' className='input-field-option'>
						Filter by region
					</option>
					<option value='africa' className='input-field-option'>
						Africa
					</option>
					<option value='america' className='input-field-option'>
						America
					</option>
					<option value='asia' className='input-field-option'>
						Asia
					</option>
					<option value='europe' className='input-field-option'>
						Europe
					</option>
					<option value='oceania' className='input-field-option'>
						Oceania
					</option>
				</select>
			</div>
		</form>
	)
}
