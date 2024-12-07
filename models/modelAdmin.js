const {Schema, model, default: mongoose} = require("mongoose")

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
    
    foto:{
        type:String, 
        required:true 
    },
    
    categoria:{
        type:Schema.Types.ObjectId,
        ref:'Categoria',
        required:true
    },
    /* categoria:{
        type:String, 
        required:true
    }, */
    // filePath:{
    //     type:String,
    //     required:true
    // },
    // fileName:{
    //     type:String,
    //     required:true},
})


module.exports = model('Admin',adminSchema)

