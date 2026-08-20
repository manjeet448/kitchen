export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Aarav Patel',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Head of Kitchen Design',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    name: 'Rahul Gupta',
    role: 'Lead Installation Engineer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
  },
  {
    id: '4',
    name: 'Neha Singh',
    role: 'Customer Success Manager',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
  }
];
