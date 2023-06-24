import { postComment } from '@/services/postCommentApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function usePostComment() {
	const token = useToken();

	const {
		data: postCommentData,
		loading: postCommentLoading,
		error: postCommentError,
		act: postCommentFunction,
	} = useAsync((postId, content) => postComment(token, postId, content), false);

	return { postCommentData, postCommentLoading, postCommentError, postCommentFunction };
}
