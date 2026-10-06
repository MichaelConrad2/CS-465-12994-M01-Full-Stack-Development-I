
const travel = async (req, res) => {
  const port = req.app.get('port') ||
    process.env.PORT || '3000';

  const endpoint =
    `http://127.0.0.1:${port}/api/trips`;

  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });

    if (!response.ok) {
      return res.status(response.status).render('travel', {
        title: 'Travlr Getaways - Travel',
        travelPage: true,
        trips: [],
        message: 'Trip information is unavailable.'
      });
    }

    const trips = await response.json();

    return res.render('travel', {
      title: 'Travlr Getaways - Travel',
      travelPage: true,
      trips: trips
    });

  } catch (err) {
    console.error(err);

    return res.status(500).render('travel', {
      title: 'Travlr Getaways - Travel',
      travelPage: true,
      trips: [],
      message: 'Unable to load trips.'
    });
  }
};

module.exports = { travel };
