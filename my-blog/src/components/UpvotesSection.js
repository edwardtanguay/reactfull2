import React from 'react';

const UpvotesSection = ({ articleName, upvotes, setArticleInfo }) => {
	const upvoteArticle = async () => {
		const result = await fetch(`/api/articles/${articleName}/upvote`, {
			method: 'post'
		});
		console.log(result);
		const body = await result.json();
		setArticleInfo(body);
	}

	return (
		<div className="upvotes-section">
			<button onClick={() => upvoteArticle()}>Add Upvote</button>
			<p>This article has been upvoted {upvotes} times.</p>
		</div>
	);
};

export default UpvotesSection;