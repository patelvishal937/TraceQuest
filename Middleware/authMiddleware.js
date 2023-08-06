// Author : Sohil
// Purpose : Define Authentication Middleware to authorize requests.
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();
const secret = process.env.JWT_SCREATE_KEY
// Define logic function for middleware.
const authMiddleWare = async (req, res, next) => {
    try {
        console.log(req.headers);
        const token =await req.headers.authorization.split(" ")[1];
        if (token) {
            const decoded = jwt.verify(token, secret);
            req.body._id = decoded?.id;
        }
        next();
    } catch (error) {
        res.status(403).send(`access denied ${error}`);
    }
}

export default authMiddleWare;