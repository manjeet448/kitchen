const fs = require('fs');
const path = require('path');

const machineImages = [
  'https://teaminspire.co.in/wp-content/uploads/2024/03/commercial-oven-for-your-bakery.png',
  'https://teaminspire.co.in/wp-content/uploads/2024/04/re-cooking-equipment.jpg',
  'https://teaminspire.co.in/wp-content/uploads/2024/03/oven-compressed.webp',
  'https://teaminspire.co.in/wp-content/uploads/2024/03/PH_725394_1_1_725394.png',
  'https://teaminspire.co.in/wp-content/uploads/2024/02/tyj56j56jhet4.png',
  'https://teaminspire.co.in/wp-content/uploads/2024/02/a3100930-f70f-11ec-b106-2d3fa5ef9135-scaled.jpeg',
  'https://teaminspire.co.in/wp-content/uploads/2024/02/img-choose.png',
  'https://teaminspire.co.in/wp-content/uploads/2024/02/img-choose-02.png'
];

function replaceImagesInFile(filePath) {
  const fullPath = path.join(__dirname, filePath);
  let content = fs.readFileSync(fullPath, 'utf8');
  
  let i = 0;
  content = content.replace(/image:\s*['"]https:\/\/images\.unsplash\.com[^'"]+['"]/g, () => {
    const img = machineImages[i % machineImages.length];
    i++;
    return `image: '${img}'`;
  });
  
  fs.writeFileSync(fullPath, content);
  console.log('Updated ' + filePath);
}

replaceImagesInFile('data/products.ts');
replaceImagesInFile('data/categories.ts');
replaceImagesInFile('data/projects.ts');
replaceImagesInFile('data/services.ts');
