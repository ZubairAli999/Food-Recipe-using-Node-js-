const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const router =require("./routes/authRoutes")
const routers =require("./routes/userRoutes")
const resturantRoutes =require('./routes/resturantRoutes')
const categoryRoutes =require('./routes/categoryRoutes')
const foodRoutes =require("./routes/foodRoutes")




//dot en configuration
dotenv.config();

//DB connection
connectDb();

//rest object
const app = express();

//middlewares
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//route
// URL
app.use("/api/v1/auth", router);
app.use("/api/v1/user", routers);
app.use("/api/v1/resturant", resturantRoutes)
app.use('/api/v1/category',categoryRoutes)
app.use('/api/v1/food',foodRoutes)


//PORT
const PORT = process.env.PORT 

//listen
app.listen(PORT, () => {
  console.log('Server running on ${PORT}');
});