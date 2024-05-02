import { ShoppingCart } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

export default function Cart(){
    const itemCount =0;
    return(
        <div className="flex">
        <Sheet>
            <SheetTrigger>
                <ShoppingCart className=" text-gray-500  h-6 w-8 " />

            </SheetTrigger>
            <SheetContent side={"right"}>
                <SheetHeader>
                    <SheetTitle>
                        Cart ({itemCount})

                    </SheetTitle>
                </SheetHeader>

            </SheetContent>
        </Sheet>
        </div>
    )
}0