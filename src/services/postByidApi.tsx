import api from './api';

export async function getAllPosts(token: string, postId: string) {
	const { data } = await api.get(`/posts/${postId}`, { headers: { Authorization: `Bearer ${token}` } });
	return data;
}
