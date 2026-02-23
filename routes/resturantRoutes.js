const express = require("express");
const authMiddleware = require("../middlleware/authMiddleware");
const { createResturantController, getAllResturantController,getResturantByIdController,deleteResturantController,updateResturantController} =require("../controllers/restuarantController") 


const routers = express.Router();

//routers
routers.post("/create", authMiddleware, createResturantController);
routers.get("/getAll",getAllResturantController)
routers.get("/get/:id", getResturantByIdController);
routers.delete("/delete/:id",deleteResturantController)
routers.put("/update/:id",authMiddleware,updateResturantController)



module.exports = routers;