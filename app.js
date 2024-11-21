/* Importacion express*/
const express = require('express')
/* Importacion dotenv */
require('dotenv').config();
/* Importacion cors */
const cors = require('cors')

const path = require('path')
const routes = require('./routers/routes')

//Guardamos express en una variable para poder utilizarlo 
const app = express()

//Servidor
const port = process.env.PORT 
const {dbConector} =require('./helpers/dbConector')
//console.log(process.env)

app.use(express.urlencoded({extended:false}))
//parse aplication/json
app.use(express.json())

const whiteList = ['http://localhost:5173', '*' ]
// Middleware

/* CORS */
app.use(cors({
    origin: whiteList, // Dirección del frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

/* CONECTAR DB */
dbConector()

/* RUTAS */
app.use('/api/v1/admin', require('./routers/routerAdmin'))
app.use('/api/v1/user', require('./routers/routerUsers'))
app.use('/api/v1/auth', require('./routers/authRouter'))



/* LISTENER */
//el puerto a la escucha
app.listen(port,()=>{
    console.log(`server on port ${port}`)
})