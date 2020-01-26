const user = require('../models/user');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(req, res) {
    const { latitude, longitude, knowledge } = req.query;
  
    const techsArray = parseStringAsArray(knowledge);

    const users = await user.find({
      knowledge: {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    return res.json({ users });
  }
}