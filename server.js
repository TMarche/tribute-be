const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const tributeRouter = require('./api/tribute/tribute.router');

const app = express();
const PORT = 3333;

app.use(bodyParser.json());
app.use(cors());

app.use('/api/tribute', tributeRouter);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
