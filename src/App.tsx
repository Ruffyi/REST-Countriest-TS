import Routing from './pages/Routing';
import Root from './components/Root/Root';

import countryContext from './store/todoContext/countryContext';
import paginationContext from './store/paginationContext/paginationContext';
import ICountry from './@types/shared/Country.type';
import useFetch from './hooks/useFetch';
import usePagination from './hooks/usePaginate';

const App = () => {
	const { data } = useFetch<ICountry>('https://restcountries.com/v2/all');
	const { paginationConfig, setCurrentPage, pageCount } = usePagination(
		data.length
	);
	return (
		<countryContext.Provider value={{ countries: data }}>
			<paginationContext.Provider
				value={{
					countries: data,
					pageCount,
					setCurrentPage,
					config: paginationConfig,
				}}
			>
				<Root>
					<Routing />
				</Root>
			</paginationContext.Provider>
		</countryContext.Provider>
	);
};

export default App;
