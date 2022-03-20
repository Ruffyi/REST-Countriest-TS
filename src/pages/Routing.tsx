import { Route, Routes } from 'react-router';
import Countries from './CountriesApp';

const Routing = () => {
	return (
		<Routes>
			<Route path='/' element={<Countries />} />
		</Routes>
	);
};

export default Routing;
