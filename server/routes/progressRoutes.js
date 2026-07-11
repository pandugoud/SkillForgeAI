const express=require("express");

const router=express.Router();


const protect =
require("../middleware/authMiddleware");


const {

createProgress,

updateProgress,

getProgress

}
=
require("../controllers/progressController");




router.post(
"/create",
protect,
createProgress
);



router.put(
"/update/:id",
protect,
updateProgress
);



router.get(
"/",
protect,
getProgress
);



module.exports=router;