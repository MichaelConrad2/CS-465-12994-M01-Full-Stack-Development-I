const model = require('../models/travlr');

/* GET travel page. */
const travel = (req, res) => {
  res.render('travel', {
    title: 'Travlr Getaways - Travel',
    travelPage: true,
    trips: model.trips
  });
};

module.exports = { travel };