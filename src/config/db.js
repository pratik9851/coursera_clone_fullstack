const mongoose = require("mongoose");
// mongodb+srv://pratik:sahap187@@cluster0.s1tih.mongodb.net/courseraClone?retryWrites=true&w=majority


const connect = ()=>{
    return mongoose.connect("mongodb+srv://pratik:sahap187@@cluster0.s1tih.mongodb.net/courseraClone?retryWrites=true&w=majority",{


        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,

    })

}
module.exports=connect;