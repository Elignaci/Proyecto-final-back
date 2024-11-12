/* Importacion express*/
const express = require('express')
/* Importacion dotenv */
require('dotenv').config();
/* Importacion cors */
const cors = require('cors')

//Guardamos express en una variable para poder utilizarlo 
const app = express()

//Servidor
const port = process.env.PORT 
const {dbConector} =require('./helpers/dbConector')
console.log(process.env)

app.use(express.urlencoded({extended:false}))
//parse aplication/json
app.use(express.json())


/* CORS */
app.use(cors())

/* CONECTAR DB */
dbConector()

/* RUTAS */
app.use('/api/v1/admin', require('./routers/routerAdmin'))


/* LISTENER */
//el puerto a la escucha
app.listen(port,()=>{
    console.log(`server on port ${port}`)
})