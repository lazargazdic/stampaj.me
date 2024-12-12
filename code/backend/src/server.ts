import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import * as bodyParser from 'body-parser';

//import path from 'path';

import userRouter from './routers/user.router';
import productRouter from './routers/product.router';
import pricingRuleRouter from './routers/pricingRule.router';
import orderRouter from './routers/order.router';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/assets", express.static('assets'));
app.use("/images", express.static('images'));

mongoose.connect('mongodb://localhost:27017/stampajME');
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully. Connected to stampajME.');
});

const router = express.Router();

router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/pricingRules', pricingRuleRouter);
router.use('/order', orderRouter);

app.use('/', router);

app.listen(4000, () => console.log(`Express server running on port 4000`));