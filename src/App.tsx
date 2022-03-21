import Routing from './pages/Routing';
import Root from './components/Root/Root';

import countryContext from './store/todoContext/countryContext';
import { useState } from 'react';
import ICountry from './@types/shared/Country.type';

const App = () => {
	const [countries, setCountries] = useState<ICountry[] | []>([]);

	return (
		<countryContext.Provider value={{ countries, setCountries }}>
			<Root>
				<Routing />
			</Root>
		</countryContext.Provider>
	);
};

export default App;
