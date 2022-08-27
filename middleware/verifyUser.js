import jwt from "jsonwebtoken";

export const userHasAccess = (req) => {
    try {
        const token = req.headers.authorization.replace("Bearer ", "");
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (error) {
        console.log("JWT Error ",error);
        return false;
    }
};