const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, GitHub Actions!');
    res.send('hi test ');
});
module.exports = app;