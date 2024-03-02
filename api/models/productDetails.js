const mongoose=require("mongoose")

const productDetails=mongoose.Schema(
    {
        productName: {
          type: String,
          required: true,
          description: "The name of the product"
        },
        description: {
          type: String,
          required: true,
          description: "A brief description of the product"
        },
        price: {
          type: Number,
          required: true,
          min: 0,
          description: "The price of the product"
        },
        category: {
          type: String,
          required: true,
          enum: ["Electronics", "Clothing", "Books", "Home & Kitchen", "Other"],
          description: "The category of the product"
        }
      }
)

const ProductList=mongoose.model("ProductList",productDetails);
module.exports=ProductList;