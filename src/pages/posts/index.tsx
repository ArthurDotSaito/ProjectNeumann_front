import { useEffect, useState } from 'react';
import usePosts from '@/hooks/api/usePosts';
import Header from '@/components/Header';
import { Post } from '@/utils/protocols';
import PostList from '@/components/Post/PostList';
import Footer from '@/components/Footer';

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
		<>
			<div className="flex flex-col py-2 min-h-screen bg-[#17181C] text-white z-negative-2">
				<Header />
				<section className="mt-6 mx-auto max-w-2xl">
					<h2 className="text-4xl font-bold dark:text-white/90">Posts</h2>
					<ul className="w-full">
						{postsData ? postsData.map((post: Post) => <PostList key={post.id} post={post}></PostList>) : <li>Loading posts...</li>}
					</ul>
				</section>
			</div>
			<Footer></Footer>
		</>
	);
}
