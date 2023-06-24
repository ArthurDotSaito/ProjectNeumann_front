import api from './api';

export async function postComment(token: string, postId: string, content: string) {
	const { data } = await api.post(`/comments/${postId}`, { content }, { headers: { Authorization: `Bearer ${token}` } });
	return data;
}
