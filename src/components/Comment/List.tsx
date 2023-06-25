import { useEffect, useState } from 'react';

import { CommentListProps } from '@/utils/protocols';
import getFormattedDate from '@/utils/getFormattedDate';

export default function CommentList({ postId, getCommentData, getCommentLoading, getCommentError, getCommentFunction }: CommentListProps) {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await getCommentFunction(postId);
			setComments(result);
		};

		fetchData();
	}, []);

	return (
		<div className="space-y-6 mt-10">
			{comments &&
				comments.map((comment: any) => {
					return (
						<div key={comment.created_at} className="flex flex-col w-full items-center">
							<div className="flex-grow w-[60%] border-b border-gray-800">
								<div className="flex space-x-2">
									<b>{comment.author.username}</b>
									<time className="text-gray-400">{getFormattedDate(comment.createdAt)}</time>
								</div>
								<div className="flex flex-start px-2 py-1 text-white ">{comment.content}</div>
							</div>
						</div>
					);
				})}
		</div>
	);
}
