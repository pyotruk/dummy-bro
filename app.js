const express = require('express');
const cors = require('cors');

const PORT = 3033;

const app = express();
app.use(cors());

app.get('/500', (req, res) => res.status(500).send('ololo'));

app.listen(PORT, () => console.log(`Dummy-Bro listening on port ${PORT}!`));
