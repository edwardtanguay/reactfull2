import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './Navbar';
import ScrollToTop from './components/ScrollToTop';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

function App() {
	return (
		<Router>
			<ScrollToTop />
			<div className="App">
				<Navbar />
				<div id="page-body">
					<Switch>
						<Route path="/" component={HomePage} exact />
						<Route path="/about" component={AboutPage} exact />
						<Route path="/articles-list" component={ArticlesListPage} exact />
						<Route path="/article/:name" component={ArticlePage} exact />
						<Route component={NotFoundPage} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
