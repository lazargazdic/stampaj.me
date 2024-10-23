import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    productImage: { type: String, required: true },
    id: { type: Number, required: true }
});

export default mongoose.model("ProductModel", productSchema, "products");