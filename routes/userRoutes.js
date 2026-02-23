const express = require("express");
const authMiddleware = require("../middlleware/authMiddleware");
const {userController, updateUserController, updatePasswordController, resetPasswordController, deleteUser} = require("../controllers/userController")

const routers = express.Router();

//routers
routers.get("/getUser",authMiddleware,userController)
routers.put("/updateUser",authMiddleware,updateUserController)
routers.post("/updatePassword",authMiddleware,updatePasswordController)
routers.post("/resetPassword",authMiddleware,resetPasswordController)
routers.delete("/deleteUser/:id",deleteUser)



module.exports = routers;