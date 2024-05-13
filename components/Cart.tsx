import { ShoppingCart } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { FormatPrice } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Cart(){
    const itemCount =0;
    const TransactionFee =49;
    return(
        <div className="flex">
        <Sheet>
            <SheetTrigger className=" group -m-2 flex items-center p-2">
                <ShoppingCart className=" group-hover:text-gray-500  h-6 w-8 " /> 
                <span className="group-hover:text-gray-500 pb-5 text-sm">
                    {itemCount}
                </span>

            </SheetTrigger>
            <SheetContent side={"right"}>
                <SheetHeader>
                    <SheetTitle>
                        Cart ({itemCount})

                    </SheetTitle>
                </SheetHeader>
                {itemCount > 0 ? (
                    <div className="flex flex-col gap-3">
                        <div className=" pt-5 text-lg text-center">
                            Cart Items
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                            <h1>
                                Shipping Cost

                            </h1>
                            <h2 className=" text-sm text-muted-foreground">
                                Free Delivery

                            </h2>
                        </div>
                        <div className="flex justify-between">
                            <h1>
                                Transaction Fee

                            </h1>  
                             
                            <h2 className=" text-sm text-muted-foreground">
                                {FormatPrice(TransactionFee)}

                            </h2>
                        </div>
                        <Separator />
                        <div className="flex justify-between text-lg font-semibold">

                        <div className="">
                            Total
                        </div>
                        <div className="">
                            {FormatPrice(TransactionFee)}
                        </div>
                        </div>
                        <div className="pt-10">
                            <Button className=" w-full">Checkout</Button>
                        </div>
                        

                    </div>
                ): (
                <div className=" flex h-full flex-col items-center justify-center space-y-1">
                    <div className=" h-60 w-60">
                        <Image width={250} height={100} alt="empty-cart" src='/hippo-empty-cart.png'  />
                    </div>
                    <div className=" text-xl font-semibold">
                        Your cart is empty!
                    </div>
                    <div>
                        <Link href='/products'
                    
                        
                        className={buttonVariants({
                            variant:'link',
                            
                        })}>
                            Checkout popular products
                        </Link>

                    </div>

                </div>
            )}

            </SheetContent>
        </Sheet>
        </div>
    )
}0