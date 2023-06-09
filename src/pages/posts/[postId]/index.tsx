import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Parser from 'html-react-parser';

import { Post } from '@/utils/protocols';
import getFormattedDate from '@/utils/getFormattedDate';
/* import { getPostById } from '@/services/postByidApi';
import { getAllPosts } from '@/services/postsApi';
import { getAccessToken } from '@/utils/getTokenLocalStorage'; */
import usePostById from '@/hooks/api/usePostById';
import Format from '@/layout/format';
import Comment from '@/components/Comment';

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
			try {
				const result = await postByIdFunction(postId);
				console.log(result);
				setPostDetails(result);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, [postId]);

	const pubDate = getFormattedDate(postDetails.date);

	return (
		<Format>
			<main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto flex flex-col py-2 bg-[#17181C] text-white z-negative-2">
				<h1 className="text-4xl my-2">{postDetails.title}</h1>
				<p className="mt-0 my-5">{pubDate}</p>
				<article className="text-left">
					<section className="list-disc list-inside">{Parser(postDetails.content)}</section>
					<p className="my-9">
						<Link href="/posts">← Back to home</Link>
					</p>
				</article>
			</main>
			<Comment postId={postId}></Comment>
		</Format>
	);
}
