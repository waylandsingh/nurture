// require express and start a server
const path = require('path');
const express = require('express');

// mongodbAtlas
const client = require('./controllers/cardController');

const app = express();
const PORT = 3000;
// start listening on port 300099

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', async (req, res) => {
  try {
    await client.connect();
    const databaseList = await client.db().admin().listDatabases();
    console.log(databaseList.databases);
  } catch (e) {
    console.log(e);
  } finally {
    client.close();
  }
  console.log('in the root');
  res.sendFile(path.resolve(__dirname, './../client/index.html'));
});

app.listen(PORT, () => {
  console.log(`started a new app: listening on port ${PORT}`);
});
