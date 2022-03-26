import { useState } from 'react';

const usePagination = (initial: number) => {
	const [currentPage, setCurrentPage] = useState(1);
	const limit = 15;
	const pageCount = Math.ceil(initial / limit);
	const lastPage = currentPage * limit;
	const firstPage = lastPage - limit;
	const paginationConfig = {
		start: firstPage,
		end: lastPage,
	};

	const setNextPage = () => {
		currentPage < pageCount && setCurrentPage(page => page + 1);
	};

	const setPreviousPage = () => {
		currentPage !== 1 && setCurrentPage(page => page - 1);
	};

	return {
		paginationConfig,
		setCurrentPage,
		pageCount,
		setNextPage,
		setPreviousPage,
		currentPage,
	} as const;
};

export default usePagination;
