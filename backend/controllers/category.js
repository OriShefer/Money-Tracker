const CategorySchema= require("../models/CategoryModel")

exports.addCategory= async (req, res) => {
    const {name}  = req.body

    const category = CategorySchema({
        name
    })

    try {
        //validations
        if(!name){
            return res.status(400).json({message: 'All fields are required!'})
        }
        await category.save()
        res.status(200).json({message: 'Category Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }

    console.log(category)
}

exports.getCategories = async (req, res) => {
    try {
        const categories = await CategorySchema.find().sort({createdAt: -1})
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}



