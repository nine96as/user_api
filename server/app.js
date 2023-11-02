import cors from 'cors';
import express from 'express';

import logger from './logger.js';
import usersRouter from './routes/users.js';

export const app = express();

// middleware section
app.use(cors());
app.use(express.json());
app.use(logger);

// router section
app.use('/users', usersRouter);

// home page
app.get('/', (req, res) =>
  res.status(200).send({ message: 'Welcome to the Homepage!' })
);
