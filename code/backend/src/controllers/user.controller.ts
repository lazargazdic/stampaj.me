import express from 'express';
import UserModel from '../models/user';

export class UserController{
    getAllUsers = async (req: express.Request, res: express.Response) => {
        try {
            const users = await UserModel.find();
            res.status(200).json(users);
        }
        catch (error) {
            res.status(500).json({ message: 'Error fetching users' });
        }
    }

    login = async (req: express.Request, res: express.Response) => {
        try{
            let email = req.body.email;
            let password = req.body.password;

            const user = await UserModel.findOne({email: email});

            if(!user){
                res.status(404).json({ message: 'User not found' });
                return;
            }
            else if (user.password !== password){
                res.status(401).json({ message: 'Incorrect password' });
                return;
            }
            else{
                res.status(200).json({ message: 'Login successful' , user} );
            }
        }
        catch (error) {
            res.status(500).json({ message: 'Error logging in', error });
        }
    }

    register = async (req: express.Request, res: express.Response) => {
        try{
            let email = req.body.email;
            let password = req.body.password;
            let firstname = req.body.firstname;
            let lastname = req.body.lastname;
            let contactNumber = req.body.contactNumber;
            let address = req.body.address;

            const existing = await UserModel.findOne({email: email});
            if(existing){
                res.status(400).json({ message: 'User already exists' });
                return;
            }

            const last = await UserModel.findOne().sort({userId: -1});
            let userId = 1;
            if (last && last.userId !== undefined && last.userId !== null){
                userId = last.userId + 1;
            }

            const user  = new UserModel({
                userId,
                email,
                password,
                firstname,
                lastname,
                address,
                contactNumber,
                status: 'unverified'
            })

            const saved = await user.save();
            res.status(201).json({ message: 'User registered successfully', user: saved });
        }
        catch (error) {
            res.status(500).json({ message: 'Error registering user', error });
        }
    }
}