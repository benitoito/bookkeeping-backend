import jwt from "jsonwebtoken";

export const userHasAccess = (req, res, next) => {
    try {
        const token = req.headers.authorization.replace("Bearer ", "");
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        req.token = decoded;
        next()
        // return decoded;
    } catch (error) {
        console.log("JWT Error ",error);
        throw Error(error);
    }
};