import mongoose, { Schema, Document } from 'mongoose';

// Define the structure of the order document
export interface IOrder extends Document {
  orderId: number;
  userId: number; // Link to the user who placed the order
  productId: number; // Link to the product being ordered
  selectedAttributes: Record<string, string>; // Selected product options (e.g., { size: "A4", paperType: "Glossy" })
  quantity: number; // Number of items ordered
  finalPrice: number; // Calculated price after applying pricing rules
  file: string; // Path or URL to the uploaded file
  status: string; // Order status (e.g., "Pending", "In Progress", "Completed")
  createdAt: Date; // Timestamp for when the order was created
  notes: string; // Additional notes or comments for the order
}

// Define the schema for the Order model
const OrderSchema: Schema = new Schema<IOrder>({
  orderId: { type: Number, required: true, unique: true }, // Auto-incremented order ID
  userId: { type: Number, required: true }, // Reference to the User collection
  productId: { type: Number, required: true }, // Link to the Product collection
  selectedAttributes: {
    type: Map,
    of: String, // Flexible map to store selected attributes as key-value pairs
    required: true,
  },
  quantity: { type: Number, required: true, min: 1 }, // Must order at least 1
  finalPrice: { type: Number, required: true }, // Total price calculated based on quantity and pricing rules
  file: { type: String, required: true }, // Path or URL of the uploaded file
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed', 'Rejected'], // Possible statuses for the order
    default: 'Pending',
  },
  createdAt: { type: Date, default: Date.now }, // Timestamp for when the order was created
});

// Export the Order model
export default mongoose.model<IOrder>('Order', OrderSchema, 'orders');
