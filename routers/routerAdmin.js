const express = require('express')
const router = express.Router()

const {
    getCharacter,
    getCharacterById,
    getCharacterByCategorie,
    createCharacter,
    editCharacter,
    deleteCharacter,

} = require('../controllers/adminControllers');


router.get('/characters', getCharacter)
router.get('/characters:id', getCharacterById)
router.get('/character:categoria', getCharacterByCategorie)
router.post('/characters', createCharacter)
router.put('/characters:id', editCharacter)
router.delete('/characters:id', deleteCharacter)


module.exports = router;