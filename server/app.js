import cors from 'cors';
import express from 'express';
import logger from 'morgan';
import usersRouter from './routes/users.js';

export const app = express();

// middleware section
app.use(cors());
app.use(express.json());
app.use(logger('dev'));

// router section
app.use('/users', usersRouter);

// home route
app.get('/', (req, res) =>
  res.status(200).send({
    message: 'Welcome!',
    description: 'USERS_API',
    endpoints: [
      'GET  /',
      'GET  /users',
      'GET  /users/:id',
      'POST  /users',
      'PATCH  /users/:id',
      'DELETE  /users/:id'
    ]
  })
);
