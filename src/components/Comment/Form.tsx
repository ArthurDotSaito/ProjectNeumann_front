export default function CommentForm() {
	return (
		<form>
			<textarea
				className="flex w-full max-h-40 p-3 rounded resize-y bg-gray-200 text-gray-900 placeholder-gray-500"
				rows={2}
				placeholder={`What are your thoughts?`}
			/>

			<div className="flex items-center mt-4">
				<div className="flex items-center space-x-6">
					<button className="py-2 px-4 rounded bg-blue-600 text-white disabled:opacity-40 hover:bg-blue-700">Send</button>
				</div>
			</div>
		</form>
	);
}
