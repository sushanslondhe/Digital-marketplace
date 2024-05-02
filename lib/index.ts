import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";

export const perks = [
    {
      name:'Instant Delivery',
      icon:ArrowDownToLine,
      description:'get your assests delivered to your mail in seconds and download them right away.'
      
    },
    {
      name:'Guaranteed Quality',
      icon:CheckCircle,
      description:'Every asset on our platform is verified by our team to ensure our highest qualtiy standards. Not happy? We offer a 30-day refund.'
      
    },
    {
      name:'For the planet',
      icon:Leaf,
      description:"We've pledged 1% of sales to the preservation and restoration of the natural environment."
      
    },
]
export const PRODUCT_CATEGORIES = [
  {
    label: 'UI Kits',
    value: 'ui_kits' as const,
    featured: [
      {
        name: 'Editor picks',
        href: `#`,
        imageSrc: '/nav/ui-kits/mixed.jpg',
      },
      {
        name: 'New Arrivals',
        href: '#',
        imageSrc: '/nav/ui-kits/blue.jpg',
      },
      {
        name: 'Bestsellers',
        href: '#',
        imageSrc: '/nav/ui-kits/purple.jpg',
      },
    ],
  },
  {
    label: 'Icons',
    value: 'icons' as const,
    featured: [
      {
        name: 'Favorite Icon Picks',
        href: `#`,
        imageSrc: '/nav/icons/picks.jpg',
      },
      {
        name: 'New Arrivals',
        href: '#',
        imageSrc: '/nav/icons/new.jpg',
      },
      {
        name: 'Best Selling Icons',
        href: '#',
        imageSrc: '/nav/icons/bestsellers.jpg',
      },
    ],
  },
]

