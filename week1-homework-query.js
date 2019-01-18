const express = require('express');
const app = express();

app.listen(8000);
console.log('Listening on port 8000');

var person = [];
 app.get('/', (req,res) => {
	res.send();
 });

app.get('/person', (req,res) => {
	if(req.query.qty) req.query.qty = +req.query.qty;
	if(req.query.price) req.query.price = +req.query.price;
	items.push(req.query);
	res.json(person);
});
