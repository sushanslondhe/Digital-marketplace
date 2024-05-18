import express from 'express'
import * as trpcExpress from '@trpc/server/adapters/express'
import { appRouter } from './trpc';
import { getPayloadClient } from './get-payload';

const app = express();

const PORT = Number(process.env.PORT) || 3000;
const createContext = ({
    req,
    res,
}:trpcExpress.CreateExpressContextOptions) => ({
    req,
    res
})


const start =async ()=>{
    app.use('/api/trpc',trpcExpress.createExpressMiddleware({
        router:appRouter,
        createContext
        

    }))
    app.listen(PORT)

}

