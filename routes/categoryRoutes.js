const express = require("express")
const authMiddleware = require("../middlleware/authMiddleware");
const { createCategoryController,getAllCategoryController,deleteCategoryController} =require("../controllers/categoryController") 


const routers = express.Router();

//routers
routers.post("/create", authMiddleware, createCategoryController);
routers.get("/getAll",getAllCategoryController);
routers.delete("/delete/:id", authMiddleware, deleteCategoryController);



module.exports = routers;