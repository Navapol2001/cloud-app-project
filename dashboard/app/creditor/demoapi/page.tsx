"use client";
import { useEffect, useState } from 'react';

type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

export default function JsonPlaceholderPosts() {
	// State to store the posts
	const [posts, setPosts] = useState<Post[]>([]);
	// State to track loading status
	const [isLoading, setIsLoading] = useState(true);
	// State to track any error
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		// Function to fetch posts
		const fetchPosts = async () => {
			try {
				const response = await fetch('https://jsonplaceholder.typicode.com/posts');
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				setPosts(data); // Set the posts in state
				setIsLoading(false); // Update loading status
			} catch (err: any) {
				setError(err.message);
				setIsLoading(false);
			}
		};

		fetchPosts();
	}, []);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div>
			<h1>Posts</h1>
			{posts.map(post => (
				<div key={post.id}>
					<h2>{post.title}</h2>
					<p>{post.body}</p>
				</div>
			))}
		</div>
	);
}