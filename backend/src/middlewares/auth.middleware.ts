// import { type Request, type Response, type NextFunction } from "express";
// // import jwt from "jsonwebtoken";
// import { AuthService } from "../services/auth.service.js";

// // interface JwtPayload {
// //     id: string;
// //     email: string;
// // }

// export const authMiddleware = (
//     req: Request,
//     res: Response,
//     next: NextFunction
// ): void => {
//     const token = req.cookies.accessToken;
    
//     if (!token) {
//         res.status(401).json({
//             message: "Authorization header is missing"
//         })
//         return
//     };
    
//     const payload = AuthService.verifyToken(token);

//     req.user = payload
    
//     next();
// }










