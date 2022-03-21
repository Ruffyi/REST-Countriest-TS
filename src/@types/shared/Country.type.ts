type TCoordinates = {
	lat: number;
	lng: number;
};

type TCountryFlags = {
	svg: string;
	png: string;
};

type TCurrencies = {
	code: string;
	name: string;
	symbol: string;
};

type TLanguages = {
	iso639_1: string;
	iso639_2: string;
	name: string;
	nativeName: string;
};

type TLanguagesTranslations = {
	br: string;
	pt: string;
	nl: string;
	hr: string;
	fa: string;
	de: string;
	es: string;
	fr: string;
	ja: string;
	it: string;
	hu: string;
};

type TRegionalBlocs = {
	acronym: string;
	name: string;
	otherNames: string[];
};

interface ICountry {
	name: string;
	topLevelDomain: string[];
	alpha2Code: string;
	alpha3Code: string;
	callingCodes: string[];
	capital: string;
	altSpellings: string[];
	subregion: string;
	region: string;
	population: number;
	latlng: TCoordinates;
	demonym: string;
	area: number;
	timezones: string[];
	borders: string[];
	nativeName: string;
	numericCode: string;
	flags: TCountryFlags;
	currencies: TCurrencies;
	languages: TLanguages;
	translations: TLanguagesTranslations;
	flag: string;
	cioc: string;
	independent: boolean;
	regionalBlocs: TRegionalBlocs;
}

export default ICountry;
