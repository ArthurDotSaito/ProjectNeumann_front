import api from './api';

export async function submitCode(token: string) {
	const headers = {
		Authorization: `Bearer ${token}`,
		'Content-Type': 'application/json',
		'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_API_HOST,
		'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
	};

	const params = {
		base64_encoded: 'true',
		fields: '*',
	};

	const options = {
		headers,
		params,
	};

	const { data } = await api.post('/submit', {}, options);
	return data;
}
