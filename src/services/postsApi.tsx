import api from './api';

export async function getAllPosts(token: string) {
	const { data } = await api.get('/posts', { headers: { Authorization: `Bearer ${token}` } });
	return data;
}
