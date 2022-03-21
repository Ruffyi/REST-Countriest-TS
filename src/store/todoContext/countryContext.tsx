import { createContext } from 'react';
import ICountry from '../../@types/shared/Country.type';

interface ICountryContext {
	countries: ICountry[] | null;
	setCountries?: (data: ICountry[]) => void;
}

const countryContext = createContext<ICountryContext | null>({
	countries: [],
	setCountries: () => {},
});

export default countryContext;
