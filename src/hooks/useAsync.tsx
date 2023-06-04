import { useState, useEffect } from 'react';

type HandlerFunction = (...args: any[]) => Promise<any>;

export default function useAsync(handler: HandlerFunction, immediate = true) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(immediate);
	const [error, setError] = useState(null);

	const act = async (...args: any[]) => {
		setLoading(true);
		setError(null);

		try {
			const data = await handler(...args);
			setData(data);
			setLoading(false);
			return data;
		} catch (err) {
			setError(error);
			setLoading(false);
			throw err;
		}
	};

	useEffect(() => {
		if (immediate) {
			act().catch((_err) => {});
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		data,
		loading,
		error,
		act,
	};
}
