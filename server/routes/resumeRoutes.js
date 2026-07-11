const express=require("express");

const router=express.Router();


const multer=require("multer");


const protect =
require("../middleware/authMiddleware");


const {
analyzeResume
}=require("../controllers/resumeController");



const upload =
multer({

dest:"uploads/"

});



router.post(

"/analyze",

protect,

upload.single("resume"),

analyzeResume

);



module.exports=router;