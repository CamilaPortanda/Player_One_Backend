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

exports.logRockPageView = async (req, res) => {
  try {
    const { user_id } = req.usuario  // viene del token
    const { product_id } = req.body
    await InteractionEvent.create({
      user_id,
      event_type_id: 3,
      product_id,
      source: 'web',
    })
    res.json({ mensaje: 'Event logged' })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Error logging event' })
  }
}

exports.logGamePageView = async (req, res) => {
  try {
    const { user_id } = req.usuario  // viene del token
    const { product_id } = req.body
    await InteractionEvent.create({
      user_id,
      event_type_id: 4,
      product_id,
      source: 'web',
    })
    res.json({ mensaje: 'Event logged' })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Error logging event' })
  }
}

exports.logProdDescChanged = async (req, res) => {
  try {
    const { user_id } = req.usuario  // viene del token
    const { product_id } = req.body
    await InteractionEvent.create({
      user_id,
      event_type_id: 6,
      product_id,
      source: 'web',
    })
    res.json({ mensaje: 'Event logged' })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Error logging event' })
  }
}

exports.logProductAdded = async (req, res) => {
  try {
    const { user_id } = req.usuario  // viene del token
    const { product_id } = req.body
    await InteractionEvent.create({
      user_id,
      event_type_id: 7,
      product_id,
      source: 'web',
    })
    res.json({ mensaje: 'Event logged' })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Error logging event' })
  }
}