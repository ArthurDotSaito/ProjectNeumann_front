import { useEffect } from 'react';
import usePosts from '@/hooks/api/usePosts';
import Header from '@/components/Header';
import { Post } from '@/utils/protocols';

export default function Posts() {
	const { postsData, postsLoading, postsError, postsFunction } = usePosts();

	useEffect(() => {
		postsFunction();
	}, []);

	return (
		<div className="flex flex-col py-2 min-h-screen bg-[#17181C] text-white z-negative-2">
			<Header />
			<section className="mt-6 mx-auto max-w-2xl">
				<h2 className="text-4xl font-bold dark:text-white/90">Posts</h2>
				<ul className="w-full">
					{postsData ? (
						postsData.map((post: Post) => (
							<li key={post.id}>
								<h3>{post.title}</h3>
							</li>
						))
					) : (
						<li>Loading posts...</li>
					)}
				</ul>
			</section>
		</div>
	);
}
