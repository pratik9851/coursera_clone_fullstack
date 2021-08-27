const express=require("express")
const router=express.Router();


const Course=require("../models/courses.model")


router.get("",async function(req,res){
  try{  
    const courses= await Course.find().lean().exec();
    return res.send(courses)
}
    catch(err){
        res.send(err.message)
    }
})

router.post("",async function(req,res){
   try{ 
    const courses= await Course.create(req.body);
    return res.send(courses)}
    catch(err){
        res.send(err.message)
    }
})

router.get("/name",async function(req,res){
    try {
        console.log(req.query.search);
        const courses = await Course.find().lean().exec()
        var data = [];
        courses.forEach((el) => {
          
            if (el.name[0] == req.query.search) { 
                data.push(el);
            }
        })
        return res.send(data)
    }
    catch(err){
        res.send(err.message)
    }
})



module.exports=router