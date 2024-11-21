const validarAuth=(req,res,next)=>{


    try {
         // llamada a firebase

    const usuarioDeFirebase={
        uid:'67375848d6d2f79e878007f1',
        name:'pepe'
    }

    req.uid=usuarioDeFirebase.uid

    console.log(req.uid, 'en middleware')
   


    next()
        
    } catch (error) {
        console.log('no entra')
    }

}

module.exports={
    validarAuth
}