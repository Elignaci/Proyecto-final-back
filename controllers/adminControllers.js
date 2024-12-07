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
/**Esta es una función asíncrona llamada
getCharacterById
que toma dos parámetros:
 * 
 * @param {*} req la solicitud
 * @param {*} res la respuesta
 * en ella por medio de un try que permite manejar errores. Si ocurre un error dentro de este bloque, se puede capturar en el bloque
catch
* La funcion id esta registrando la solicitud y el parametro
* Se utiliza
await
para esperar el resultado de la operación asíncrona
Admin.findById(id)
, que busca un personaje en la base de datos utilizando el ID obtenido.
Admin es el modelo de la base de datos 
Si la búsqueda es exitosa, se envía una respuesta con un código de estado 200 (OK) y un objeto JSON que incluye:
ok la operación fue exitosa.
mensage un mensaje que dice que el personaje fue encontrado.
y el objeto findCharacter
 * @returns 
 */
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
/** Esta es una función asíncrona llamada
getCharacterById
que toma dos parámetros:
* @param {*} req la solicitud
 * @param {*} res la respuesta
 * la funcion categoria se encarga de registrar la solicitud y el parametro.
 * 
 * @returns 
 */
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
//Funcion encargada de crear un nuevo parsonaje 

const createCharacter = async (req, res) => {
    const create = new Admin(req.body)
    create.categoria = req.uid
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
//Funcion encargada de editar los personajes
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
//Funcion encargada de eliminar los personajes
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