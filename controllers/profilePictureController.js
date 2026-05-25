const ProfilePicture = require('../models/profilePicture');
const User = require('../models/user');

exports.getAllPfps = async (req, res) => {

    try {

        const pfps = await ProfilePicture.findAll({
            where: {
                active: true
            }
        });

        res.json(pfps);

    } catch (err) {

        console.log(err);

        res.status(500).json({
            error: 'Error getting profile pictures'
        });
    }
};


// UPDATE USER PFP
exports.updateUserPfp = async (req, res) => {

    const {
        user_id,
        pfp_id
    } = req.body;

    try {

        const usuario = await User.findByPk(user_id);

        if (!usuario) {

            return res.status(404).json({
                error: 'Usuario no encontrado'
            });
        }

        usuario.pfp_id = pfp_id;

        await usuario.save();

        res.json({
            mensaje: 'PFP actualizada correctamente',
            usuario
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            error: 'Error updating profile picture'
        });
    }
};