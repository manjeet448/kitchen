const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const machineImages = [
  'https://teaminspire.co.in/wp-content/uploads/2024/02/img-choose-01.png',
  'https://teaminspire.co.in/wp-content/uploads/2024/02/1708568394013.jpg',
  'https://teaminspire.co.in/wp-content/uploads/2024/02/img-section-counter.png',
  'https://teaminspire.co.in/wp-content/uploads/2024/03/Untitled_Export-Wkw0AEiUU2.jpeg',
  'https://teaminspire.co.in/wp-content/uploads/2024/03/commercial-oven-for-your-bakery.png',
  'https://teaminspire.co.in/wp-content/uploads/2024/04/unnamed.jpg',
  'https://teaminspire.co.in/wp-content/uploads/2024/04/re-cooking-equipment.jpg',
  'https://teaminspire.co.in/wp-content/uploads/2024/03/71VQ-iZwZsL.jpg',
  'https://teaminspire.co.in/wp-content/uploads/2024/03/oven-compressed.webp'
];

async function fixImages() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'asc' }
  });
  
  // We only want to update the ones that have '/images/categories/' in their ProductImage
  let index = 0;
  for (const product of products) {
    const pImage = await prisma.productImage.findFirst({ where: { productId: product.id } });
    if (pImage && pImage.url.startsWith('/images/categories/')) {
      const newUrl = machineImages[index % machineImages.length];
      await prisma.productImage.update({
        where: { id: pImage.id },
        data: { url: newUrl }
      });
      console.log(`Updated ${product.name} with new image.`);
      index++;
    }
  }
  console.log('Images fixed!');
}

fixImages()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
