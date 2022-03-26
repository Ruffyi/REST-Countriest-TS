import Routing from './pages/Routing';
import Root from './components/Root/Root';

import countryContext from './store/todoContext/countryContext';
import paginationContext from './store/paginationContext/paginationContext';
import ICountry from './@types/shared/Country.type';
import useFetch from './hooks/useFetch';
import usePagination from './hooks/usePaginate';
import PaginationProvider from './store/paginationContext/paginationContext';

const App = () => {
	const { data } = useFetch<ICountry>('https://restcountries.com/v2/all');

	return (
		<countryContext.Provider value={{ countries: data }}>
			<PaginationProvider countries={data}>
				<Root>
					<Routing />
				</Root>
			</PaginationProvider>
		</countryContext.Provider>
	);
};

export default App;
