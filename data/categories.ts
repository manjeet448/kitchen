import { LucideIcon, ChefHat, Box, ThermometerSnowflake, Waves, UtensilsCrossed, MonitorPlay, Wine, Blocks, Wrench } from 'lucide-react';

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: any; 
  slug: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: '1',
    title: 'Cooking Equipment',
    description: 'High-performance ranges, ovens, and fryers.',
    icon: ChefHat,
    slug: 'cooking-equipment',
    image: '/images/categories/cat_cooking.png',
  },
  {
    id: '2',
    title: 'Bakery & Pizza Equipment',
    description: 'Mixers, proofers, and specialty baking ovens.',
    icon: Box,
    slug: 'bakery-pizza',
    image: '/images/categories/cat_bakery.png',
  },
  {
    id: '3',
    title: 'Refrigeration',
    description: 'Reliable commercial fridges, freezers, and cold rooms for food safety.',
    icon: ThermometerSnowflake,
    slug: 'refrigeration',
    image: '/images/categories/cat_refrig.png',
  },
  {
    id: '5',
    title: 'Food Processing',
    description: 'Slicers, dicers, and commercial blenders.',
    icon: UtensilsCrossed,
    slug: 'food-processing',
    image: '/images/categories/cat_foodprep.png',
  },
  {
    id: '4',
    title: 'Dishwashing',
    description: 'Efficient washing systems and sanitizers.',
    icon: Waves,
    slug: 'dishwashing',
    image: '/images/categories/cat_dishwash.png',
  },
  {
    id: '7',
    title: 'Bar Equipment',
    description: 'Ice makers, blenders, and under-counter fridges.',
    icon: Wine,
    slug: 'bar-equipment',
    image: '/images/categories/cat_bar.png',
  },
  {
    id: '6',
    title: 'Display & Serving',
    description: 'Elegant hot and cold food display solutions.',
    icon: MonitorPlay,
    slug: 'display-serving',
    image: '/images/categories/cat_display.png',
  },
  {
    id: '9',
    title: 'Custom Fabrication',
    description: 'Tailor-made stainless steel kitchen tables, sinks, and hoods.',
    icon: Blocks,
    slug: 'custom-fabrication',
    image: '/images/categories/cat_custom.png',
  },
  {
    id: '8',
    title: 'Smallwares & Accessories',
    description: 'Essential smallwares and kitchen tools.',
    icon: Wrench,
    slug: 'accessories',
    image: '/images/categories/cat_smallwares.png',
  }
];
