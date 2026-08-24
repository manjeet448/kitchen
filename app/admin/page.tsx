import { Package, Grid, ShoppingCart, Plus, Eye } from 'lucide-react';
import SalesChart from '@/components/admin/SalesChart';
import CategoryChart from '@/components/admin/CategoryChart';
import RecentOrders from '@/components/admin/RecentOrders';
import RecentProducts from '@/components/admin/RecentProducts';
import Image from 'next/image';
import Link from 'next/link';
import prisma from '@/lib/prisma';

export default async function AdminDashboard() {
  const totalProducts = await prisma.product.count();
  const totalCategories = await prisma.category.count();
  const totalOrders = await prisma.order.count();

  const stats = [
    { label: 'Total Products', value: totalProducts.toString(), trend: 'Live Count', icon: Package, color: 'text-yellow-500', bg: 'bg-yellow-50', link: '/admin/products' },
    { label: 'Total Categories', value: totalCategories.toString(), trend: 'Live Count', icon: Grid, color: 'text-blue-500', bg: 'bg-blue-50', link: '/admin/categories' },
    { label: 'Total Orders', value: totalOrders.toString(), trend: 'Live Count', icon: ShoppingCart, color: 'text-green-500', bg: 'bg-green-50', link: '/admin/orders' },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-[1600px] mx-auto pb-10">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Welcome back, Admin!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          const trendIsUp = stat.trend.includes('↑');
          
          const cardContent = (
            <div className={`bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col transition-all duration-300 h-full ${stat.link ? 'hover:shadow-lg hover:border-primary hover:-translate-y-1 active:scale-95 cursor-pointer' : 'hover:shadow-md'}`}>
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-lg ${stat.bg} ${stat.color}`}>
                    <Icon size={22} />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">{stat.label}</p>
                    <h3 className="text-2xl font-bold text-gray-900 mt-0.5">{stat.value}</h3>
                  </div>
                </div>
              </div>
              <div className="mt-auto pt-1">
                <p className={`text-[11px] font-medium flex items-center gap-1 ${trendIsUp ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.trend}
                </p>
              </div>
            </div>
          );

          if (stat.link) {
            return (
              <Link href={stat.link} key={i} className="block h-full">
                {cardContent}
              </Link>
            );
          }

          return (
            <div key={i} className="h-full">
              {cardContent}
            </div>
          );
        })}
      </div>
      
      {/* CHARTS ROW 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-2">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <div>
          <RecentOrders />
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
        <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">
            <Plus size={16} /> Add New Product
          </button>
          <button className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">
            <Plus size={16} /> Add New Category
          </button>
          <button className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">
            <Plus size={16} /> Add New User
          </button>
          <button className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">
            <Eye size={16} /> View Orders
          </button>
        </div>
      </div>

      {/* ROW 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentProducts />
        </div>
        <div className="flex flex-col gap-6">
          <CategoryChart />
          
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-900">Top Selling Products</h3>
              <button className="text-xs text-gray-400 border px-2 py-1 rounded">View All</button>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded overflow-hidden relative border border-gray-100 flex-shrink-0">
                <Image src="https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=200&auto=format&fit=crop" alt="Top Product" fill className="object-cover" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 text-sm">Double Door Refrigerator</h4>
                <p className="text-xs text-gray-500 mb-2">Refrigeration</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">₹2,45,800</span>
                  <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded font-medium">120 Sales</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
