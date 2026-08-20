'use client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const data = [
  { name: 'Jan', sales: 0 },
  { name: 'Feb', sales: 50000 },
  { name: 'Mar', sales: 30000 },
  { name: 'Apr', sales: 90000 },
  { name: 'May', sales: 60000 },
  { name: 'Jun', sales: 130000 },
  { name: 'Jul', sales: 180000 },
];

export default function SalesChart() {
  const formatYAxis = (tickItem: number) => {
    return tickItem === 0 ? '₹0' : `₹${tickItem / 1000}k`;
  };

  return (
    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-gray-900">Sales Overview</h3>
        <select className="text-sm border-none text-gray-500 bg-transparent focus:ring-0 cursor-pointer outline-none">
          <option>This Year</option>
          <option>Last Year</option>
        </select>
      </div>
      
      <div className="flex-1 w-full min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} tickFormatter={formatYAxis} />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              formatter={(value: any) => [`₹${value?.toLocaleString()}`, 'Sales']}
            />
            <Area type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorSales)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
