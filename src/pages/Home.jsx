import InputField from "../components/InputField.jsx"
import Countries from "../components/Countries.jsx"

export default function HomePage() {
	return (
		<section className='flex flex-col mx-[4rem]'>
			<InputField />
			<Countries />
		</section>
	)
}

