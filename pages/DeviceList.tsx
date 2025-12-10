import React, { useEffect, useState } from 'react';
import { Device } from '../types';
import { mockDb } from '../services/mockDb';
import { Package, Search, Plus } from 'lucide-react';

const DeviceList: React.FC = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newDeviceName, setNewDeviceName] = useState('');
  const [newDeviceModel, setNewDeviceModel] = useState('');

  const loadData = () => {
      setDevices(mockDb.getDevices());
  }

  useEffect(() => {
    loadData();
  }, []);

  const handleAddDevice = (e: React.FormEvent) => {
      e.preventDefault();
      if(newDeviceName && newDeviceModel) {
          mockDb.addDevice(newDeviceName, newDeviceModel);
          setNewDeviceName('');
          setNewDeviceModel('');
          setShowAddModal(false);
          loadData();
      }
  }

  const filteredDevices = devices.filter(
    (d) =>
      d.deviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Device List</h1>
          <p className="text-gray-500">View and manage current inventory stock levels.</p>
        </div>
        <button 
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors shadow-sm"
        >
          <Plus size={18} />
          Add New Device
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search by name or model..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-600 font-semibold border-b border-gray-200">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Device Name</th>
                <th className="px-6 py-4">Model</th>
                <th className="px-6 py-4 text-center">Current Stock</th>
                <th className="px-6 py-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredDevices.length > 0 ? (
                filteredDevices.map((device) => (
                  <tr key={device.deviceId} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-500">#{device.deviceId}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">{device.deviceName}</td>
                    <td className="px-6 py-4 text-gray-600">{device.model}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        device.currentStock > 10 ? 'bg-green-100 text-green-800' :
                        device.currentStock > 0 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {device.currentStock}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                        {device.currentStock === 0 ? (
                            <span className="text-red-500 text-xs font-semibold uppercase tracking-wider">Out of Stock</span>
                        ) : (
                            <span className="text-green-600 text-xs font-semibold uppercase tracking-wider">Available</span>
                        )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-400 flex flex-col items-center">
                    <Package size={48} className="mb-2 opacity-20" />
                    No devices found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Device Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
                <h3 className="text-lg font-bold mb-4">Register New Device</h3>
                <form onSubmit={handleAddDevice} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Device Name</label>
                        <input 
                            required 
                            type="text" 
                            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" 
                            value={newDeviceName}
                            onChange={(e) => setNewDeviceName(e.target.value)}
                            placeholder="e.g. ThinkPad X1"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Model</label>
                        <input 
                            required 
                            type="text" 
                            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" 
                            value={newDeviceModel}
                            onChange={(e) => setNewDeviceModel(e.target.value)}
                            placeholder="e.g. Gen 10"
                        />
                    </div>
                    <div className="flex justify-end gap-2 mt-6">
                        <button type="button" onClick={() => setShowAddModal(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Save</button>
                    </div>
                </form>
            </div>
        </div>
      )}
    </div>
  );
};

export default DeviceList;