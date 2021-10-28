import express from 'express';
import bodyParser from 'body-parser';

const app = express();

import authRouter from'./routes/auth.js';
import productsRouter from'./routes/products.js';
import bannersRouter from'./routes/banners.js';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/auth', authRouter);
app.use('/products', productsRouter);
app.use('/banners', bannersRouter);

export default app;