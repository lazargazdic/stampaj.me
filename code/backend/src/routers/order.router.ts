import express from 'express';
import { OrderController } from '../controllers/order.controller';

const orderRouter = express.Router();

orderRouter.route('/getAllOrders').get(
    (req, res) => new OrderController().getAllOrders(req, res)
);

export default orderRouter;