const express = require("express");
const {
  registerController,loginController
} = require("../controllers/authcontrolllers");

const router = express.Router();

//routes
//REGISTER || POST
router.post("/register", registerController);
router.post("/login",loginController)


module.exports = router;