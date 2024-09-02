const express = require('express');
const port = 2000;

app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`now listening on port ${port}`);
});