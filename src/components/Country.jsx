export default function Country({
	flag,
	name,
	nativeName,
	population,
	region,
	subRegion,
	capital,
	domain,
	currencies,
	languages,
	borders,
}) {
	return (
		<article className=' country-information flex justify-between mx-[4rem] text-[--text]' >
			<img src={flag} alt={'A flag of ' + name} className='country-flag h-[34rem] w-[44rem]' />
			<div className='country-text-area flex flex-col justify-center '>
				<h2 className='country-name mb-[3rem] font-bold text-[3.2rem]'>{name}</h2>
				<section className='information-section flex justify-between'>
					<div>
						<p className='country-description flex mt-1 text-[1.2rem]'>
							<span className='pr-[.4rem] font-[800]'>Native Name:</span>{' '}
							<span className='text-[--information-color]'>{nativeName}</span>
						</p>
						<p className='country-description flex mt-1 text-[1.2rem]'>
							<span className='pr-[.4rem] font-[800]'>Population:</span>{' '}
							<span className='text-[--information-color]'>{population}</span>
						</p>
						<p className='country-description flex mt-1 text-[1.2rem]'>
							<span className='pr-[.4rem] font-[800]'>Region:</span>{' '}
							<span className='text-[--information-color]'>{region}</span>
						</p>
						<p className='country-description flex mt-1 text-[1.2rem]'>
							<span className='pr-[.4rem] font-[800]'>Sub Region:</span>{' '}
							<span className='text-[--information-color]'>{subRegion}</span>
						</p>
						<p className='country-description flex mt-1 text-[1.2rem]'>
							<span className='pr-[.4rem] font-[800]'>Capital:</span>{' '}
							<span className='text-[--information-color]'>{capital}</span>
						</p>
					</div>
					<div className='other-informations'>
						<p className='country-description flex mt-1 text-[1.2rem]'>
							<span className='pr-[.4rem] font-[800]'>Top Level Domain:</span>{' '}
							<span className='text-[--information-color]'>{domain}</span>
						</p>
						<p className='country-description flex mt-1 text-[1.2rem]'>
							<span className='pr-[.4rem] font-[800]'>Currencies:</span>{' '}
							<span className='text-[--information-color]'>{currencies === '' ? 'This country/region has no currencies' : currencies}</span>
						</p>
						<p className='country-description flex mt-1 text-[1.2rem]'>
							<span className='pr-[.4rem] font-[800]'>Languages:</span>{' '}
							<span className='text-[--information-color]'>{languages}</span>
						</p>
					</div>
				</section>
				<p className='country-description borders flex flex-wrap items-center mt-[5rem] text-[1.2rem]'>
					<span className='font-[800]'>Border Countries:</span>
					{borders.length === 0 ? (
						<span className='ml-[.4rem] text-[--information-color]'>
							This country does not have common borders with other countries.
						</span>
					) : (
						borders.map(border => (
							<span
								className='ml-[1.4rem] my-2 px-[1.8rem] border-solid border-[.1rem] border-[--information-color] text-[--information-color] rounded-md'
								key={border}>
								{border}
							</span>
						))
					)}
				</p>
			</div>
		</article>
	)
}
