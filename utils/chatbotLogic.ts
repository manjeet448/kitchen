import { products } from '@/data/products';
import { categories } from '@/data/categories';

export const generateBotResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();

  // Greetings (English & Hindi)
  if (lowerMessage.match(/\b(hi|hello|hey|greetings|namaste|kaise ho|kya haal|pranam)\b/)) {
    return "Hello! Namaste! 🙏 Welcome to HHE EQUIPMENT. Main aapki kya madad kar sakta hoon? Aap hamare products, services ya company ke baare mein pooch sakte hain.";
  }

  // Products & Categories (English & Hindi)
  if (lowerMessage.includes('product') || lowerMessage.includes('buy') || lowerMessage.includes('equipment') || lowerMessage.includes('machine') || lowerMessage.includes('kya bechte') || lowerMessage.includes('samaan')) {
    const categoryNames = categories.map(c => c.title).join(', ');
    return `We offer a wide range of premium commercial kitchen equipment. Hamari main categories hain: ${categoryNames}. Kya aap koi specific equipment dhoondh rahe hain?`;
  }

  if (lowerMessage.includes('peeler') || lowerMessage.includes('slicer') || lowerMessage.includes('mixer') || lowerMessage.includes('kaatne') || lowerMessage.includes('chhilne')) {
    return "Hamare paas bahut se high-capacity food processors, peelers, slicers aur mixers available hain (jaise Robot Coupe aur Sirman models). Aap aur details ke liye 'Food Processors' category check kar sakte hain!";
  }

  // Services (English & Hindi)
  if (lowerMessage.includes('service') || lowerMessage.includes('repair') || lowerMessage.includes('amc') || lowerMessage.includes('maintenance') || lowerMessage.includes('theek') || lowerMessage.includes('kharab')) {
    return `Hum complete end-to-end services provide karte hain jaise ki: Kitchen Design, Equipment Supply, Custom Fabrication, Installation, AMC, aur Spare Parts. Kya aapko installation ya repair/maintenance mein help chahiye?`;
  }

  // About Company (English & Hindi)
  if (lowerMessage.includes('about') || lowerMessage.includes('who are you') || lowerMessage.includes('experience') || lowerMessage.includes('kaun ho') || lowerMessage.includes('company')) {
    return "HHE EQUIPMENT is a premier supplier of commercial kitchen solutions. Humein industry mein 15 saal se zyada ka experience hai aur humne globally 500+ projects successfully complete kiye hain.";
  }

  // Contact (English & Hindi)
  if (lowerMessage.includes('contact') || lowerMessage.includes('call') || lowerMessage.includes('phone') || lowerMessage.includes('email') || lowerMessage.includes('location') || lowerMessage.includes('baat') || lowerMessage.includes('number') || lowerMessage.includes('address')) {
    return "Aap hamare Contact Page ke through humse jud sakte hain, ya fir screen ke bottom right mein WhatsApp button pe click karke direct hamari support team se baat kar sakte hain!";
  }
  
  // Pricing (English & Hindi)
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('quote') || lowerMessage.includes('kitne') || lowerMessage.includes('daam') || lowerMessage.includes('paisa') || lowerMessage.includes('rate')) {
    return "Products ki pricing unke models aur configurations par depend karti hai. Exact price/rate ke liye aap product detail page pe jaakar 'Request a Quote' button pe click kar sakte hain.";
  }

  // Fallback (English & Hindi)
  return "Main HHE EQUIPMENT ka ek simulated AI assistant hoon. Main aapko hamare products, services aur company ke baare mein bata sakta hoon. Kya aap apna sawal thoda alag tareeqe se pooch sakte hain? (Could you please rephrase your question?)";
};
