const {Schema, model} = require('mongoose')

const categorySchema = new Schema ({
    category:{
        type:String,
        required:true
    }
})

module.exports=model('Category',categorySchema)