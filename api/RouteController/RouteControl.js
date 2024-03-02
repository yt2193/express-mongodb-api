const Product=require("../models/productDetails")


const product_all= async (req,res)=>{
    try {
        const data = await Product.find();
        res.json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }   
}

const product_specific=async (req,res)=>{
    try {
        const { productName } = req.params;
        const data = await Product.findOne({ productName: productName });
        if (!data) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }

}

const product_create=async (req,res)=>{
    try {
        const data = await Product.create(req.body);
        res.status(200).json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
}

const product_update=async (req,res)=>{
    try {
        const { productName } = req.params;
        const updatedProduct = req.body;
        const data = await Product.findOneAndUpdate(
            { productName: productName },
            updatedProduct,
            { new: true }
        );
        if (!data) {
            return res.status(404).json({ message: "No such product exists" });
        }
        res.status(200).json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
}

const product_delete=async (req,res)=>{
    try {
        const { productName } = req.params;
        const deletedProduct = await Product.findOneAndDelete({ productName: productName });
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json({ message: "Product deleted successfully", deletedProduct });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
}

module.exports={
    product_all,
    product_specific,
    product_create,
    product_delete,
    product_update
}