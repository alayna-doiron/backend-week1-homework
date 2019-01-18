const express = require('express');
const app = express();

app.listen(3000);
console.log('Listening on port 3000');

var countA = 0;
var countB = 0;

app.get('/', (req,res) => {
	res.send();
});

app.get('/a', (req,res) => {
	countA++;
	res.send('<h1>Votes for A: '+countA+'</h1> <h1>Votes for B: '+countB+'</h1>');
});

app.get('/b', (req,res) => {
	countB++;
	res.send('<h1>Votes for A: '+countA+'</h1> <h1>Votes for B: '+countB+'</h1>');
});
