const Industry = require('../models/industries');

exports.getAllIndustries = async (req, res) => {
  try {
    const industries = await Industry.findAll();
    res.json(industries);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Error getting industries' });
  }
};