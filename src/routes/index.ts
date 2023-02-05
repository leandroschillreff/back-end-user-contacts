import { Express } from 'express';
import contactRouter from './../routes/contact/contact.routes';
import loginRouter from './../routes/session/session.routes';
import userRouter from './../routes/user/user.routes';

export const initializerRouter = (app: Express) => {
  app.use('/login', loginRouter);
  app.use('/user', userRouter);
  app.use('/contact', contactRouter);
};
