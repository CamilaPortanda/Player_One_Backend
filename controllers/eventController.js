const InteractionEvent = require('../models/interactionEvent');

exports.logProductPageView = async (req, res) => {
  try {
    const { user_id } = req.usuario  // viene del token
    await InteractionEvent.create({
      user_id,
      event_type_id: 2,
      source: 'web',
    })
    res.json({ mensaje: 'Event logged' })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Error logging event' })
  }
}

exports.logProductClick = async (req, res) => {
  try {
    const { user_id } = req.usuario
    const { product_id } = req.body
    await InteractionEvent.create({
      user_id,
      event_type_id: 1,
      product_id,
      source: 'web',
    })
    res.json({ mensaje: 'Event logged' })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Error logging event' })
  }
}