import { default as bemCssModules } from 'bem-css-modules';
import { default as CountriesStyles } from './Countries.module.scss';

import Filter from '../Filter/Filter';
import CountriesList from './CountriesList/CountriesList';

const styled = bemCssModules(CountriesStyles);

const Countries = () => {
	return (
		<section className={styled()}>
			<Filter />
			<CountriesList />
		</section>
	);
};

export default Countries;
