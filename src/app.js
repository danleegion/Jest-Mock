import express from 'express';
import api from './routes';
const app = express();

app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api);

module.exports = app;
