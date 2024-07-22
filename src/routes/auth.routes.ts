import { Router } from 'express';
import { login, checkToken } from '../controllers/authController';
import { body } from 'express-validator';

const router = Router();

router.post('/login', [
  body('dni').isLength({ min: 1 }).withMessage('DNI is required'),
  body('password').isLength({ min: 1 }).withMessage('Password is required')
], login);
router.get('/check-token', checkToken);

export default router;