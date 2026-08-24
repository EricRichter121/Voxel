import { type Request, type Response } from "express";
import { AuthService } from '../services/auth.service.js';
import { config } from '../env.js';

const authService = new AuthService(process.env.JWT_SECRET!);

export const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: config.env === 'production',
  sameSite: 'lax' as const,
  maxAge: 1000 * 60 * 30 // milliseconds | seconds | minutes 
}

export class AuthController {
  static async register(req: Request, res: Response) {
    const user = await authService.register(req.body);

    res.status(201).json(user);
  }

  static async login(req: Request, res: Response) {
    const { user, accessToken } = await authService.login(req.body)
    
    res.cookie("accessToken", accessToken, COOKIE_OPTIONS)

    res.status(201).json({
      user: user,
      accessToken: accessToken
    })
  }

  static async logout(req: Request, res: Response) {
    res.clearCookie("accessToken")

    res.status(204)
  }
}