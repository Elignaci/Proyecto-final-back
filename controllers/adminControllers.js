const Admin = require('../models/modelAdmin.js');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const getCharacter = async (req, res) => {
    try {
        const character = await Admin.find()
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
        const findCharacter = await Admin.findById(id)
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
        const characters = await Admin.find({ categoria }); 

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
};

const createCharacter = async (req, res) => {
    const create = new Admin(req.body)
    // console.log('req', req)
    create.categoria = req.uid
    console.log(req.uid)
    try {
        
        
        const characterCreated = await create.save()
        return res.status(201).json({
            ok: true,
            mensage: 'personaje creado con exito',
            characterCreated
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            mensaje: "Error al crear personaje"
        })

    }

}

const editCharacter = async(req, res) => {
    const eventId = req.params.id
    console.log(eventId)
    
    try {
        const character = await Admin.findOneAndUpdate( { _id: eventId },
            req.body,
            { new: true })
        if (!character){
            return res.status(404).json({
                ok: true,
                mensage:'personaje no encontrado'
            })
        }
            return res.status(200).json({
                ok: true,
                mensage: 'personaje editado con exito',
                character
            })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            mensaje: "Error al editar personaje"
        })
    }
}

const deleteCharacter = async (req, res) => {
    try {
        const id = req.params.id
        const characterEliminate = await Admin.findByIdAndDelete(id);
        if(!characterEliminate){
            return res.status(404).json({
                 ok: true,
                mensage:'personaje no encontrado'
            })
        }
        return res.status(200).json({
            ok: true,
            mensage: 'personaje eliminado',
            
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            mensaje: "Error al eliminar personaje"
        })
    }
    
}

module.exports = {
    getCharacter,
    getCharacterById,
    getCharacterByCategorie,
    createCharacter,
    editCharacter,
    deleteCharacter,
}