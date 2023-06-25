import { getAllComments } from '@/services/getAllCommentsApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function useGetComment() {
	const token = useToken();

	const {
		data: getCommentData,
		loading: getCommentLoading,
		error: getCommentError,
		act: getCommentFunction,
	} = useAsync((postId) => getAllComments(token, postId), false);

	return { getCommentData, getCommentLoading, getCommentError, getCommentFunction };
}
