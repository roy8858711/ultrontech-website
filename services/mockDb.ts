import { Device, InventoryLog, ActionType } from '../types';

// Initial Seed Data
const INITIAL_DEVICES: Device[] = [
  { deviceId: 1, deviceName: 'MacBook Pro 14"', model: 'M3 Pro', currentStock: 15 },
  { deviceId: 2, deviceName: 'Dell XPS 15', model: '9530', currentStock: 8 },
  { deviceId: 3, deviceName: 'iPad Air', model: '5th Gen', currentStock: 25 },
  { deviceId: 4, deviceName: 'Logitech MX Master 3S', model: 'Mouse', currentStock: 50 },
  { deviceId: 5, deviceName: 'Keychron K2', model: 'Mechanical Keyboard', currentStock: 12 },
];

const INITIAL_LOGS: InventoryLog[] = [
  { logId: 101, deviceId: 1, actionType: ActionType.IN, quantity: 15, timestamp: new Date(Date.now() - 86400000 * 2).toISOString(), note: 'Initial Stock' },
  { logId: 102, deviceId: 2, actionType: ActionType.IN, quantity: 10, timestamp: new Date(Date.now() - 86400000 * 2).toISOString(), note: 'Initial Stock' },
  { logId: 103, deviceId: 2, actionType: ActionType.OUT, quantity: 2, timestamp: new Date(Date.now() - 86400000).toISOString(), note: 'Assigned to Dev Team' },
];

// LocalStorage Keys
const KEYS = {
  DEVICES: 'inventrack_devices',
  LOGS: 'inventrack_logs'
};

class MockDbService {
  constructor() {
    this.init();
  }

  private init() {
    if (!localStorage.getItem(KEYS.DEVICES)) {
      localStorage.setItem(KEYS.DEVICES, JSON.stringify(INITIAL_DEVICES));
    }
    if (!localStorage.getItem(KEYS.LOGS)) {
      localStorage.setItem(KEYS.LOGS, JSON.stringify(INITIAL_LOGS));
    }
  }

  // Simulates: SELECT * FROM Devices
  getDevices(): Device[] {
    const data = localStorage.getItem(KEYS.DEVICES);
    return data ? JSON.parse(data) : [];
  }

  // Simulates: SELECT * FROM InventoryLogs JOIN Devices ON ...
  getLogs(): InventoryLog[] {
    const logsStr = localStorage.getItem(KEYS.LOGS);
    const devicesStr = localStorage.getItem(KEYS.DEVICES);
    
    if (!logsStr || !devicesStr) return [];

    const logs: InventoryLog[] = JSON.parse(logsStr);
    const devices: Device[] = JSON.parse(devicesStr);

    // Join logic to populate deviceName for display
    return logs.map(log => {
      const device = devices.find(d => d.deviceId === log.deviceId);
      return {
        ...log,
        deviceName: device ? device.deviceName : 'Unknown Device'
      };
    }).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  }

  // Simulates Transaction: INSERT INTO Logs; UPDATE Devices SET Stock...
  createTransaction(deviceId: number, action: ActionType, quantity: number, note: string): { success: boolean; message: string } {
    const devices = this.getDevices();
    const logs = JSON.parse(localStorage.getItem(KEYS.LOGS) || '[]');

    const deviceIndex = devices.findIndex(d => d.deviceId === deviceId);
    if (deviceIndex === -1) {
      return { success: false, message: 'Device not found' };
    }

    const device = devices[deviceIndex];

    // Business Logic Validation
    if (action === ActionType.OUT) {
      if (device.currentStock < quantity) {
        return { success: false, message: `Insufficient stock. Current: ${device.currentStock}, Requested: ${quantity}` };
      }
      device.currentStock -= quantity;
    } else {
      device.currentStock += quantity;
    }

    // Create Log
    const newLog: InventoryLog = {
      logId: Date.now(), // Simulating Auto-Increment ID
      deviceId,
      actionType: action,
      quantity,
      timestamp: new Date().toISOString(),
      note
    };

    // Commit Transaction
    logs.push(newLog);
    devices[deviceIndex] = device;

    try {
      localStorage.setItem(KEYS.LOGS, JSON.stringify(logs));
      localStorage.setItem(KEYS.DEVICES, JSON.stringify(devices));
      return { success: true, message: 'Transaction successful' };
    } catch (e) {
      return { success: false, message: 'Database write error' };
    }
  }
  
  // Helper to simulate adding a new device type
  addDevice(name: string, model: string): Device {
      const devices = this.getDevices();
      const newDevice: Device = {
          deviceId: Math.floor(Math.random() * 10000) + 100,
          deviceName: name,
          model: model,
          currentStock: 0
      };
      devices.push(newDevice);
      localStorage.setItem(KEYS.DEVICES, JSON.stringify(devices));
      return newDevice;
  }
}

export const mockDb = new MockDbService();