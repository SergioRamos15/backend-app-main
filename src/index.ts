import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import guiasRoutes from './routes/guias.routes';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);

// Routes for guias
app.use('/api/guias', guiasRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


export default app;