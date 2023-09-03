// Author : Sohil
// Purpose : Define Authentication logic that implemented in requests.
import userModel from "../Models/userModel.js";
//bcrypt for generating hashed password
import bcrypt from 'bcrypt'
//jwt for creating tokens
import jwt from 'jsonwebtoken'


//Logic Function for registering new user 
export const createUser = async (req, res) => {
    const { username, password} = req.body;
    console.log(req.body)
    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(password, salt);
    const newUser = new userModel({
        username,
        password: newPassword,
    });
    try {
        const oldUser = await userModel.findOne({ username });
        if (oldUser) {
            return res.status(400).json({ message: "username not available" })
        }
        await newUser.save();
        const token = jwt.sign({
            username: username,
            id: newUser._id
        }, process.env.JWT_SCREATE_KEY, { expiresIn: '1h' })
        res.status(200).json({ user: newUser, token });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

 //Logic Function for Login existing user 
export const LoginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await userModel.findOne({ username: username });
        if (user) {
            const userValidation = await bcrypt.compare(password, user.password);

            if (userValidation) {
                const token = jwt.sign({
                    username: username,
                    id: user._id
                }, process.env.JWT_SCREATE_KEY, { expiresIn: '1h' })
                // res.setHeader("Access-Control-Allow-Origin", "true");
                res.status(200).json(
                    { user, "token": token }
                );
            } else {
                res.status(400).json('Please Enter Correct Credentials');
            }
        } else {
            res.status(400).json('Please Enter Correct Credentials');
        }

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}