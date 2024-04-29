import MaxWidth from "@/components/MaxWidth";
import { buttonVariants } from "@/components/ui/button";
import { perks } from "@/lib";
import { cn } from "@/lib/utils";
import { MousePointerClick } from "lucide-react";
import Link from "next/link";

export default function Home(){
  return(
    <>
    <MaxWidth>
      <div  className=" py-20 mx-auto text-center flex flex-col items-center">
        <h1 className=" text-5xl font-bold tracking-tight">Your marketplace for high-quality{ ' '}<br />
          <span className=" text-blue-600">
            digital assets
          </span>
        </h1>

        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
           Welcome to <span className=" text-blue-600 font-medium">DigitalHippo</span>. Every asset on our
           platform is verified by our team to ensure our
           highest quality standards.
        </p>
        <div className="mt-6">
          <Link href="/products"
          className={buttonVariants({
            variant:"link"
          })}>
            Browse trending &rarr;

          </Link>

        </div>
      </div>
    </MaxWidth>
    <section>
      <MaxWidth>
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-y-0">
          {perks.map((perk)=> (
            <div key={perk.name}
            className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
              <div className="md:shrink-0 flex justify-center">
                <div className=" h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900 ">
                  {<perk.icon className=" h-1/2  w-1/2" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className=" text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className=" mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                  </div>
              </div>
          ))}
        </div>

      </MaxWidth>
    </section>
    </>
  )
}