// This controller uses functions from the database
// instead of implementing the full queries here
// with Sequelize.
const sequelize = require('../config/database.js');

exports.getPlayerData = async (req, res) => {
    try {
        const userId = req.usuario.user_id;

        const result = await sequelize.query(
            'SELECT * FROM get_player_progress(:userId)',
            {
                replacements: { userId },
                type: sequelize.QueryTypes.SELECT
            }
        );

        res.json({
            completedMinigames:
                result[0].completed_minigames
        });
    }
    catch (err) {
        console.error(err);

        res.status(500).json({
            error: 'Error al obtener progreso'
        });
    }
};

exports.postAttempt = async (req, res) => {
    try {
        const userId = req.usuario.user_id;

        const {
            minigameId,
            completed,
            score,
            timeBegin,
            timeEnd
        } = req.body;

        await sequelize.query(
            `
            CALL create_attempt(
                :userId,
                :minigameId,
                :completed,
                :score,
                :timeBegin,
                :timeEnd
            )
            `,
            {
                replacements: {
                    userId,
                    minigameId,
                    completed,
                    score,
                    timeBegin,
                    timeEnd
                }
            }
        );

        res.json({
            success: true
        });
    }
    catch (err) {
        console.error(err);

        res.status(500).json({
            error: 'Error al crear intento'
        });
    }
};

/* // unused version
exports.getPlayerData = async (req, res) => {
    try {
        const userId = req.usuario.user_id;

        const result = await sequelize.query(
            'SELECT * FROM get_player_progress(:userId)',
            {
                replacements: { userId },
                type: sequelize.QueryTypes.SELECT
            }
        );

        res.json(result);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            error: 'Error al obtener progreso'
        });
    }
};
*/
