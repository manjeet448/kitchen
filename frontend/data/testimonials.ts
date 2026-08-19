export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Sharma',
    position: 'Executive Chef',
    company: 'The Grand Hotel',
    content: 'HHE EQUIPMENT transformed our kitchen. The equipment quality is unmatched, and their after-sales support is incredibly responsive.',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80',
    rating: 5,
  },
  {
    id: '2',
    name: 'Anita Desai',
    position: 'Owner',
    company: 'Spice Route Restaurant',
    content: 'From the initial design consultation to the final installation, the process was seamless. Highly recommend for any commercial kitchen needs.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
    rating: 5,
  },
  {
    id: '3',
    name: 'Vikram Singh',
    position: 'Operations Manager',
    company: 'City Hospital',
    content: 'Reliability is key in our hospital kitchen, and HHE EQUIPMENT delivered equipment that runs perfectly 24/7.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
    rating: 5,
  }
];
