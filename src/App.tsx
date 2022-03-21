import Routing from './pages/Routing';
import Root from './components/Root/Root';

import countryContext from './store/todoContext/countryContext';
import ICountry from './@types/shared/Country.type';
import useFetch from './hooks/useFetch';

const App = () => {
	const { data, setData } = useFetch<ICountry[]>(
		'https://restcountries.com/v2/all'
	);

	return (
		<countryContext.Provider value={{ countries: data, setCountries: setData }}>
			<Root>
				<Routing />
			</Root>
		</countryContext.Provider>
	);
};

export default App;
