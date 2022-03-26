import { createContext } from 'react';
import IPagination from '../../@types/shared/Pagination.types';

const paginationContext = createContext<IPagination>({
	countries: [],
	setCurrentPage: () => {},
	pageCount: 0,
	config: {
		start: 0,
		end: 0,
	},
});

export default paginationContext;
