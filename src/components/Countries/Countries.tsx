import { default as bemCssModules } from 'bem-css-modules';
import { default as CountriesStyles } from './Countries.module.scss';

import Filter from '../Filter/Filter';

const styled = bemCssModules(CountriesStyles);

const Countries = () => {
	return (
		<section className={styled()}>
			<Filter />
		</section>
	);
};

export default Countries;
