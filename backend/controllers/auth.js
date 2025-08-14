import User from '../models/Users.js';
import { createError } from '../utils/error.js';
import bcrypt from 'bcryptjs';
export const register = async (req,res,next)=>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({ 
            username: req.body.username,
            email: req.body.email,
            password: hash})

        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
        console.log("User registered successfully:", savedUser); 
    }catch(err){
        next(err);
        console.error("Error registering user:", err);
    }
}

export const login = async(req,res,next)=>{
    try{
        const user = await User.findOne({username: req.body.username});
        if(!user){
            return next(createError(404, "User not found"));
        }
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isPasswordCorrect){
            return next(createError(400, "Wrong password or username!"));
        }
        const {password, isAdmin, ...otherDetails} = user._doc; // Exclude password and isAdmin from the response
        res.status(200).json(otherDetails);
        console.log("User logged in successfully:", user);
    }catch(err){
        next(err);
        console.error("Error logging in user:", err);
    }
}