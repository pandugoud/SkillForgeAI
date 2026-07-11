const express = require("express");

const router = express.Router();


const protect =
require("../middleware/authMiddleware");


const admin =
require("../middleware/adminMiddleware");


const {
dashboard
}
=
require("../controllers/adminController");



router.get(

"/dashboard",

protect,

admin,

dashboard

);



module.exports = router;