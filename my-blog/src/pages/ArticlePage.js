import React, { useState, useEffect } from 'react';
import articleContent from './article-content';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }) => {
	const name = match.params.name;
	const article = articleContent.find(m => m.name === name);

	const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

	useEffect(() => {
		const fetchData = async () => {
			const result = await fetch(`/api/articles/${name}`);
			const body = await result.json();
			setArticleInfo(body);
		};
		fetchData();
		//setArticleInfo({ upvotes: Math.ceil(Math.random() * 100) });
	}, [name]);

	if (!article) return <NotFoundPage />;

	const otherArticles = articleContent.filter(m => m.name !== name);

	return (
		<>
			<h1>{article.title}</h1>
			<UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
			{article.content.map((text, key) => (
				<p key={key}>{text}</p>
			))}
			<CommentsList comments={articleInfo.comments} />
			<AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />

			<ArticlesList articles={otherArticles} />
		</>
	)
}

export default ArticlePage;