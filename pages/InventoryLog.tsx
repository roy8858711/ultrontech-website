import React, { useEffect, useState } from 'react';
import { InventoryLog, ActionType } from '../types';
import { mockDb } from '../services/mockDb';
import { FileDown, Search, ArrowDownCircle, ArrowUpCircle } from 'lucide-react';

const InventoryLogPage: React.FC = () => {
  const [logs, setLogs] = useState<InventoryLog[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLogs(mockDb.getLogs());
  }, []);

  const handleExport = () => {
    // Basic CSV Export simulation
    const headers = ['Log ID', 'Device', 'Action', 'Quantity', 'Time', 'Note'];
    const rows = logs.map(l => [
        l.logId, 
        l.deviceName, 
        l.actionType, 
        l.quantity, 
        new Date(l.timestamp).toLocaleString(), 
        l.note
    ]);
    
    const csvContent = "data:text/csv;charset=utf-8," 
        + headers.join(",") + "\n" 
        + rows.map(e => e.join(",")).join("\n");
        
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "inventory_logs.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLogs = logs.filter(l => 
    l.deviceName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.note.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Inventory Logs</h1>
          <p className="text-gray-500">History of all IN/OUT operations.</p>
        </div>
        <button 
            onClick={handleExport}
            className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors shadow-sm font-medium"
        >
          <FileDown size={18} />
          Export to Excel
        </button>
      </div>

       {/* Search Bar */}
       <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search logs..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-600 font-semibold border-b border-gray-200">
              <tr>
                <th className="px-6 py-4">Time</th>
                <th className="px-6 py-4">Action</th>
                <th className="px-6 py-4">Device</th>
                <th className="px-6 py-4 text-right">Quantity</th>
                <th className="px-6 py-4">Note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredLogs.map((log) => (
                <tr key={log.logId} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-gray-500 whitespace-nowrap">
                    {new Date(log.timestamp).toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                        log.actionType === ActionType.IN 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                        {log.actionType === ActionType.IN ? <ArrowDownCircle size={14}/> : <ArrowUpCircle size={14} />}
                        {log.actionType}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">{log.deviceName}</td>
                  <td className="px-6 py-4 text-right font-mono text-gray-700">{log.quantity}</td>
                  <td className="px-6 py-4 text-gray-600 italic truncate max-w-xs">{log.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InventoryLogPage;