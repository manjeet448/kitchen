export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Grand Hyatt Kitchen Refit',
    category: 'Hotels',
    location: 'Mumbai, India',
    image: 'https://teaminspire.co.in/wp-content/uploads/2024/03/LoneOakDesignCo-BackOfHouse-Before-7416.jpg',
  },
  {
    id: '2',
    title: 'The Continental Fine Dining',
    category: 'Restaurants',
    location: 'New Delhi, India',
    image: 'https://teaminspire.co.in/wp-content/uploads/2024/03/DAH_Indiana_Display_Home_LR-21.jpg',
  },
  {
    id: '3',
    title: 'Apollo Hospital Cafeteria',
    category: 'Hospitals',
    location: 'Chennai, India',
    image: 'https://teaminspire.co.in/wp-content/uploads/2024/02/kitchen-egvs.jpg',
  },
  {
    id: '4',
    title: 'TechPark Employee Canteen',
    category: 'Industrial',
    location: 'Bangalore, India',
    image: 'https://teaminspire.co.in/wp-content/uploads/2024/03/Untitled_Export-Wkw0AEiUU2.jpeg',
  },
];
