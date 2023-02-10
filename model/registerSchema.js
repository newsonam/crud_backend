// productschema of products
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});
const registerSchema=new mongoose.Schema({
firstname:
    {
        type:String,
        required:true
    },
    lastname:
    {
        type:String,
        required:true
    },
    mobile:
    {
        type:Number,
        required:true
    },
    
    email:
    {
        type:String,
        required:true
    },

    password:
    {
        type:String,
        required:true
    },
   
    confirmpassword:
    {
        type:String,
        required:true
    },
   
   
    
    active:Boolean,
    
    date:
    {
        type:Date,
        default:Date.now
    
    },
   
    contact:[
        {
           circle:{
            type:String,
            required:true
           },
           city:{
            type:String,
            required:true
           },
           state:{
            type:String,
            required:true
           },
           message:{
            type:String,
            reqired:true
           }
        }
    ]
    
    
    });
   
 

    const Register=new mongoose.model("RegisterForm",registerSchema);





module.exports=Register;
