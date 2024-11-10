const mongoose = require('mongoose')

const dbConector = async()=>{
try {
    const conect = await mongoose.connect(process.env.URI_CONNECT)
    console.log("DB ESTA CONECTADO CON EL SERVIDOR")
    return conect
    
} catch (error) {
    console.log(error)
    return {ok:false,
    mensaje:"No se ha podido conectar"
    }
}

}
module.exports={
    dbConector}