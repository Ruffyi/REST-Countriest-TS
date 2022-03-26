import ICountry from './Country.type';

interface IPagination {
	countries: ICountry[];
	setCurrentPage: (id: number) => void;
	setPreviousPage: () => void;
	setNextPage: () => void;
	pageCount: number;
	config: {
		start: number;
		end: number;
	};
	currentPage: number;
}

export default IPagination;
