// require express and start a server
const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;
// start listening on port 3000

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './../client/index.html'));
});

app.listen(PORT, () => {
  console.log(`started a new app: listening on port ${PORT}`);
});
