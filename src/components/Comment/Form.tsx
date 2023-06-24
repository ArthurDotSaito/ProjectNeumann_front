import { useState, useEffect } from 'react';

import { CommentFormProps } from '@/utils/protocols';

export default function CommentForm({
	postId,
	postCommentData,
	postCommentLoading,
	postCommentError,
	postCommentFunction,
}: CommentFormProps) {
	const [content, setContent] = useState('');
	const [isDisabled, setIsDisabled] = useState(true);

	const submitComment = async (e: any) => {
		e.preventDefault();
		try {
			await postCommentFunction(postId, content);
			setContent('');
		} catch (error) {
			alert(error);
		}
	};

	const handleContentChange = (e: any) => {
		const inputValue = e.target.value;
		setContent(inputValue);
		setIsDisabled(inputValue.trim() === '');
	};

	return (
		<form className="flex flex-col items-center mx-auto" onSubmit={submitComment}>
			<textarea
				className=" xs:w-[60%] w-[90%] px-2 py-1 bg-gray-800 text-white border border-gray-600 rounded "
				rows={3}
				placeholder={`What are your thoughts?`}
				value={content}
				onChange={handleContentChange}
			/>
			<div className="flex items-center justify-end mt-4 w-[90%] xs:w-[60%] ">
				<div className="flex items-center">
					<button className="py-2 px-4 rounded bg-blue-600 text-white disabled:opacity-40 hover:bg-blue-700" disabled={isDisabled}>
						Send
					</button>
				</div>
			</div>
		</form>
	);
}
