const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Yo');
});

app.get('/demo', (req, res) => {
	res.set('X-fm-fs', 'Just random header');
	res.status(418);
	res.send('I prefer coffee');
});

app.listen(port, () => console.log(`Example app listening on port ${port}`)); 
