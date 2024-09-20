import { createContext, useState } from 'react'
import CountriesData from '../data.json'

export const InputFieldContext = createContext({
	displayMatches: () => {},
	searchedCountries: '',
	filterCountries: () => {},
	filteredCountries: '',
	filterUsed: '',
	filterInSearched: '',
})

export default function InputFieldContextProvider({ children }) {
	const [searchedCountries, setSearchedCountries] = useState(undefined)
	const [filteredCountries, setFilteredCountries] = useState(CountriesData)
	const [filterUsed, setFilterUsed] = useState(false)
	const [filterInSearched, setFilterInSearched] = useState(undefined)

	function searchCountry(wordToMatch, countries) {
		if (filterUsed) {
			return filteredCountries.filter(country => {
				const regex = new RegExp(wordToMatch, 'gi')
				return country.name.match(regex)
			})
		} else {
			return countries.filter(country => {
				const regex = new RegExp(wordToMatch, 'gi')
				return country.name.match(regex)
			})
		}
	}

	function displayMatches(e) {
		setFilterInSearched(searchCountry(e.target.value, filteredCountries))
		setSearchedCountries(searchCountry(e.target.value, CountriesData))

		if (e.target.value === '') {
			setSearchedCountries(undefined)
		}
	}

	function filterCountries(e) {
		const filteredData = CountriesData.filter(country => country.region.toLowerCase() === e.target.value.toLowerCase())

		if (e.target.value !== '') {
			setFilterUsed(true)
			filterSearchedCountries(e)
		} else {
			setFilterUsed(false)
		}

		setFilteredCountries(filteredData)
	}

	function filterSearchedCountries(e) {
		if (searchedCountries !== undefined) {
			const filteredSearchedArray = searchedCountries.filter(
				country => country.region.toLowerCase() === e.target.value.toLowerCase()
			)
			setFilterInSearched(filteredSearchedArray)
		}
	}

	const value = {
		displayMatches,
		searchedCountries,
		filterCountries,
		filteredCountries,
		filterUsed,
		filterInSearched,
	}

	return <InputFieldContext.Provider value={value}>{children}</InputFieldContext.Provider>
}
