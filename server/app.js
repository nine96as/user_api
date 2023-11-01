import cors from 'cors';
import express from 'express';

export const app = express();

// middleware section
app.use(cors());
app.use(express.json());

// home page
app.get('/', (req, res) =>
  res.status(200).send({ message: 'Welcome to the Homepage!' })
);
