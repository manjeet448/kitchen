export interface Product {
  id: string;
  name: string;
  slug: string;
  price: string;
  categoryId: string;
  image: string;
  description: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Heavy-Duty Commercial Gas Range',
    slug: 'heavy-duty-gas-range',
    price: 'Ask for Price',
    categoryId: '1', // Cooking Equipment
    image: '/images/categories/cat_cooking.png',
    description: 'A top-of-the-line 6-burner commercial gas range with a spacious standard oven base. Built for continuous use in the most demanding high-volume kitchen environments.',
    features: ['Stainless steel construction', '30,000 BTU cast iron burners', 'Heavy-duty grates', 'Easy-clean drip trays'],
  },
  {
    id: '2',
    name: 'Artisan Commercial Pizza Oven',
    slug: 'artisan-pizza-oven',
    price: 'Ask for Price',
    categoryId: '2', // Bakery & Pizza
    image: '/images/categories/cat_bakery.png',
    description: 'High-performance commercial pizza oven designed for authentic crusts and rapid baking. Ideal for busy pizzerias and artisan bakeries.',
    features: ['Stone baking deck', 'Independent top and bottom heat control', 'High temperature insulation', 'Digital thermostat'],
  },
  {
    id: '3',
    name: 'Double Door Stainless Steel Reach-In Refrigerator',
    slug: 'double-door-refrigerator',
    price: 'Ask for Price',
    categoryId: '3', // Refrigeration
    image: '/images/categories/cat_refrig.png',
    description: 'Premium double door upright commercial refrigerator with advanced digital temperature control, auto-defrost, and a sleek stainless steel exterior.',
    features: ['1200L Capacity', 'Digital temperature controller', 'Auto-defrost system', 'Adjustable heavy-duty shelves'],
  },
  {
    id: '4',
    name: 'High-Volume Conveyor Dishwasher',
    slug: 'conveyor-dishwasher',
    price: 'Ask for Price',
    categoryId: '4', // Dishwashing
    image: '/images/categories/cat_dishwash.png',
    description: 'Industrial-grade conveyor dishwasher capable of washing hundreds of racks per hour with minimal water and energy consumption.',
    features: ['Multi-stage washing system', 'Built-in chemical dispensers', 'High-temperature sanitizing', 'Stainless steel wash arms'],
  },
  {
    id: '5',
    name: 'Professional Food Processor & Slicer',
    slug: 'professional-food-processor',
    price: 'Ask for Price',
    categoryId: '5', // Food Processing
    image: '/images/categories/cat_foodprep.png',
    description: 'Heavy-duty food processor and meat slicer station for rapid ingredient preparation. Cuts prep time in half for busy commercial kitchens.',
    features: ['Includes multiple cutting discs', 'Continuous feed operation', 'Powerful commercial motor', 'Easy to clean safety design'],
  },
  {
    id: '6',
    name: 'Curved Glass Hot Food Display',
    slug: 'curved-glass-display',
    price: 'Ask for Price',
    categoryId: '6', // Display & Serving
    image: '/images/categories/cat_display.png',
    description: 'Elegant heated display counter with a premium curved glass front. Perfect for showcasing hot foods, pastries, and buffet items at the perfect temperature.',
    features: ['LED interior lighting', 'Precise humidity & temp control', 'Sliding rear glass doors', 'Stainless steel base'],
  },
  {
    id: '7',
    name: 'Under-Counter Ice Maker & Bar Station',
    slug: 'undercounter-bar-station',
    price: 'Ask for Price',
    categoryId: '7', // Bar Equipment
    image: '/images/categories/cat_bar.png',
    description: 'A complete compact bar station featuring a high-capacity ice maker and under-counter refrigeration for premium cocktail service.',
    features: ['Produces clear, hard ice', 'Built-in storage bin', 'Air-cooled condenser', 'Stainless steel finish'],
  },
  {
    id: '8',
    name: 'Chef\'s Essential Smallwares Kit',
    slug: 'chefs-smallwares-kit',
    price: 'Ask for Price',
    categoryId: '8', // Smallwares
    image: '/images/categories/cat_smallwares.png',
    description: 'A comprehensive collection of high-quality stainless steel pots, pans, professional chef knives, and essential kitchen utensils.',
    features: ['Heavy-gauge stainless steel', 'Ergonomic heat-resistant handles', 'NSF certified utensils', 'Professional grade durability'],
  },
  {
    id: '9',
    name: 'Custom Fabricated Stainless Steel Prep Station',
    slug: 'custom-prep-station',
    price: 'Ask for Price',
    categoryId: '9', // Custom Fabrication
    image: '/images/categories/cat_custom.png',
    description: 'Tailor-made 304 stainless steel preparation tables and integrated sink stations. Built to your exact kitchen dimensions and requirements.',
    features: ['16 gauge 304 stainless steel', 'Custom sizes available', 'Integrated sink options', 'Adjustable bullet feet'],
  }
];
