import { default as bemCssModules } from 'bem-css-modules';
import { useContext } from 'react';
import countryContext from '../../../store/todoContext/countryContext';
import Country from '../../Country/Country';
import { default as CountriesListStyles } from './../Countries.module.scss';

const styled = bemCssModules(CountriesListStyles);

const CountriesList = () => {
	const { countries } = useContext(countryContext);

	return (
		<section className={styled('list')}>
			{countries.map(({ name, flag, population, region, capital }) => (
				<Country
					key={name}
					name={name}
					flag={flag}
					population={population}
					region={region}
					capital={capital}
				/>
			))}
		</section>
	);
};

export default CountriesList;
