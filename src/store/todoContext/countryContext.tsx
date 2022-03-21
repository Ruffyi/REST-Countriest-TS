import { createContext } from 'react';
import ICountry from '../../@types/shared/Country.type';

interface ICountryContext {
	countries: ICountry[];
	setCountries?: (data: ICountry[]) => void;
}

const countryContext = createContext<ICountryContext>({
	countries: [],
	setCountries: () => {},
});

export default countryContext;
