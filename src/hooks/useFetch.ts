import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = <T>(url: string) => {
	const [data, setData] = useState<T[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	const fetchData = async () => {
		setLoading(true);
		try {
			const response = await axios.get(url, {
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const data = response.data;
			setData(data);
			setLoading(false);
		} catch (err) {
			if (err instanceof Error) {
				setError(err.message);
			}
			return err;
		}
	};

	useEffect(() => {
		fetchData();
	}, [url]);

	return { data, setData, loading, error } as const;
};

export default useFetch;
