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
	console.log(currentPage, paginationConfig);
	return { paginationConfig, setCurrentPage, pageCount } as const;
};

export default usePagination;
