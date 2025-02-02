import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
    try {

        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({ _id: {$ne: loggedInUserId} })
        .select("-password")
        
        res.status(200).json(filteredUsers)

    } catch (error) {
        console.log("Error in getting user: ", error.message)
        res.status(500).json({ message: "Error in getting user" })
    }
}