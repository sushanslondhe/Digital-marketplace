import { PRODUCT_CATEGORIES } from "@/lib"
import { Button } from "./ui/button";
import { ChevronDown, ShoppingBagIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Category = typeof PRODUCT_CATEGORIES[number];
interface NavItemProps {
    category:Category,
    handleOpen:()=> void,
    isAnyOpen:boolean,
    isOpen:boolean


}

export default function NavItemLogic({
    category,handleOpen,isAnyOpen,isOpen
}:NavItemProps){
    return(
        <div className="">
            <div>
                <Button
                className=" gap-1.5"
                onClick={handleOpen}
                variant={isOpen ? 'link' : 'ghost'}>
                    {category.label}
                    <ChevronDown className={
                        cn('h-4 w-4',{
                            '-rotate-180 duration-300':isOpen,
                            '-rotate-0  duration-300':!isOpen
                        })
                    } />

                </Button>

            </div>

            {isOpen ? (
                <div className={cn('absolute inset-x-0 top-full text-sm text-muted-foreground',{
                    'animate-in fade-in-10 slide-in-from-top-5':!isAnyOpen
                })}>
                    <div className=" absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true">
                        <div className="relative bg-white">
                            <div className=" mx-auto max-w-7xl px-8">
                                <div className=" grid grid-cols-4 gap-x-8 gap-y-10 py-10">
                                    <div className=" col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                                        {category.featured.map((item)=> (
                                            <div className=" group relative text-base sm:text-sm" key={item.name}>
                                                <div className=" relative aspect-video overflow-hidden rounded-lg bg-gray-900 group-hover:opacity-80">
                                                <Image src={item.imageSrc} alt="product image" fill className=" object-cover object-center" />
                                             </div>

                                                <Link className=" underline text-[20px] text-center mt-6 block font-medium  text-sky-500" href={item.href}>
                                                    {item.name}
                                                </Link>
                                                
                                         </div>
                                        ))}
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>


                </div>
            ): null}
        </div>
    )
}