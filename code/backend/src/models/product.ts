import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productId: { type: Number, unique: true },
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    attributes: {
        sizes: [
          {
            option: { type: String, required: true },
            dimensions: {
              width: { type: Number, required: true },
              height: { type: Number, required: true },
              unit: { type: String, required: true },
            },
            additionalCost: { type: Number, required: true },
          },
        ],
        paperTypes: [
          {
            option: { type: String, required: true },
            additionalCost: { type: Number, required: true },
          },
        ],
        finishingOptions: [
          {
            option: { type: String, required: true },
            additionalCost: { type: Number, required: true },
          },
        ],
      },
    basePrice: { type: Number, required: true },
});

export default mongoose.model('ProductModel', productSchema, 'products');