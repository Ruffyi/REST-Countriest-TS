import { createContext } from 'react';
import ICountry from '../../@types/shared/Country.type';

interface ICountryContext {
	countries: ICountry[];
	setCountries: (countries: ICountry[]) => void;
}

const countryContext = createContext<ICountryContext>({
	countries: [],
	setCountries: (countries: ICountry[]) => {},
});

export default countryContext;
