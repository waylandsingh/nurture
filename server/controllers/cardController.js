const Card = require('../models/cardModel');

const card1props = {
  name: 'Kefir',
  // lastFeedDate:fakeTime.toString(),
  // nextFeedDate:fakeTime.toString(),
  feedInstructions: 'blah blah',
  notes: 'take good care of me',
  archived: false,
};

// Card.create({ ...card1props });

const cardController = {
  getCards: async (req, res, next) => {
    res.locals.cardsList = await Card.find({});

    next();
  },
  // add card
  addCard: async (req, res, next) => {
    // console.log(req.body);
    const cardholder = await Card.create({ ...req.body });
    res.locals.card = cardholder;
    // console.log(cardholder._id.valueOf());//getting the id for later
    next();
  },
  // edit card
  editCard: async (req, res, next) => {
    // need to get the ID inside the request
    const _id = req.body._id;
    // ideally re-transmits the info inside the form

    // also need the fields to update, if needed
    // find and update and return using that ID
    try {
      // const cardholder = await Card.findOne({ _id: _id });
      const cardholder = await Card.findOneAndUpdate({ _id: _id }, req.body);
      res.locals.card = await Card.find({ _id: _id });
      next();
    } catch (error) {
      next(error);
    }
  },
  // delete card
  deleteCard: async (req, res, next) => {
    const _id = req.body._id;
    try {
      // find and delete and return using that ID
      res.locals.card = await Card.findOneAndDelete({ _id: _id });
      next();
    } catch (error) {
      next(error);
    }
  },
  feedCard: async (req, res, next) => {
    // const _id = req.body._id; // get cardID
    const { _id, feedPeriodDays } = req.body;
    try {
      // find and update the feed dates and return using that ID
      // update feed date to now
      const lastfeed = new Date();
      let nextfeed = new Date();
      nextfeed.setDate(nextfeed.getDate() + feedPeriodDays);
      await Card.findOneAndUpdate(
        { _id: _id },
        {
          lastFeedDate: lastfeed.now,
          nextFeedDate: nextfeed,
        }
      );
      res.locals.card = await Card.findOne({ _id: _id });
      next();
    } catch (error) {
      next(error);
    }
  },
  // feed and re-up
};

module.exports = cardController;
