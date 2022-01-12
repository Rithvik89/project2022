const mongoose=require('mongoose')

const Schema=new mongoose.Schema({
    emailid:{type:String,unique:true},
    username:{type:String,unique:true},
    password:{type:String}
})

const model=mongoose.model('userDetails',Schema)

module.exports=model