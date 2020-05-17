import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }) => {
	const name = match.params.name;
	const article = articleContent.find(m => m.name === name);

	if (!article) return <NotFoundPage />;

	const otherArticles = articleContent.filter(m => m.name !== name);

	return (
		<>
			<h1>{article.title}</h1>
			{article.content.map((text, key) => (
				<p key={key}>{text}</p>
			))}
			<ArticlesList articles={otherArticles} />
		</>
	)
}

export default ArticlePage;