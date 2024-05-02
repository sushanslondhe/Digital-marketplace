import Link from "next/link";
import MaxWidth from "./MaxWidth";
import { Icons } from "./Icons";
import NavItems from "./NavItems";
import Cart from "./Cart";
import { buttonVariants } from "./ui/button";

export default function Navbar() {
    const user = null;
    return(
        
        <div className=" bg-white sticky z-50 top-0 inset-x-0 h-16">
            <header>
                <MaxWidth>
                    <div className=" border-b border-gray-200 ">
                        <div className=" max-md:gap-10 flex py-2 px-3 ">
                            {/* Todo mobile nav */}
                            <div>
                                <Link href="/">
                                    <Icons.logo className="h-12 w-10" />
                                </Link>
                            </div>

                            <div className=" max-md:hidden z-50 lg:ml-8 lg:self-stretch">
                                <NavItems />
                            </div>
                            <div className=" ml-auto flex  items-center">
                                <div className=" hidden lg:flex lg:items-center lg:justify-end lg:space-x-1">
                                    {user ? null :(
                                        <Link href='/api/signin'
                                        className={buttonVariants({
                                            variant:'link'
                                        })}>
                                            Sign In
                                        </Link>

                                    )}
                                    
                                    

                                    {user ? null :(
                                        <Link href='/api/signup'
                                        className={buttonVariants({
                                            variant:'link'
                                        })}>
                                            Create Account
                                        </Link>

                                    )}

                                </div>
                                <div className='ml-4 flow-root lg:ml-6'>
                    <Cart />
                  </div>
                            </div>
                            

                            
                        
                        </div>
                        

                    </div>
                    </MaxWidth>
            </header>

        </div>
        
    )
    
}