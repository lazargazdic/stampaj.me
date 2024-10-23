import express from 'express';
import ProductModel from '../models/product';

export class ProductController{
    getProducts = (req: express.Request, res: express.Response) => {
        ProductModel.find()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((error) => {
            console.error("Error: ", error);
            res.status(500).json({error: error});
        });
    };
}