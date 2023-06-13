import api from './api';

export async function submitCode(token: string) {
	const headers = {
		Authorization: `Bearer ${token}`,
		'Content-Type': 'application/json',
		'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_API_HOST,
		'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
	};

	const { data } = await api.post('/submit', {}, { headers });
	return data;
}
