
const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({}).exec();

    if (trips.length === 0) {
      return res.status(404).json({
        message: 'No trips found'
      });
    }

    return res.status(200).json(trips);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: 'Unable to retrieve trips'
    });
  }
};

const tripsFindByCode = async (req, res) => {
  const tripCode = req.params.tripCode;

  if (!tripCode || !tripCode.trim()) {
    return res.status(400).json({
      message: 'Trip code is required'
    });
  }

  try {
    const trip = await Trip.findOne({
      code: tripCode
    }).exec();

    if (!trip) {
      return res.status(404).json({
        message: 'Trip not found'
      });
    }

    return res.status(200).json(trip);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: 'Unable to retrieve trip'
    });
  }
};

module.exports = {
  tripsList,
  tripsFindByCode
};
