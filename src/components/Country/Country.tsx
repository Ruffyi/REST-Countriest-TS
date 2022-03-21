import { default as bemCssModules } from 'bem-css-modules';
import ICountry from '../../@types/shared/Country.type';
import { default as CountryStyles } from './Country.module.scss';

const styled = bemCssModules(CountryStyles);

const Country = ({
	flag,
	name,
	population,
	region,
	capital,
}: Partial<ICountry>) => {
	return (
		<div className={styled()}>
			<div className={styled('flag')}>
				<img src={flag} alt={`${name} country flag`} />
			</div>
			<div className={styled('description')}>
				<h2 className={styled('name')}>{name}</h2>
				<p className={styled('data')}>
					Population <span className={styled('stats')}>{population}</span>
				</p>
				<p className={styled('data')}>
					Region <span className={styled('stats')}>{region}</span>
				</p>
				<p className={styled('data')}>
					Capital <span className={styled('stats')}>{capital}</span>
				</p>
			</div>
		</div>
	);
};

export default Country;
