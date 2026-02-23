const resturantModel = require("../models/resturantModal");


const createResturantController = async (req, res) => {

    try {
        const { title, imageUrl, foods, time, pickup, delivery, isOpen, logoUrl, rating, ratingCount, code, coords, } = req.body;
        if (!title) {
            return res.status(500).send({
                success: false,
                message: "please provide title and address",
            });
        }
        const newResturant = new resturantModel({
            title,
            imageUrl,
            foods,
            time,
            pickup,
            delivery,
            isOpen,
            logoUrl,
            rating,
            ratingCount,
            code,
            coords,
        });
        await newResturant.save();

        res.status(201).send({
            success: true,
            message: "New Resturant Created successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error",
            error,
        });

    }

}


const getAllResturantController = async (req,res) => {
    try {
        const resturants = await resturantModel.find({});
        if (!resturants) {
            return res.status(404).send({
                success: false,
                message: "No Resturant Availible",
            });
        }
        res.status(200).send({
            success: true,
            totalCount: resturants.length,
            resturants,
        });
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Error ",
            error,
        });
    }
}


const getResturantByIdController = async (req, res) => {
    try {
        const resturantId = req.params.id;
        if (!resturantId) {
            return res.status(404).send({
                success: false,
                message: "Error",
            });
        }
        const resturant = await resturantModel.findById(resturantId);
        if (!resturant) {
            return res.status(404).send({
                success: false,
                message: "No Resturant ",
            });
        }
        res.status(200).send({
            success: true,
            resturant,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error ",
            error,
        });
    }

}

const deleteResturantController = async (req, res) => {
    try {
        const resturantId = req.params.id;
        if (!resturantId) {
            return res.status(404).send({
                success: false,
                message: "No Resturant ",
            });
        }
        await resturantModel.findByIdAndDelete(resturantId);
        res.status(200).send({
            success: true,
            message: "Resturant Deleted Successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error ",
            error,
        });
    }
}
const updateResturantController = async (req, res) => {
    try {
        const resturantId = req.params.id;
        if (!resturantId) {
            return res.status(404).send({
                success: false,
                message: "No Resturant ",
            });
        }
        await resturantModel.findByIdAndUpdate(resturantId);
        res.status(200).send({
            success: true,
            message: "Resturant Update Successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error",
            error,
        });
    }
}

module.exports = { createResturantController, getAllResturantController, getResturantByIdController, deleteResturantController, updateResturantController }