/**
 * /**Importacion de express, validacion y de las rutas 
 * guardamos en la clase ruter de la objeto express
 */
 
const express = require('express')
const { check } = require ('express-validator')
const {validatorInput} = require('../middlewares/validator')
const router = express.Router()
//const multer = require ('multer')
//const upload = multer({dest: ''})
/* Ruta donde se hace el requerimeinto de todas las categorias que se van a ejecutar desde el postman
  */
const {
    getCharacter,
    getCharacterById,
    getCharacterByCategorie,
    createCharacter,
    editCharacter,
    deleteCharacter,

} = require('../controllers/adminControllers');
const { validarAuth } = require('../middlewares/validarAuth');
/**
 * @param {Object}router es el acceso donde vamos a pasar la informacion a postman usando metodos Get,Post, Put y delete
 * @param {exports} validaInputs es el accesoo que activamos desde validacion para confirmar que todos los check se cumplen
 * @param {validacion}check se usa para activar la validacion de cada metodo por medio de express-validator
 */

router.get('/characters', getCharacter)
router.get('/characters/:id', getCharacterById)
router.get('/characters/categoria/:categoria', getCharacterByCategorie);

router.post('/characters', [
    check('clase')
    .notEmpty().withMessage('clase es obligatorio')
    .isLength({max:100}).withMessage('la clase no debe exceder los 100 caracteres'),
    check('fuerza','fuerza es obligatorio').not().isEmpty(),
    check('inteligencia', 'inteligencia es obligatorio').not().isEmpty(),
    check('habilidades', 'habilidades es obligatorio').not().isEmpty(),
    check('categoria', 'categoria es obligatorio').not().isEmpty(),
    validatorInput
], validarAuth,createCharacter)

router.put('/characters/:id',[
    check('clase', 'clase es obligatorio').not().isEmpty(),
    check('fuerza','fuerza es obligatorio').not().isEmpty(),
    check('inteligencia', 'inteligencia es obligatorio').not().isEmpty(),
    check('habilidades', 'habilidades es obligatorio').not().isEmpty(),
    check('categoria', 'categoria es obligatorio').not().isEmpty(),
    check('foto','la foto es obligatorio').not().notEmpty(),
    validatorInput
], editCharacter)

router.delete('/characters/:id',deleteCharacter)


module.exports = router;