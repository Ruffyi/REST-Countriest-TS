import { Route, Routes } from 'react-router';
import Countries from './Countries';

const Routing = () => {
	return (
		<Routes>
			<Route path='/' element={<Countries />} />
		</Routes>
	);
};

export default Routing;
