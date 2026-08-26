import { type Request, type Response, type NextFunction } from "express";
import { AuthService } from '../services/auth.service.js';
import { config } from '../env.js';
// import type { AuthRequest } from '../middlewares/auth.middleware.js'


const authService = new AuthService(process.env.JWT_SECRET!);

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: config.env === 'production',
  sameSite: 'lax' as const,
  maxAge: 1000 * 60 * 30 // milliseconds | seconds | minutes 
}

export class AuthController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await authService.register(req.body);
      res.status(201).json(user);
    } catch (error) {
      next(error)
    }
  }

  static async login(
    req: Request,
    res: Response,
    next: NextFunction) {
    try {
      const { user, accessToken } = await authService.login(req.body)
      
      res.cookie("accessToken", accessToken, COOKIE_OPTIONS)

      res.status(201).json({
        user: user,
        accessToken: accessToken
      })
    } catch (error) {
      next(error);
    }
  }

  static async logout(
    req: Request,
    res: Response,
    next: NextFunction) {
    try {
      res.clearCookie("accessToken")
      res.status(204)
    } catch (error) {
      next(error)
    } 
  }


  static async getCurrentUser(
    req: Request,
    res: Response,
  ) {
    const userId = req.auth?.userId

    if (!userId) {
      return res.status(401).json({
        message: 'Пользователь не авторизован',
      })
    }

    try {
      const user = await AuthService.getCurrentUser(userId)

      if (!user) {
        return res.status(401).json({
          message: 'Пользователь не найден',
        })
      }

      return res.status(200).json({
        user,
      })
    } catch (error) {
      console.error('getCurrentUser controller error:', error)

      return res.status(500).json({
        message: 'Не удалось получить текущего пользователя',
      })
    }
  }
}
