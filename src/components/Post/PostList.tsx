import Link from 'next/link';
import { w } from 'windstitch';
import { Post } from '@/utils/protocols';
import getFormattedDate from '@/utils/getFormattedDate';
import usePostById from '@/hooks/api/usePostById';

type Props = {
	post: Post;
};

export default function PostList({ post }: Props) {
	const { id, title, date } = post;
	const { postByIdData, postByIdError, postByIdLoading, postByIdFunction } = usePostById();
	const formattedDate = getFormattedDate(date);

	async function handlePostClick(postId: number) {
		try {
			const response = await postByIdFunction(postId);
		} catch (err) {
			console.log('deu ruim');
		}
	}

	return (
		<PostCard className="mt-4 text-2xl dark:text-white/90">
			<Link className="underline hover:text-black/70 dark:hover:text-white" href={`/posts/${id}`} onClick={() => handlePostClick(id)}>
				{title}
			</Link>
			<br />
			<p className="text-sm mt-1">{formattedDate}</p>
		</PostCard>
	);
}

const PostCard = w.li(`
	bg-transparent 
	border-none 
	rounded-border
	rounded-md
	cursor-pointer 
	transition-background duration-ease-in-out 
	hover:bg-gray-800
	p-3
`);
