import { Request, Response } from "express";
import { authenticateUser, verifyToken } from "../services/authService";

export const login = async (req: Request, res: Response): Promise<Response> => {

  const { dni, password } = req.body;

  const result = await authenticateUser(dni, password);
  if (!result) {
    return res.status(401).json({ message: 'Invalid dni or password' });
  }

  const { token, data } = result;

  const user = data;

  return res.json({ token, user });
};

export const checkToken = (req: Request, res: Response): Response => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token not provided' });
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  return res.json({ message: 'token is valid', user: decoded })
}