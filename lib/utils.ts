import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function FormatPrice(
  price:number | string,
  options:{
    currency?:'USD | INR',
    notation?: Intl.NumberFormatOptions['notation']
  } = {}
)
{
  const {currency = 'INR',notation = 'standard'} = options;
  const NumericPrice = (typeof price === 'string' ? parseFloat(price) : price);
  return new Intl.NumberFormat(
    'en-IN',{
      style:'currency',
      currency:'INR',
      notation,
      
      
    }
  ).format(NumericPrice)


}