

const login=(req,res)=>{
   
    console.log(req.id)

    return res.status(200).json({
        ok:true,
        msg:'logueado'
    })
}

module.exports={
    login
}