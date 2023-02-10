const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});

const mongoose=require('mongoose');
const Db=process.env.DATABASE;

mongoose.connect(Db,{
    useNewUrlParser:true,useUnifiedTopology:true
})

.then(()=>console.log("connection successfully"))
.catch((err)=>console.log('err'));