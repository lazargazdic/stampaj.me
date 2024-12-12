import express from 'express';
import ProductModel from '../models/product';

export class ProductController{
    getAllProducts = async (req: express.Request, res: express.Response) => {
        try {
            const products = await ProductModel.find();
            res.status(200).json(products);
        }
        catch (error) {
            res.status(500).json({ message: 'Error fetching products' });
        }
    }
}