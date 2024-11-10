const {Schema, model} = require("mongoose")

const adminSchema = new Schema({
    clase:{
        type:String, 
        required:true
    },

    fuerza:{  
        type:String, 
        required:true
    },
    
    inteligencia:{
        type:String, 
        required:true
    },
    
    habilidades:{
        type:String, 
        required:true
    },
    
    categoria:{
        type:String, 
        required:true
    },

})
module.exports = model('admin',adminSchema)
