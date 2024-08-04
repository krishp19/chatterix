import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";


export const login= async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const idPasswordCorrect = await bcrypt.compare(password, user?.password || "")

        if(!user || !idPasswordCorrect) {
            return res.status(401).json({message: "Invalid username or password"})
        }

        generateToken(user._id, res);
        res.status(201).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        })
    
    } catch (error) {
        console.log("Error in login user", error.message)
        res.status(500).json({error: "Failed to login user"})
    }
}

export const logout = async (req, res) => {
    try {
        res.cookie("jwt","",{maxAge: 0})
        res.status(200).json({message:"Logged out successfully"})
    } catch (error) {
        console.log("Error in login user", error.message)
        res.status(500).json({error: "Failed to login user"})
    }
}

export const signup = async (req, res) => {
    try {
        const {fullName, username, password, confirmPassword, gender} = req.body;
    
    if(password !== confirmPassword){
        return res.status(400).json({message: "Passwords do not match"})
    }
        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({message: "Username already exists"})
        }

        //Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        //
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
        })

        if(newUser){
            //Generate hwt token
            generateToken(newUser._id, res);
            await newUser.save();
            res.status(201).json({
                _id:newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
            })
        }
        else{
            res.status(400).json({error:"Invalid user data"});
        }
        
    } catch (error) {
        console.log("Error in making user", error.message)
        res.status(500).json({message: "Failed to create user"})
    }
}