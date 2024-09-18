import { createContext, useState } from 'react'
import CountriesData from '../data.json'
import { use } from 'framer-motion/client'

export const InputFieldContext = createContext({
	displayMatches: () => {},
	searchedCountries: '',
	filterCountries: () => {},
	filteredCountries: '',
	filterUsed: '',
})

export default function InputFieldContextProvider({ children }) {
	const [searchedCountries, setSearchedCountries] = useState(undefined)
	const [filteredCountries, setFilteredCountries] = useState(CountriesData)
	const [filterUsed, setFilterUsed] = useState(false)

	function searchCountry(wordToMatch, countries) {
		return countries.filter(country => {
			const regex = new RegExp(wordToMatch, 'gi')
			return country.name.match(regex)
		})
	}

	function displayMatches(e) {
		setSearchedCountries(searchCountry(e.target.value, CountriesData))

		if (e.target.value === '') {
			setSearchedCountries(undefined)
		}
	}

	function filterCountries(e) {
		const filteredData = CountriesData.filter(country => country.region.toLowerCase() === e.target.value.toLowerCase())

		if (e.target.value !== '') {
			setFilterUsed(true)
		} else {
			setFilterUsed(false)
		}

		setFilteredCountries(filteredData)
	}


	const value = {
		displayMatches,
		searchedCountries,
		filterCountries,
		filteredCountries,
		filterUsed,
	}

	return <InputFieldContext.Provider value={value}>{children}</InputFieldContext.Provider>
}
