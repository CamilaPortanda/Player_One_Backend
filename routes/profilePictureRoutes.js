const express = require('express');

const router = express.Router();

const profilePictureController =
require('../controllers/profilePictureController');


router.get('/',
    profilePictureController.getAllPfps
);

router.put('/update-user-pfp',
    profilePictureController.updateUserPfp
);


module.exports = router;