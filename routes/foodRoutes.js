const express = require("express")
const authMiddleware = require("../middlleware/authMiddleware");
const {createFoodController,getAllFoodsController,getSingleFoodController,getFoodByResturantController,
    updateFoodController,deleteFoodController,placeOrderController
} =require("../controllers/foodController")


const routers = express.Router();

//routers
routers.post("/create", authMiddleware, createFoodController);
routers.get("/getAll",getAllFoodsController)
routers.get("/get/:id",authMiddleware,getSingleFoodController)
routers.get("/getResturant/:id",getFoodByResturantController)
routers.put("/update/:id", authMiddleware, updateFoodController);
routers.delete("/delete/:id", deleteFoodController);
routers.post("/placeorder", authMiddleware, placeOrderController);



module.exports = routers