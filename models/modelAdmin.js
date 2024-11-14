const {Schema, model} = require("mongoose")

const adminSchema = new Schema({
    clase:{
        type:String, 
        required:true
    },

    fuerza:{  
        type:Number, 
        required:true
    },
    
    inteligencia:{
        type:Number, 
        required:true
    },
    
    habilidades:{
        type:String, 
        required:true
    },
    
    categoria:{
        type:Schema.Types.ObjectId,
        ref:'Category',
        required:true
    },
  /*   categoria:{
        type:String, 
        required:true
    }, */

})
module.exports = model('Admin',adminSchema)
