import { FinishingOption } from "./finishingOption";
import { paperType } from "./papaerType";
import { Size } from "./size";

export class Product{
  productId: Number = 0;
  name: String = "";
  description: String = "";
  image: String = "";
  attributes: {
    sizes: Size[],
    paperTypes: paperType[],
    finishingOptions: FinishingOption[]
  } = { sizes: [], paperTypes: [], finishingOptions: [] };
  basePrice: Number = 0;
}
