import { cn } from '@/utils/helper';

const orders = [
  { id: '#ORD001', customer: 'Hotel Taj Palace', amount: '₹85,000', status: 'Completed' },
  { id: '#ORD002', customer: 'Barbeque Nation', amount: '₹42,500', status: 'Processing' },
  { id: '#ORD003', customer: 'Fortis Hospital', amount: '₹1,25,000', status: 'Completed' },
  { id: '#ORD004', customer: 'Third Wave Coffee', amount: '₹28,000', status: 'Pending' },
  { id: '#ORD005', customer: 'ITC Limited', amount: '₹75,000', status: 'Completed' },
];

export default function RecentOrders() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm h-full flex flex-col">
      <div className="p-5 flex justify-between items-center border-b border-gray-50">
        <h3 className="font-bold text-gray-900">Recent Orders</h3>
        <button className="text-xs text-gray-400 border px-2 py-1 rounded">View All</button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="text-xs uppercase text-gray-400 bg-gray-50/50">
            <tr>
              <th className="px-5 py-3 font-medium">Order ID</th>
              <th className="px-5 py-3 font-medium">Customer</th>
              <th className="px-5 py-3 font-medium">Amount</th>
              <th className="px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {orders.map((order, i) => (
              <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-5 py-3.5 font-medium text-gray-900">{order.id}</td>
                <td className="px-5 py-3.5">{order.customer}</td>
                <td className="px-5 py-3.5 font-medium">{order.amount}</td>
                <td className="px-5 py-3.5">
                  <span className={cn(
                    "px-2.5 py-1 text-[11px] font-medium rounded-md",
                    order.status === 'Completed' && "bg-green-100 text-green-700",
                    order.status === 'Processing' && "bg-orange-100 text-orange-700",
                    order.status === 'Pending' && "bg-yellow-100 text-yellow-700"
                  )}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
