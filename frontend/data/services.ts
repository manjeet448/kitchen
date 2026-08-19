import { ClipboardList, Truck, PenTool, Wrench, ShieldCheck, HelpCircle, Settings, Users } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: any;
  slug: string;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Kitchen Design',
    description: 'Expert planning and layout design for optimal workflow and efficiency.',
    image: '/images/services/service_kitchen_design_1785520995085.png',
    icon: ClipboardList,
    slug: 'kitchen-design',
  },
  {
    id: '2',
    title: 'Equipment Supply',
    description: 'Sourcing and supplying premium commercial kitchen equipment globally.',
    image: '/images/services/service_equipment_supply_1785521007315.png',
    icon: Truck,
    slug: 'equipment-supply',
  },
  {
    id: '3',
    title: 'Installation',
    description: 'Professional installation by certified technicians ensuring safety and compliance.',
    image: '/images/services/service_installation_1785521017747.png',
    icon: PenTool,
    slug: 'installation',
  },
  {
    id: '4',
    title: 'Repair & Maintenance',
    description: 'Rapid response repair services to minimize downtime in your kitchen.',
    image: '/images/services/service_repair_maintenance_1785521036751.png',
    icon: Wrench,
    slug: 'repair-maintenance',
  },
  {
    id: '5',
    title: 'Annual Maintenance (AMC)',
    description: 'Comprehensive AMC packages for proactive equipment care.',
    image: '/images/services/service_amc_1785521048906.png',
    icon: ShieldCheck,
    slug: 'amc',
  },
  {
    id: '6',
    title: 'Consultation',
    description: 'Strategic advice on kitchen operations, menu planning, and equipment selection.',
    image: '/images/services/service_consultation_1785521061941.png',
    icon: HelpCircle,
    slug: 'consultation',
  },
  {
    id: '7',
    title: 'Spare Parts',
    description: 'Genuine OEM spare parts availability for all major equipment brands.',
    image: '/images/services/service_spare_parts_1785521074957.png',
    icon: Settings,
    slug: 'spare-parts',
  },
  {
    id: '8',
    title: 'After Sales Support',
    description: 'Dedicated 24/7 support team to assist with any operational issues.',
    image: '/images/services/service_after_sales_1785521086434.png',
    icon: Users,
    slug: 'technical-support',
  }
];
