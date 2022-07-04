import express, { Request, Response } from 'express';

const app = express();

import { swagger, cors } from './app/infrastructure/services'
import { runMediatorProducts } from './models/products';

import routerPorducts from './routes/products.router'

// mediator
runMediatorProducts()

// midlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors)


app.get('/api/status', (request: Request, response: Response) => {
    response.status(200).json({
        apiStatus: "OK",
        isRunning: true,
    })
});
app.use('/api', routerPorducts);

app.use('/', swagger.server(), swagger.setup())


export default app;