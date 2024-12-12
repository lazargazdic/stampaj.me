import express from 'express';
import OrderModel from '../models/order';

export class OrderController{
    getAllOrders = async (req: express.Request, res: express.Response) => {
        try {
            const orders = await OrderModel.find();
            res.status(200).json(orders);
        }
        catch (error) {
            res.status(500).json({ message: 'Error fetching orders' });
        }
    }
}