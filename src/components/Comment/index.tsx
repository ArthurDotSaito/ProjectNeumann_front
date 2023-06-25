import CommentForm from './Form';
import usePostComment from '@/hooks/api/usePostComment';
import useGetComment from '@/hooks/api/useGetComments';
import CommentList from './List';

export default function Comment({ postId }: { postId: string | string[] }) {
	const { postCommentData, postCommentLoading, postCommentError, postCommentFunction } = usePostComment();
	const { getCommentData, getCommentLoading, getCommentError, getCommentFunction } = useGetComment();

	return (
		<main className="mt-20">
			<CommentForm
				postId={postId}
				postCommentData={postCommentData}
				postCommentLoading={postCommentLoading}
				postCommentError={postCommentError}
				postCommentFunction={postCommentFunction}
			></CommentForm>
			<CommentList
				postId={postId}
				getCommentData={getCommentData}
				getCommentLoading={getCommentLoading}
				getCommentError={getCommentError}
				getCommentFunction={getCommentFunction}
			></CommentList>
		</main>
	);
}
