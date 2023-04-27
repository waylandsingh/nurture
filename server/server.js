// require express and start a server
const path = require('path');
const express = require('express');

// mongodbAtlas
const cardController = require('./controllers/cardController');
const { captureRejectionSymbol } = require('events');
const mongoose = require('mongoose');
const { databaseURI } = require('./config');
mongoose.connect(databaseURI);

const app = express();
const PORT = 3000;
// start listening on port 300099

app.use(express.static('client'));
app.use('/build', express.static(path.join(__dirname, '../build')));

app.use(express.json());
app.get('/', async (req, res) => {
  console.log('in the root');
  res.sendFile(path.resolve(__dirname, './../client/index.html'));
});

app.get('/getCards', cardController.getCards, (req, res) => {
  // query the mongo to get all cards
  console.log('here in the get cards route!');
  // console.log(res.locals.cardsList);
  res.status(200).json(res.locals.cardsList);
});

app.post('/addCard', cardController.addCard, (req, res) => {
  res.status(200).json(res.locals.card);
});

app.put('/editCard', cardController.editCard, (req, res) => {
  res.status(200).json(res.locals.card);
});

app.delete('/deleteCard', cardController.deleteCard, (req, res) => {
  res.status(200).json(res.locals.card);
});

app.patch('/feedCard', cardController.feedCard, (req, res) => {
  res.status(200).json(res.locals.card);
});

app.listen(PORT, () => {
  console.log(`started a new app: listening on port ${PORT}`);
});
