import express from "express";
import { createlogs , showlogs, deletelogs} from "../Controllers/logsController.js";
import authMiddleWare from "../Middleware/authMiddleware.js";

// routes for logs
const logRoutes = express();

logRoutes
.post('/',createlogs)
.get('/',authMiddleWare,showlogs)
.delete('/:id',authMiddleWare,deletelogs)
export default logRoutes;