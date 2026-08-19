'use client';
import { Search, Bell, Menu, ChevronDown, LogOut } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminHeader() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/login');
      router.refresh();
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <header className="h-[70px] bg-white flex items-center justify-between px-6 sticky top-0 z-40 shadow-sm border-b border-gray-100">
      <div className="flex items-center gap-4">
        <button className="text-gray-500 hover:text-dark p-1 lg:hidden">
          <Menu size={24} />
        </button>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative hidden md:block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input 
            type="text" 
            placeholder="Search here..." 
            className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-sm w-64 focus:outline-none focus:border-gray-300 transition-all text-gray-700"
          />
        </div>

        <button className="relative text-gray-500 hover:text-dark transition-colors">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
            5
          </span>
        </button>

        <div className="relative">
          <div 
            className="flex items-center gap-3 cursor-pointer pl-4 border-l border-gray-200"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden relative border border-gray-200">
              <Image 
                src="https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff" 
                alt="Admin User" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="hidden md:flex flex-col">
              <span className="text-sm font-semibold text-dark leading-none mb-1">Admin User</span>
              <span className="text-[11px] text-gray-500 leading-none">Super Admin</span>
            </div>
            <ChevronDown size={14} className="text-gray-400 ml-1" />
          </div>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-100 py-1 z-50">
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-50 w-full text-left"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
