const fs = require('fs');
const path = require('path');

const machineImages = [
  'https://teaminspire.co.in/wp-content/uploads/2024/02/img-choose-01.png',
  'https://teaminspire.co.in/wp-content/uploads/2024/02/1708568394013.jpg',
  'https://teaminspire.co.in/wp-content/uploads/2024/02/img-section-counter.png',
  'https://teaminspire.co.in/wp-content/uploads/2024/03/Untitled_Export-Wkw0AEiUU2.jpeg',
  'https://teaminspire.co.in/wp-content/uploads/2024/03/commercial-oven-for-your-bakery.png',
  'https://teaminspire.co.in/wp-content/uploads/2024/04/unnamed.jpg',
  'https://teaminspire.co.in/wp-content/uploads/2024/04/re-cooking-equipment.jpg',
  'https://teaminspire.co.in/wp-content/uploads/2024/03/71VQ-iZwZsL.jpg',
  'https://teaminspire.co.in/wp-content/uploads/2024/03/oven-compressed.webp',
  'https://teaminspire.co.in/wp-content/uploads/2024/03/PH_725394_1_1_725394.png',
  'https://teaminspire.co.in/wp-content/uploads/2024/02/tyj56j56jhet4.png',
  'https://teaminspire.co.in/wp-content/uploads/2024/02/my20_vega_mp_39_2880x1150_v1_1.jpg',
  'https://teaminspire.co.in/wp-content/uploads/2024/02/kitchen-spare-parts-1.jpg',
  'https://teaminspire.co.in/wp-content/uploads/2024/02/0_0.jpg',
  'https://teaminspire.co.in/wp-content/uploads/2024/02/a3100930-f70f-11ec-b106-2d3fa5ef9135-scaled.jpeg',
  'https://teaminspire.co.in/wp-content/uploads/2024/02/img-choose.png',
  'https://teaminspire.co.in/wp-content/uploads/2024/02/img-choose-02.png',
  'https://teaminspire.co.in/wp-content/uploads/2024/02/1708310545027.jpg',
  'https://teaminspire.co.in/wp-content/uploads/2024/02/1708568394189.jpg',
  'https://teaminspire.co.in/wp-content/uploads/2024/02/kitchen-egvs.jpg',
  'https://teaminspire.co.in/wp-content/uploads/2024/02/tyjytj.jpg',
  'https://teaminspire.co.in/wp-content/uploads/2024/02/rtbrtn.jpg',
  'https://teaminspire.co.in/wp-content/uploads/2024/02/rj6j.jpg',
  'https://teaminspire.co.in/wp-content/uploads/2024/04/8484.png',
  'https://teaminspire.co.in/wp-content/uploads/2024/04/84948498.png',
  'https://teaminspire.co.in/wp-content/uploads/2024/04/65641.png',
  'https://teaminspire.co.in/wp-content/uploads/2024/04/848.png',
  'https://teaminspire.co.in/wp-content/uploads/2024/02/3t.png',
  'https://teaminspire.co.in/wp-content/uploads/2024/02/6uh.png',
  'https://teaminspire.co.in/wp-content/uploads/2024/02/12.png',
  'https://teaminspire.co.in/wp-content/uploads/2024/02/34.png',
  'https://teaminspire.co.in/wp-content/uploads/2024/02/3r.png',
  'https://teaminspire.co.in/wp-content/uploads/2024/02/5yg.png',
  'https://teaminspire.co.in/wp-content/uploads/2024/02/23.png'
];

let globalIndex = 0; // use a global index so no two files get the same start sequence

function replaceImagesInFile(filePath) {
  const fullPath = path.join(__dirname, filePath);
  let content = fs.readFileSync(fullPath, 'utf8');
  
  content = content.replace(/image:\s*['"]https:\/\/teaminspire\.co\.in[^'"]+['"]/g, () => {
    const img = machineImages[globalIndex % machineImages.length];
    globalIndex++;
    return `image: '${img}'`;
  });
  
  fs.writeFileSync(fullPath, content);
  console.log('Updated ' + filePath);
}

replaceImagesInFile('data/products.ts');
replaceImagesInFile('data/categories.ts');
replaceImagesInFile('data/projects.ts');
replaceImagesInFile('data/services.ts');
