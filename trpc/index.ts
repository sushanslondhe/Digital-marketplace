import { publicProcedure, tRouter } from "./trpc";

export const appRouter = tRouter({
     anyApiRoute:publicProcedure.query(()=>{
        return 'hello from trpc server'
     })
})

export type AppRouter = typeof appRouter;