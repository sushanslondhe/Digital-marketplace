"use client"
import { PRODUCT_CATEGORIES } from "@/lib";
import { useState } from "react"
import NavItemLogic from "./NavItemLogic";

export default function NavItems(){
    const[activeIndex,setActiveIndex] = useState<null | number>(null);

    const isAnyOpen = activeIndex!==null;
    return (
        <div className="flex flex-row">
            {PRODUCT_CATEGORIES.map((category,i)=>{

                const isOpen =i === activeIndex;

                const handleOpen = ()=>{
                    if (activeIndex === i) {
                        setActiveIndex(null);
                    }
                    else{
                        setActiveIndex(i);
                    }
                }


              return(
                <>
                <NavItemLogic key={category.value} category={category} handleOpen={handleOpen} isAnyOpen={isAnyOpen} isOpen={isOpen} />
                </>
              )
            })}
        </div>
    )
}