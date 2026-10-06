const mongoose = require('mongoose');

const Trip = mongoose.model('trips');


// ==========================================
// GET ALL TRIPS
// GET /api/trips
// ==========================================

const tripsList = async (req, res) => {

  try {

    const trips =
      await Trip.find({}).exec();

    return res
      .status(200)
      .json(trips);

  } catch (err) {

    console.error(err);

    return res
      .status(500)
      .json({
        message:
          'Unable to retrieve trips'
      });

  }
};


// ==========================================
// GET ONE TRIP
// GET /api/trips/:tripCode
// ==========================================

const tripsFindByCode =
  async (req, res) => {

    const tripCode =
      req.params.tripCode;

    if (!tripCode) {

      return res
        .status(400)
        .json({
          message:
            'Trip code is required'
        });

    }

    try {

      const trip =
        await Trip
          .findOne({
            code: tripCode
          })
          .exec();

      if (!trip) {

        return res
          .status(404)
          .json({
            message:
              'Trip not found'
          });

      }

      return res
        .status(200)
        .json(trip);

    } catch (err) {

      console.error(err);

      return res
        .status(500)
        .json({
          message:
            'Unable to retrieve trip'
        });

    }
  };


// ==========================================
// CREATE TRIP
// POST /api/trips
// ==========================================

const tripsAddTrip =
  async (req, res) => {

    try {

      const trip =
        await Trip.create({

          code: req.body.code,
          name: req.body.name,
          length: req.body.length,
          start: req.body.start,
          resort: req.body.resort,
          perPerson: req.body.perPerson,
          image: req.body.image,
          description:
            req.body.description

        });

      return res
        .status(201)
        .json(trip);

    } catch (err) {

      console.error(err);

      return res
        .status(400)
        .json({
          message:
            'Unable to create trip',
          error: err.message
        });

    }
  };


// ==========================================
// UPDATE TRIP
// PUT /api/trips/:tripCode
// ==========================================

const tripsUpdateTrip =
  async (req, res) => {

    try {

      const trip =
        await Trip.findOneAndUpdate(

          {
            code:
              req.params.tripCode
          },

          {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson:
              req.body.perPerson,
            image: req.body.image,
            description:
              req.body.description
          },

          {
            new: true,
            runValidators: true
          }

        ).exec();

      if (!trip) {

        return res
          .status(404)
          .json({
            message:
              'Trip not found'
          });

      }

      return res
        .status(200)
        .json(trip);

    } catch (err) {

      console.error(err);

      return res
        .status(400)
        .json({
          message:
            'Unable to update trip',
          error: err.message
        });

    }
  };


// ==========================================
// DELETE TRIP
// DELETE /api/trips/:tripCode
// ==========================================

const tripsDeleteTrip =
  async (req, res) => {

    try {

      const trip =
        await Trip.findOneAndDelete({
          code:
            req.params.tripCode
        }).exec();

      if (!trip) {

        return res
          .status(404)
          .json({
            message:
              'Trip not found'
          });

      }

      return res
        .status(200)
        .json({
          message:
            'Trip deleted successfully'
        });

    } catch (err) {

      console.error(err);

      return res
        .status(500)
        .json({
          message:
            'Unable to delete trip'
        });

    }
  };


module.exports = {

  tripsList,

  tripsFindByCode,

  tripsAddTrip,

  tripsUpdateTrip,

  tripsDeleteTrip

};