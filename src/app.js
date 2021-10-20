import express from 'express';
import helmet from 'helmet';
import xss from 'xss-clean';
import compression from 'compression';
import cors from 'cors';
import mongoSanitize from 'express-mongo-sanitize';
import swaggerUI from 'swagger-ui-express';

import config from './config/config';
import { successHandle, errorHandle } from './config/morgan';

import limiter from './middlewares/rateLimiter';

import errorHandler from './utils/errorHandler';
import AppError from './utils/appError';

import routes from './routes/index';

import docs from '../build-docs/swagger';

const app = express();

app.enable('trust proxy');

app.use(successHandle);
app.use(errorHandle);

app.use(helmet());

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.use(xss());

app.use(mongoSanitize());

app.use(cors());
app.options('*', cors());

app.use(compression());

app.disable('x-powered-by');

if (config.env === 'production') {
  app.use('/', limiter);
}

app.use('/', routes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorHandler);

export default app;
