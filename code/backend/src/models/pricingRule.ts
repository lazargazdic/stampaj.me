import mongoose, { Schema, Document } from 'mongoose';

// Define the structure of a single pricing rule option
interface PricingOption {
  value: string; // Attribute value (e.g., "A4", "Glossy")
  priceModifier: number; // Additional cost or discount
}

// Define the structure of a single attribute's pricing rules
interface AttributeRule {
  attribute: string; // Name of the attribute (e.g., "size", "paperType")
  options: PricingOption[]; // Array of options for this attribute
}

// Define the interface for the PricingRules document
export interface IPricingRule extends Document {
  productId: number;
  productName: string;
  basePrice: number;
  rules: AttributeRule[];
}

// Define the schema for the PricingRules model
const PricingRuleSchema: Schema = new Schema<IPricingRule>({
  productId: { type: Number, required: true, unique: true }, // Link to a specific product
  productName: { type: String, required: true }, // Name of the product
  basePrice: { type: Number, required: true }, // Base price of the product
  rules: [
    {
      attribute: { type: String, required: true }, // Attribute name
      options: [
        {
          value: { type: String, required: true }, // Attribute value (e.g., "A4")
          priceModifier: { type: Number, required: true }, // Additional cost or discount
        },
      ],
    },
  ],
});

// Export the PricingRules model
export default mongoose.model<IPricingRule>('PricingRuleModel', PricingRuleSchema, 'pricingRules');
