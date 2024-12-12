import express from 'express';
import PricingRuleModel from '../models/pricingRule';

export class PricingRuleController{
    getAllPricingRules = async (req: express.Request, res: express.Response) => {
        try {
            const pricingRules = await PricingRuleModel.find();
            res.status(200).json(pricingRules);
        }
        catch (error) {
            res.status(500).json({ message: 'Error fetching pricingRules' });
        }
    }
}