const express = require('express');

const router = express.Router();

const ctrlTrips =
  require('../controllers/trips');

// GET all trips
router.get(
  '/trips',
  ctrlTrips.tripsList
);

// GET one trip
router.get(
  '/trips/:tripCode',
  ctrlTrips.tripsFindByCode
);

// POST new trip
router.post(
  '/trips',
  ctrlTrips.tripsAddTrip
);

// PUT existing trip
router.put(
  '/trips/:tripCode',
  ctrlTrips.tripsUpdateTrip
);

// DELETE existing trip
router.delete(
  '/trips/:tripCode',
  ctrlTrips.tripsDeleteTrip
);

module.exports = router;