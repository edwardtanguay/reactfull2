import express from 'express';
import bodyParser from 'body-parser';

const articlesInfo = {
	'learn-react': {
		"upvotes": 0
	},
	'learn-node': {
		"upvotes": 0
	},
	'my-thoughts-on-resumes': {
		"upvotes": 0
	}
};

const app = express();

app.use(bodyParser.json());

// app.get('/hello', (req, res) => res.send("Hello."));
// app.get('/hello/:name', (req, res) => res.send(`Hello, ${req.params.name}.`));
// app.post('/hello', (req, res) => res.send(`Hello from post, ${req.body.name}.`));

app.post('/api/articles/:name/upvote', (req, res) => {
	const articlesName = req.params.name;

	articlesInfo[articlesName].upvotes += 2;

	res.status(200).send(`Article ${articlesName} has ${articlesInfo[articlesName].upvotes} votes.`);
})


app.listen(8000, () => console.log("Listening on port 8000"));