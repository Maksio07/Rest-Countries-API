import { useContext, useEffect } from 'react'
import { motion, stagger, useAnimate } from 'framer-motion'
import { InputFieldContext } from '../store/InputFieldContext.jsx'
import { Link } from 'react-router-dom'
import CountriesData from '../data.json'

export default function Countries() {
	const ctx = useContext(InputFieldContext)
	let countriesList = CountriesData

	const [scope, animate] = useAnimate()

	useEffect(() => {
		if(ctx.searchedCountries !== undefined && ctx.searchedCountries.length === 0 ) {
			return
		}
		animate('li', { opacity: 1 }, { delay: stagger(0.1) })
	})

	if (ctx.searchedCountries !== undefined) {
		countriesList = ctx.searchedCountries
	} else if (ctx.filterUsed === true && ctx.searchedCountries === undefined) {
		countriesList = ctx.filteredCountries
	} else if (ctx.filterUsed === false && ctx.searchedCountries === undefined) {
		countriesList = CountriesData
	}

	return (
		<section>
			<ul ref={scope} className='countries-section grid grid-cols-4 gap-20'>
				{ctx.searchedCountries !== undefined && ctx.searchedCountries.length === 0 ? (
					<p className='error-message w-[96vw] mt-[4rem] ml-[-4rem] mr-[-4rem] text-center text-3xl text-[--text]'>
						Typed text does not matches to countries names, please try again.
					</p>
				) : (
					''
				)}
				{countriesList.map(country => {
					return (
						<motion.li
							initial={{ opacity: 0 }}
							key={country.name}
							className='country-box flex flex-col bg-[--elements] text-[--text] shadow-sm rounded-md cursor-pointer transition-transform .3s'>
							<Link to={`/${country.name}`}>
								<img
									src={country.flags.png}
									alt={'A flag of ' + country.name}
									className='countries-flag w-full h-[22rem] rounded-t-md'
								/>
								<div className='flex flex-col my-[1rem] ml-[4rem]'>
									<h2 className='my-4 text-[1.6rem] font-[600]'>{country.name}</h2>
									<p className='flex mt-1 text-[1.2rem]'>
										<span className='pr-[.4rem] font-[600] text-[--color]'>Population:</span>
										<span className='text-[--information-color]'>{country.population}</span>
									</p>
									<p className='flex mt-1 text-[1.2rem]'>
										<span className='pr-[.4rem] font-[600] text-[--color]'>Region:</span>
										<span className='text-[--information-color]'>{country.region}</span>
									</p>
									<p className='flex mt-1 text-[1.2rem]'>
										<span className='pr-[.4rem] font-[600] text-[--color]'>Capital:</span>
										<span className='text-[--information-color]'>{country.capital}</span>
									</p>
								</div>
							</Link>
						</motion.li>
					)
				})}
			</ul>
		</section>
	)
}
