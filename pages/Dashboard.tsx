import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, ArrowRightLeft } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-lg">
        <h1 className="text-3xl font-bold mb-2">Welcome to InvenTrack Pro</h1>
        <p className="text-blue-100 max-w-2xl">
          A secure, transactional inventory management system. Manage your device assets, track IN/OUT history, and view real-time stock reports.
        </p>
        <div className="mt-6 flex gap-4">
            <Link to="/inventory/create" className="bg-white text-blue-700 px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Start Operation
            </Link>
            <Link to="/report/stock" className="bg-blue-800 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-900 transition-colors">
                View Reports
            </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/device/list" className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex justify-between items-center mb-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Package size={24} />
                </div>
                <ArrowRight className="text-gray-300 group-hover:text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Manage Devices</h3>
            <p className="text-gray-500 mt-2">Add new devices, edit details, and view current master stock lists.</p>
        </Link>

        <Link to="/inventory/log" className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex justify-between items-center mb-4">
                <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <ArrowRightLeft size={24} />
                </div>
                <ArrowRight className="text-gray-300 group-hover:text-indigo-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Audit Logs</h3>
            <p className="text-gray-500 mt-2">Full traceability of every stock movement with timestamp and notes.</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;