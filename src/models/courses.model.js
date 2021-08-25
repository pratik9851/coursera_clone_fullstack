const mongoose=require("mongoose")

const courseSchema= new mongoose.Schema(
    {
    img:{type:String,required:true},
    name:{type:String,required:true},
    university:{type:String,required:true},
    course:{type:String,required:true},
    rating:{type:Number,required:true},
    numStudent:{type:Number,required:true},
    numINMin:{type:String,required:true},
    level:{type:String,required:true},
    lang:{type:String,required:true},
    courseduration:{type:String,required:true}
  
    

},{
    versionKey:false
}
)

const Course=mongoose.model("course",courseSchema);

module.exports=Course