const express = require('express');
const router = express.Router();

const ctrlTrips = require('../controllers/trips');
const ctrlAuth = require('../controllers/authentication');
const { requireAuth } = require('../middleware/auth');

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

router.get('/trips', ctrlTrips.tripsList);
router.get('/trips/:tripCode', ctrlTrips.tripsFindByCode);

router.post('/trips', requireAuth, ctrlTrips.tripsAddTrip);
router.put('/trips/:tripCode', requireAuth, ctrlTrips.tripsUpdateTrip);
router.delete('/trips/:tripCode', requireAuth, ctrlTrips.tripsDeleteTrip);

module.exports = router;