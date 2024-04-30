import Link from "next/link";
import MaxWidth from "./MaxWidth";
import { Icons } from "./Icons";
import NavItems from "./NavItems";

export default function Navbar() {
    return(
        
        <div className=" bg-white sticky z-50 top-0 inset-x-0 h-16">
            <header>
                <MaxWidth>
                    <div className=" border-b border-gray-200">
                        <div className=" max-md:gap-10 flex py-2 px-3">
                            {/* Todo mobile nav */}
                            <div>
                                <Link href="/">
                                    <Icons.logo className="h-12 w-10" />
                                </Link>
                            </div>

                            <div className=" max-md:hidden z-50 lg:ml-8 lg:self-stretch">
                                <NavItems />
                            </div>
                        </div>

                    </div>
                    </MaxWidth>
            </header>

        </div>
        
    )
    
}