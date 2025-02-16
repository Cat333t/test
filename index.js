const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.static('./templates'));

app.get('/', (req, res) => {
  res.send(fs.readFileSync('./templates/index.html', 'utf8'));
});

const PORT = 5000;
const HOST = 'localhost'

app.listen(PORT, HOST, () => {
    console.log(`Server is running on: http://${HOST}:${PORT}`);
});