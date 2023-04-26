// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = require('./../config');
const Card = require('../models/cardModel');

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// mongo = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

//

const card1props = {
  name: 'Kefir',
  // lastFeedDate:fakeTime.toString(),
  // nextFeedDate:fakeTime.toString(),
  feedInstructions: 'blah blah',
  notes: 'take good care of me',
  archived: false,
};

Card.create({ ...card1props });

const cardController = {
  getCards: async (req, res, next) => {
    res.locals.cardsList = await Card.find({});

    next();
  },
};

module.exports = cardController;

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db('admin').command({ ping: 1 });
//     console.log(
//       'Pinged your deployment. You successfully connected to MongoDB!'
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// // run().catch(console.dir);
