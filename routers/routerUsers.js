const express = require('express')
const router = express.Router()

const {
    getCharacter,
    getCharacterById,
    getCharacterByCategorie
} = require("../controllers/usersControllers");

router.get('/characters', getCharacter)
router.get('/characters/:id', getCharacterById)
router.get('/characters/category/:category', getCharacterByCategorie);

module.exports = router;