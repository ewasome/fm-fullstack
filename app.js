const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Yo');
});

app.listen(port, () => console.log(`Exaple app listening on port ${port}`)); 
