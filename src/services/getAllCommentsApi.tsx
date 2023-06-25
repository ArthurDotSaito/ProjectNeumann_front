import api from './api';

export async function getAllComments(token: string, postId: string) {
	const { data } = await api.get(`/comments/${postId}`, { headers: { Authorization: `Bearer ${token}` } });
	return data;
}
