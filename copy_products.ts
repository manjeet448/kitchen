import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const products = await prisma.product.findMany();
  let added = 0;
  for (const product of products) {
    await prisma.service.create({
      data: {
        title: product.name,
        description: product.description || product.shortDesc,
        image: null,
      }
    });
    added++;
  }
  console.log(`Added ${added} products as services.`);
}
main().catch(console.error).finally(() => prisma.$disconnect());
