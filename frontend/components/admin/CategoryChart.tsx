'use client';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Cooking Equipment', value: 28, color: '#3b82f6' },
  { name: 'Refrigeration', value: 24, color: '#10b981' },
  { name: 'Bakery Equipment', value: 18, color: '#f59e0b' },
  { name: 'Dishwashing', value: 16, color: '#ef4444' },
  { name: 'Food Preparation', value: 20, color: '#8b5cf6' },
  { name: 'Others', value: 22, color: '#ec4899' },
];

export default function CategoryChart() {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-900">Category Overview</h3>
        <button className="text-xs text-gray-400 border px-2 py-1 rounded">View All</button>
      </div>
      
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-[180px] h-[180px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-xs text-gray-400">Total</span>
            <span className="text-2xl font-bold text-gray-900 leading-none">{total}</span>
            <span className="text-[10px] text-gray-400 mt-1">Categories</span>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col gap-2 w-full">
          {data.map((item, i) => (
            <div key={i} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></span>
                <span className="text-gray-600">{item.name}</span>
              </div>
              <span className="font-medium text-gray-900">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
