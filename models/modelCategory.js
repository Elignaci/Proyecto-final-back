const {Schema, model} = require('mongoose')

const categorySchema = new Schema ({
    categoria:{
        type:String,
        required:true
    }
})

module.exports=model('Categoria',categorySchema)