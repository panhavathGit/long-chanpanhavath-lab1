const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, GitHub Actions!');
    res.send('hi test ');
    res.send('hi test second time ');
});
module.exports = app;