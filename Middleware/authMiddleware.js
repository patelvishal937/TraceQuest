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
        const authHeader = req.headers['authorization'];
        if (authHeader) {
            const token = authHeader.split(' ')[1]; 
            // API Req will be MUST follow  --> authorization : "Bearer <token>" to  Split and get the token
            // console.log("TOKEN IS:", token);
            if (token) {
                const decoded = jwt.verify(token, secret);
                req.body._id = decoded?.id;
                next();
            }
        } else {
            res.status(403).send("Access denied. No token provided.");
        }
    } catch (error) {
        res.status(403).send(`Access denied. ERROR: ${error.message}`);
    }
}

export default authMiddleWare;