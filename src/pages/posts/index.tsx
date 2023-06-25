import { useEffect, useState } from 'react';

import Format from '@/layout/format';
import usePosts from '@/hooks/api/usePosts';
import { Post } from '@/utils/protocols';
import PostList from '@/components/Post/PostList';

export default function Posts() {
	const { postsData, postsLoading, postsError, postsFunction } = usePosts();
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await postsFunction();
			setPosts(result);
		};

		fetchData();
	}, []);

	return (
		<Format>
			<section className="mt-6 mx-auto max-w-2xl">
				<h2 className="text-4xl font-bold dark:text-white/90 text-center">Posts</h2>
				<ul className="w-full">
					{postsData ? postsData.map((post: Post) => <PostList key={post.id} post={post}></PostList>) : <li>Loading posts...</li>}
				</ul>
			</section>
		</Format>
	);
}
