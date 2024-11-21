const User = require('../models/modelUser')

const getCharacter = async (req, res) => {
    try {
        const character = await User.find()
        return res.status(200).json({
            ok: true,
            mensage: 'todos los personajes',
            data: character
        })

    } catch (error) {
        return res.status(500).json({
            ok: false,
            mensaje: "Error al encontrar los personajes."
        })
    }
}

const getCharacterById = async (req, res) => {
    try {
        const id = req.params.id
        const findCharacter = await User.findById(id)
        return res.status(200).json({
            ok: true,
            mensage: 'personaje encontrado por id',
            findCharacter
        })

    } catch (error) {
        return res.status(500).json({
            ok: false,
            mensaje: "Error al encontrar personaje"
        })

    }

}
const getCharacterByCategorie = async (req, res) => {
    try {
        const categoria = req.params.categoria; 
        const characters = await User.find({ categoria }); 

        if (characters.length === 0) { 
            return res.status(404).json({
                ok: false,
                mensaje: "No se encontraron personajes con esta categoría"
            });
        }

        return res.status(200).json({
            ok: true,
            mensaje: `Personajes de la categoría: ${categoria}`,
            data: characters
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            mensaje: "Error al buscar personajes por categoría"
        });
    }
}


module.exports = {
    getCharacter,
    getCharacterById,
    getCharacterByCategorie,
}