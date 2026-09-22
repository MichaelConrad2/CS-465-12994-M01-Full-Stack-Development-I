const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({}).exec();

    if (!trips || trips.length === 0) {
      return res.status(404).json({
        message: 'No trips found'
      });
    }

    return res.status(200).json(trips);
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      message: 'Unable to retrieve trips',
      error: err.message
    });
  }
};

module.exports = {
  tripsList
};