import User from "../models/userModel.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            statu: "success",
            data: users
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const saveUser = async (req, res) => {
    const user = new User(req.body);
    try {
        const insertedUser = await user.save();
        res.status(200).json({
            status: "success",
            data: insertedUser
        })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data: user
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
