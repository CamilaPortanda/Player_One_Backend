const sequelize = require('../config/database');

exports.getPercentageCompleted = async (req, res) => {
  try {
    const results = await Promise.all([1, 2, 3].map(id =>
      sequelize.query(`SELECT percentageCompletedPerMinigame(${id}) as percentage`, 
        { type: sequelize.QueryTypes.SELECT })
    ))
    res.json(results.map((r, i) => ({ minigame_id: i + 1, percentage: r[0].percentage })))
  } catch (err) { res.status(500).json({ error: err.message }) }
}

exports.getAvgMedianTime = async (req, res) => {
  try {
    const results = await Promise.all([1, 2, 3].map(id =>
      sequelize.query(`SELECT * FROM averageAndMedianTimePerMinigame(${id})`,
        { type: sequelize.QueryTypes.SELECT })
    ))
    res.json(results.map((r, i) => ({ minigame_id: i + 1, ...r[0] })))
  } catch (err) { res.status(500).json({ error: err.message }) }
}

exports.rankingProducts = async (req, res) => {
  try {
    const results = await sequelize.query(`SELECT * FROM productsRankedByClicks()`,
      { type: sequelize.QueryTypes.SELECT })
    res.json(results)
  } catch (err) { res.status(500).json({ error: err.message }) }
}

exports.getTotalProductAccesses = async (req, res) => {
  try {
    const results = await sequelize.query(`SELECT totalProductSectionAccesses() as total`,
      { type: sequelize.QueryTypes.SELECT })
    res.json({ total: results[0].total })
  } catch (err) { res.status(500).json({ error: err.message }) }
}

exports.getUsersPerIndustry = async (req, res) => {
  try {
    const results = await sequelize.query(`SELECT * FROM usersPerIndustry()`,
      { type: sequelize.QueryTypes.SELECT })
    res.json(results)
  } catch (err) { res.status(500).json({ error: err.message }) }
}

exports.getUsersPerCountry = async (req, res) => {
  try {
    const results = await sequelize.query(`SELECT * FROM usersPerCountry()`,
      { type: sequelize.QueryTypes.SELECT })
    res.json(results)
  } catch (err) { res.status(500).json({ error: err.message }) }
}