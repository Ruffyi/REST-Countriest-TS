import { default as bemCssModules } from 'bem-css-modules';
import Filter from '../Filter/Filter';
import { default as CountriesStyles } from './Countries.module.scss';

const styled = bemCssModules(CountriesStyles);

const Countries = () => {
	return (
		<section className={styled()}>
			<Filter />
		</section>
	);
};

export default Countries;
