import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CountriesData from '../data.json'
import Country from '../components/Country.jsx'
import arrowIcon from '../assets/arrowIcon.svg'

export default function CountryPage() {
	const params = useParams()

	const countryDataIndex = CountriesData.findIndex(country => country.name === params.countryName)
	const countryData = CountriesData[countryDataIndex]

	const borders = countryData.borders
	const countryNeighbours = []


	if (borders === undefined) {
		borders === ''
	} else {
		for (const borderName of borders) {
			for (const country of CountriesData) {
				if (borderName === country.alpha3Code) {
					countryNeighbours.push(country.name)
				}
			}
		}
	}

	return (
		<>
			<motion.section
				className='country-section w-[100vw] max-w-[2412px]'
				initial={{ opacity: 0, y: '-2000px' }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}>
				<button
					type='button'
					className='back-btn my-[10rem] mx-[4rem] py-2 pl-8 pr-12 text-[1.2rem] rounded-md text-[--text]'>
					<Link to={'/'} className='flex items-center'>
						<img src={arrowIcon} alt='Left arrow icon' className='pr-[.4rem]' /> Back
					</Link>
				</button>
				<Country
					flag={countryData.flags.png}
					name={countryData.name}
					nativeName={countryData.nativeName}
					population={countryData.population}
					region={countryData.region}
					subRegion={countryData.subregion}
					capital={countryData.capital}
					domain={countryData.topLevelDomain}
					currencies={countryData.currencies !== undefined ? countryData.currencies[0].name : ''}
					languages={countryData.languages[0].name}
					borders={countryNeighbours}
				/>
			</motion.section>
		</>
	)
}
