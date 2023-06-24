import CommentForm from './Form';
import usePostComment from '@/hooks/api/usePostComment';

export default function Comment({ postId }: { postId: string | string[] }) {
	const { postCommentData, postCommentLoading, postCommentError, postCommentFunction } = usePostComment();

	return (
		<main className="mt-20">
			<CommentForm
				postId={postId}
				postCommentData={postCommentData}
				postCommentLoading={postCommentLoading}
				postCommentError={postCommentError}
				postCommentFunction={postCommentFunction}
			></CommentForm>
		</main>
	);
}
