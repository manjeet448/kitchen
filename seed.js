const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const categories = [
  { id: '1', name: 'Cooking Equipment', slug: 'cooking-equipment', description: 'High-performance ranges, ovens, and fryers.', image: '/images/categories/cat_cooking.png', status: 'ACTIVE' },
  { id: '2', name: 'Bakery & Pizza Equipment', slug: 'bakery-pizza', description: 'Mixers, proofers, and specialty baking ovens.', image: '/images/categories/cat_bakery.png', status: 'ACTIVE' },
  { id: '3', name: 'Refrigeration', slug: 'refrigeration', description: 'Reliable commercial fridges, freezers, and cold rooms for food safety.', image: '/images/categories/cat_refrig.png', status: 'ACTIVE' },
  { id: '5', name: 'Food Processing', slug: 'food-processing', description: 'Slicers, dicers, and commercial blenders.', image: '/images/categories/cat_foodprep.png', status: 'ACTIVE' },
  { id: '4', name: 'Dishwashing', slug: 'dishwashing', description: 'Efficient washing systems and sanitizers.', image: '/images/categories/cat_dishwash.png', status: 'ACTIVE' },
  { id: '7', name: 'Bar Equipment', slug: 'bar-equipment', description: 'Ice makers, blenders, and under-counter fridges.', image: '/images/categories/cat_bar.png', status: 'ACTIVE' },
  { id: '6', name: 'Display & Serving', slug: 'display-serving', description: 'Elegant hot and cold food display solutions.', image: '/images/categories/cat_display.png', status: 'ACTIVE' },
  { id: '9', name: 'Custom Fabrication', slug: 'custom-fabrication', description: 'Tailor-made stainless steel kitchen tables, sinks, and hoods.', image: '/images/categories/cat_custom.png', status: 'ACTIVE' },
  { id: '8', name: 'Smallwares & Accessories', slug: 'accessories', description: 'Essential smallwares and kitchen tools.', image: '/images/categories/cat_smallwares.png', status: 'ACTIVE' }
];

const products = [
  { name: 'Heavy-Duty Commercial Gas Range', slug: 'heavy-duty-gas-range', price: 99999, categoryId: '1', image: '/images/categories/cat_cooking.png', description: 'A top-of-the-line 6-burner commercial gas range with a spacious standard oven base. Built for continuous use in the most demanding high-volume kitchen environments.' },
  { name: 'Artisan Commercial Pizza Oven', slug: 'artisan-pizza-oven', price: 85000, categoryId: '2', image: '/images/categories/cat_bakery.png', description: 'High-performance commercial pizza oven designed for authentic crusts and rapid baking. Ideal for busy pizzerias and artisan bakeries.' },
  { name: 'Double Door Stainless Steel Reach-In Refrigerator', slug: 'double-door-refrigerator', price: 120000, categoryId: '3', image: '/images/categories/cat_refrig.png', description: 'Premium double door upright commercial refrigerator with advanced digital temperature control, auto-defrost, and a sleek stainless steel exterior.' },
  { name: 'High-Volume Conveyor Dishwasher', slug: 'conveyor-dishwasher', price: 150000, categoryId: '4', image: '/images/categories/cat_dishwash.png', description: 'Industrial-grade conveyor dishwasher capable of washing hundreds of racks per hour with minimal water and energy consumption.' },
  { name: 'Professional Food Processor & Slicer', slug: 'professional-food-processor', price: 35000, categoryId: '5', image: '/images/categories/cat_foodprep.png', description: 'Heavy-duty food processor and meat slicer station for rapid ingredient preparation. Cuts prep time in half for busy commercial kitchens.' },
  { name: 'Curved Glass Hot Food Display', slug: 'curved-glass-display', price: 65000, categoryId: '6', image: '/images/categories/cat_display.png', description: 'Elegant heated display counter with a premium curved glass front. Perfect for showcasing hot foods, pastries, and buffet items at the perfect temperature.' },
  { name: 'Under-Counter Ice Maker & Bar Station', slug: 'undercounter-bar-station', price: 55000, categoryId: '7', image: '/images/categories/cat_bar.png', description: 'A complete compact bar station featuring a high-capacity ice maker and under-counter refrigeration for premium cocktail service.' },
  { name: 'Chef\'s Essential Smallwares Kit', slug: 'chefs-smallwares-kit', price: 15000, categoryId: '8', image: '/images/categories/cat_smallwares.png', description: 'A comprehensive collection of high-quality stainless steel pots, pans, professional chef knives, and essential kitchen utensils.' },
  { name: 'Custom Fabricated Stainless Steel Prep Station', slug: 'custom-prep-station', price: 45000, categoryId: '9', image: '/images/categories/cat_custom.png', description: 'Tailor-made 304 stainless steel preparation tables and integrated sink stations. Built to your exact kitchen dimensions and requirements.' }
];

async function main() {
  console.log('Seeding database...');
  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat
    });
  }
  
  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    const createdProduct = await prisma.product.upsert({
      where: { slug: p.slug },
      update: {},
      create: {
        name: p.name,
        slug: p.slug,
        sku: 'SKU-00' + (i+1),
        price: p.price,
        categoryId: p.categoryId,
        description: p.description,
        status: 'ACTIVE'
      }
    });

    // Add product image
    const existingImage = await prisma.productImage.findFirst({ where: { productId: createdProduct.id } });
    if (!existingImage) {
      await prisma.productImage.create({
        data: {
          productId: createdProduct.id,
          url: p.image,
          isPrimary: true
        }
      });
    }
  }
  console.log('Seeding completed!');
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
