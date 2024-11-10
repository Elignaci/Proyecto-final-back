const character = require('../models/modelAdmin.js');


const getCharacter = (req, res)=>{
    return res.render('personajes')
}

const getCharacterById = (req, res)=>{
    return res.render('personaje por su id')
}

const getCharacterByCategorie = (req, res)=>{
    return res.render('personaje por categoria')
}

const createCharacter = (req, res)=>{
    return res.render('personaje creado')
}

const editCharacter = (req, res)=>{
    return res.render('personaje dditado')
}

const deleteCharacter = (req, res)=>{
    return res.render('personaje eliminado')
}

module.exports = {
    getCharacter,
    getCharacterById,
    getCharacterByCategorie,
    createCharacter,
    editCharacter,
    deleteCharacter,
}