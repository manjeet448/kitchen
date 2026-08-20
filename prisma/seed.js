const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const categories = [
    { name: 'Cooking Equipment', slug: 'cooking-equipment' },
    { name: 'Bakery Equipment', slug: 'bakery-equipment' },
    { name: 'Refrigeration', slug: 'refrigeration' },
    { name: 'Dishwashing', slug: 'dishwashing' },
    { name: 'Food Processors', slug: 'food-processors' },
    { name: 'Display Counters', slug: 'display-counters' },
    { name: 'Bar Equipment', slug: 'bar-equipment' },
    { name: 'Accessories', slug: 'accessories' },
  ];

  console.log('Seeding categories...');
  for (const cat of categories) {
    const existing = await prisma.category.findUnique({
      where: { slug: cat.slug },
    });
    if (!existing) {
      await prisma.category.create({
        data: {
          name: cat.name,
          slug: cat.slug,
          status: 'ACTIVE',
        },
      });
      console.log(`Created category: ${cat.name}`);
    } else {
      console.log(`Category already exists: ${cat.name}`);
    }
  }

  console.log('Categories seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
