import ICountry from './Country.type';

interface IPagination {
	countries: ICountry[];
	setCurrentPage: (id: number) => void;
	pageCount: number;
	config: {
		start: number;
		end: number;
	};
}

export default IPagination;
