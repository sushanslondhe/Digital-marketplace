"use client"
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { z } from "zod";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from "@/lib/utils";
import { trpc } from "@/trpc/client";


export default function Signup(){
    const Authvalidator = z.object({
        email:z.string().email({message:'Invalid mail address!'}),
        password:z.string().min(8,{message:'password must be atleast 8 characters long!'})
    })

    type TAuthCredentials = z.infer<typeof Authvalidator>
    const clickSubmit = (data:TAuthCredentials) => {
        console.log(data);
    }
    // here

   const { register, handleSubmit, watch, formState:{errors}} = useForm<TAuthCredentials>({
    resolver:zodResolver(Authvalidator)
   });
    return(
        
        <div className=" lg:shadow max-lg:pt-16 flex flex-col justify-center items-center lg:mx-[20rem] lg:my-[5rem] gap-y-4">
            <div>
                <Icons.logo className="h-16 w-16" />
            </div>
            <div className=" font-serif text-3xl font-medium">
                Create an account
            </div>
            <div className=" w-[50%] flex flex-col gap-2 justify-center">
            <form className=" flex flex-col gap-3" onSubmit={handleSubmit(clickSubmit)}>

                <Label  htmlFor="email">Email</Label>
                {errors.email && (
                    <p className=" text-sm text-red-500">{errors.email?.message}</p>
                )}
                <Input {...register('email')}
               className={cn({
                'focus-visible:ring-red-500':errors.email
               })}
                placeholder="usermail@xyz.com"  />

                <Label htmlFor="password">Password</Label>
                {errors.password && (
                    <p className=" text-sm text-red-500">{errors.password.message}</p>
                )}
                <Input {...register('password')}
                className={cn({
                    'focus-visible:ring-red-500':errors.password
                })} 
                type='password'
                 placeholder="password" />
                <Button className="w-full my-7">Create Account</Button>
        </form>
            </div>

        
        </div>
    )
}