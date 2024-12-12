import express from 'express';
import { PricingRuleController } from '../controllers/pricingRule.controller';

const pricingRuleRouter = express.Router();

pricingRuleRouter.route('/getAllPricingRules').get(
    (req, res) => new PricingRuleController().getAllPricingRules(req, res)
);

export default pricingRuleRouter;