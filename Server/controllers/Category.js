const Category = require("../models/Category");

exports.createCategoty = async(req,res) => {
    try{
        const {name , description} = req.body;

        if(!name) {
            return res.status(400).json({
                success:false,
                message:"Name is required in creatioon of category"
            });
        }

        const categoryDetails = await Category.create({
            name:name,
            description:description
        });

        return res.status(200).json({
            success:true,
            message:"category created successfully",
            data:categoryDetails,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"category not created",
            error:error.message
        })
    }
}

exports.showAllCategories = async (req,res) => {
    try{

        const allCategories = await Category.find({});

        return res.status(200).json({
            success:true,
            messag:"all categoru fetched succsfully",
            data:allCategories
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message : "something went wrong in crating categories",
            error:error.message,
        })
    }
}

exports.categoryPageDetails = async(req,res) => {
    try{

        const {categoryId} = req.body;

        const selectedCategory = await Category.findById(categoryId).populate("Jobs").exec();

        if(!selectedCategory){
            return res.status(404).json({
                success:false,
                message:"Data not found"
            })
        }

        const differentCategories = await Category.find({
            _id:{$ne:categoryId}
        }).populate("Jobs").exec();

        return res.status(200).json({
            success:true,
            data: {
                selectedCategory,
                differentCategories
            },
        })

    } catch(error) {
        console.log(error);
        return res.staus(500).json({
            success:false,
            message: error.message
        })
    }
}