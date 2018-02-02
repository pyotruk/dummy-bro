const express = require('express');
const app = express();

const PORT = 3033;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => console.log(`Dummy-Bro listening on port ${PORT}!`));