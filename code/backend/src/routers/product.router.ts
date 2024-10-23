import express from 'express';
import { ProductController } from '../controllers/product.controller';

const productRouter = express.Router();

productRouter.route('/getAllProducts').get(
    (req, res) => new ProductController().getProducts(req, res)
);

export default productRouter;