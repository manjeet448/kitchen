'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, Users, Grid, Package, ShoppingCart, 
  UserCircle, MessageSquare, Briefcase, Settings, 
  FileText, LogOut, FileImage, Shield
} from 'lucide-react';
import { cn } from '@/utils/helper';

const menuItems = [
  { label: 'MAIN' },
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
  { icon: Users, label: 'Users', href: '/admin/users' },
  { label: 'Product Management' },
  { icon: Grid, label: 'Categories', href: '/admin/categories' },
  { icon: Package, label: 'Products', href: '/admin/products' },
  { label: 'Orders' },
  { icon: ShoppingCart, label: 'Orders List', href: '/admin/orders' },
  { label: 'Content Management' },
  { icon: UserCircle, label: 'Clients', href: '/admin/clients' },
  { icon: MessageSquare, label: 'Testimonials', href: '/admin/testimonials' },
  { icon: Briefcase, label: 'Projects', href: '/admin/projects' },
  { icon: FileImage, label: 'Services', href: '/admin/services' },
  { icon: FileText, label: 'Pages', href: '/admin/pages' },
  { label: 'Settings' },
  { icon: Settings, label: 'Site Settings', href: '/admin/site-settings' },
  { icon: Shield, label: 'Admin Settings', href: '/admin/settings' },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-[240px] bg-[#161C2D] min-h-screen text-white/70 flex flex-col fixed left-0 top-0 overflow-y-auto shadow-xl z-50 hidden lg:flex">
      <div className="p-6 border-b border-white/5 flex-shrink-0">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 border border-primary flex items-center justify-center rounded bg-transparent">
            <span className="text-primary font-bold text-sm">TI</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold leading-tight text-sm tracking-wide">HHE EQUIPMENT</span>
            <span className="text-[10px] text-white/50 tracking-wider">Admin Panel</span>
          </div>
        </Link>
      </div>

      <div className="flex-1 py-4 flex flex-col gap-1">
        {menuItems.map((item, index) => {
          if (!item.href) {
            return (
              <div key={index} className="text-[10px] uppercase tracking-wider font-semibold text-white/40 mt-5 mb-2 px-6">
                {item.label}
              </div>
            );
          }
          const isActive = pathname === item.href;
          const Icon = item.icon!;
          return (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex items-center gap-3 mx-4 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                isActive 
                  ? "bg-white/10 text-white" 
                  : "hover:bg-white/5 hover:text-white text-white/70"
              )}
            >
              <Icon size={18} className={isActive ? "text-primary" : ""} />
              {item.label}
            </Link>
          );
        })}
      </div>
      
      <div className="p-4 border-t border-white/5 mt-auto">
        <button className="flex items-center gap-3 px-4 py-2.5 w-full rounded-lg text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white transition-colors">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}
