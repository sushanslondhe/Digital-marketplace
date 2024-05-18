import { publicProcedure, tRouter } from "./trpc";

export const appRouter = tRouter({
     anyApiRoute:publicProcedure.query(()=>{
       return {
        message:'hii from server'
       };
     }),
})

export type AppRouter = typeof appRouter;