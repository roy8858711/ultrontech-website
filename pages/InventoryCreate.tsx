import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Device, ActionType } from '../types';
import { mockDb } from '../services/mockDb';
import { CheckCircle, AlertCircle, PackagePlus, PackageMinus } from 'lucide-react';

const InventoryCreate: React.FC = () => {
  const navigate = useNavigate();
  const [devices, setDevices] = useState<Device[]>([]);
  const [selectedDevice, setSelectedDevice] = useState<number | ''>('');
  const [actionType, setActionType] = useState<ActionType>(ActionType.IN);
  const [quantity, setQuantity] = useState<number>(1);
  const [note, setNote] = useState('');
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; msg: string }>({ type: null, msg: '' });

  useEffect(() => {
    setDevices(mockDb.getDevices());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDevice) {
        setStatus({ type: 'error', msg: 'Please select a device.' });
        return;
    }

    const result = mockDb.createTransaction(Number(selectedDevice), actionType, quantity, note);

    if (result.success) {
      setStatus({ type: 'success', msg: 'Operation successful! Redirecting...' });
      // Reset form
      setQuantity(1);
      setNote('');
      // Delay redirect
      setTimeout(() => navigate('/inventory/log'), 1500);
    } else {
      setStatus({ type: 'error', msg: result.message });
    }
  };

  const currentDevice = devices.find(d => d.deviceId === Number(selectedDevice));

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">New Operation</h1>
        <p className="text-gray-500">Record incoming stock or outgoing assignments.</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Header with visual indicator of action type */}
        <div className={`p-6 border-b transition-colors duration-300 ${
            actionType === ActionType.IN ? 'bg-emerald-50 border-emerald-100' : 'bg-red-50 border-red-100'
        }`}>
            <div className="flex justify-center gap-4">
                <button
                    type="button"
                    onClick={() => setActionType(ActionType.IN)}
                    className={`flex-1 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                        actionType === ActionType.IN 
                        ? 'bg-emerald-600 text-white shadow-md' 
                        : 'bg-white text-emerald-700 hover:bg-emerald-100'
                    }`}
                >
                    <PackagePlus size={20} />
                    IN (Restock)
                </button>
                <button
                    type="button"
                    onClick={() => setActionType(ActionType.OUT)}
                    className={`flex-1 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                        actionType === ActionType.OUT 
                        ? 'bg-red-600 text-white shadow-md' 
                        : 'bg-white text-red-700 hover:bg-red-100'
                    }`}
                >
                    <PackageMinus size={20} />
                    OUT (Issue)
                </button>
            </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Status Message */}
          {status.type && (
            <div className={`p-4 rounded-lg flex items-center gap-3 ${
                status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
            }`}>
              {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
              <span>{status.msg}</span>
            </div>
          )}

          {/* Device Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Select Device</label>
            <select
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
              value={selectedDevice}
              onChange={(e) => {
                  setSelectedDevice(Number(e.target.value));
                  setStatus({ type: null, msg: '' });
              }}
            >
              <option value="">-- Choose a Device --</option>
              {devices.map((d) => (
                <option key={d.deviceId} value={d.deviceId}>
                  {d.deviceName} (Model: {d.model}) - Stock: {d.currentStock}
                </option>
              ))}
            </select>
            {currentDevice && (
                 <p className="mt-2 text-xs text-gray-500 text-right">
                    Current Stock available: <span className="font-bold text-gray-800">{currentDevice.currentStock}</span>
                 </p>
            )}
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Quantity</label>
            <input
              type="number"
              min="1"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none font-mono text-lg"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>

          {/* Note */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Note / Reference</label>
            <textarea
              required
              rows={3}
              placeholder="e.g. PO#12345 or Employee Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-4 rounded-lg text-white font-bold text-lg shadow-lg transition-transform active:scale-[0.98] ${
                actionType === ActionType.IN ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-red-600 hover:bg-red-700'
            }`}
          >
            Confirm {actionType === ActionType.IN ? 'Restock' : 'Issue'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default InventoryCreate;