import React, { useEffect, useState } from 'react';
import { mockDb } from '../services/mockDb';
import { Device } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const StockReport: React.FC = () => {
  const [data, setData] = useState<Device[]>([]);

  useEffect(() => {
    setData(mockDb.getDevices());
  }, []);

  // Calculate stats
  const totalStock = data.reduce((acc, curr) => acc + curr.currentStock, 0);
  const totalDevices = data.length;
  const lowStockItems = data.filter(d => d.currentStock < 5).length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Stock Report</h1>
        <p className="text-gray-500">Visual overview of current inventory distribution.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Total Items</h3>
            <p className="text-4xl font-bold text-blue-600 mt-2">{totalStock}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Device Types</h3>
            <p className="text-4xl font-bold text-indigo-600 mt-2">{totalDevices}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Low Stock Alerts</h3>
            <p className={`text-4xl font-bold mt-2 ${lowStockItems > 0 ? 'text-red-500' : 'text-green-500'}`}>{lowStockItems}</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 h-[500px]">
        <h3 className="text-lg font-bold text-gray-800 mb-6">Inventory Levels by Device</h3>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={true} />
            <XAxis type="number" />
            <YAxis 
                type="category" 
                dataKey="deviceName" 
                width={150} 
                tick={{ fontSize: 12 }}
            />
            <Tooltip 
                cursor={{ fill: '#f3f4f6' }}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Bar dataKey="currentStock" name="Quantity" radius={[0, 4, 4, 0]} barSize={30}>
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.currentStock < 5 ? '#ef4444' : '#3b82f6'} />
                ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StockReport;