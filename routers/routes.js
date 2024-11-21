const express = require('express');
const multer = require('multer');
const File = require('../models/modelAdmin');
const path = require('path');//modulo de Node.js para trabajar con rutas de archivo

const router = express.Router()

/* Configuracion multer */
const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, 'uploads/');
    },
    filename: (req, file, cb)=>{
        cb(null, Date.now() + path.extname(file.originalname))
    }
})


/* Modelo de archivo */

const upload = multer({storage});

router.post('/upload', upload.single('file'),async(req, res)=>{
  try {
    const {id, clase, fuerza, inteligencia, habilidades, categoria,  } = req.body;
    const file = req.file;
    const newFile = new File({
        id, 
        clase,
        fuerza,
        inteligencia,
        habilidades,
        categoria,
        filePath: file.path,
        fileName: file.filename
    });
    await newFile.save();
    res.status(200).json({message: 'Archivo subido correctamente', file:newFile})
  } catch (error) {
   res.status(500).json({message: 'Error al subir el archivo', error: err});
    
  }
});