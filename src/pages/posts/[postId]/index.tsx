import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Post } from '@/utils/protocols';
import getFormattedDate from '@/utils/getFormattedDate';
/* import { getPostById } from '@/services/postByidApi';
import { getAllPosts } from '@/services/postsApi';
import { getAccessToken } from '@/utils/getTokenLocalStorage'; */
import usePostById from '@/hooks/api/usePostById';

import Header from '@/components/Header';

/* export async function getStaticProps(context: any) {
	const { params } = context;

	const acessToken = getAccessToken();
	console.log(acessToken);

	const data = await getPostById(acessToken, params.postId);

	const post = await data.json();

	return {
		props: { post },
	};
}

export async function getStaticPaths() {
	const acessToken = getAccessToken();

	const response = await getAllPosts(acessToken);

	const data = await response.json();

	const paths = data.map((post: Post) => {
		return {
			params: {
				postId: `${post.id}`,
			},
		};
	});

	return { paths, fallback: false };
} */

export function generateMetadata({ post }: { post: Post }) {
	if (!post.id) return <div>PostId não foi fornecido.</div>;

	if (!post) {
		return {
			title: 'Post not found',
		};
	}

	return {
		title: post.title,
	};
}

export default function Post() {
	const router = useRouter();
	const postId = router.query.postId;
	console.log(postId);
	if (!postId) return <div>PostId não foi fornecido.</div>;
	const { postByIdData, postByIdError, postByIdLoading, postByIdFunction } = usePostById();
	const [postDetails, setPostDetails] = useState({ id: 0, title: '', content: '', date: '', createdAt: '', updatedAt: '' });

	useEffect(() => {
		const fetchData = async () => {
			const result = await postByIdFunction(postId);
			console.log(result);
			setPostDetails(result);
		};

		fetchData();
	}, []);

	const pubDate = getFormattedDate(postDetails.date);

	return (
		<main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto flex flex-col py-2 min-h-screen bg-[#17181C] text-white z-negative-2">
			<Header></Header>
			<h1 className="text-3xl mt-4 mb-0">{postDetails.title}</h1>
			<p className="mt-0">{pubDate}</p>
			<article>
				<section dangerouslySetInnerHTML={{ __html: postDetails.content }} />
				<p>
					<Link href="/posts">← Back to home</Link>
				</p>
			</article>
		</main>
	);
}
