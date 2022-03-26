import { createContext } from 'react';
import ICountries from '../../@types/shared/Countries.type';
import IPagination from '../../@types/shared/Pagination.types';
import { IRoot } from '../../@types/shared/Root.types';
import usePagination from '../../hooks/usePaginate';

const paginationContext = createContext<IPagination>({
	countries: [],
	setCurrentPage: () => {},
	setPreviousPage: () => {},
	setNextPage: () => {},
	pageCount: 0,
	config: {
		start: 0,
		end: 0,
	},
	currentPage: 0,
});

const PaginationProvider = ({ children, countries }: IRoot & ICountries) => {
	const {
		paginationConfig,
		setCurrentPage,
		pageCount,
		setNextPage,
		currentPage,
		setPreviousPage,
	} = usePagination(countries.length);

	return (
		<paginationContext.Provider
			value={{
				countries,
				pageCount,
				setCurrentPage,
				config: paginationConfig,
				setNextPage,
				currentPage,
				setPreviousPage,
			}}
		>
			{children}
		</paginationContext.Provider>
	);
};

export { paginationContext };

export default PaginationProvider;
