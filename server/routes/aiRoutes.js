const express=require("express");

const router=express.Router();


const protect =
require("../middleware/authMiddleware");


const {
askAI
}=require("../controllers/aiController");



router.post(
"/chat",
protect,
askAI
);


module.exports=router;