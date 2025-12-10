export enum ActionType {
  IN = 'IN',
  OUT = 'OUT'
}

export interface Device {
  deviceId: number;      // Matches SQL: DeviceId int PK
  deviceName: string;    // Matches SQL: DeviceName nvarchar
  model: string;         // Matches SQL: Model nvarchar
  currentStock: number;  // Matches SQL: CurrentStock int
}

export interface InventoryLog {
  logId: number;         // Matches SQL: LogId int PK
  deviceId: number;      // Matches SQL: DeviceId int FK
  deviceName?: string;   // Joined field for display
  actionType: ActionType;// Matches SQL: ActionType nvarchar(10)
  quantity: number;      // Matches SQL: Quantity int
  timestamp: string;     // Matches SQL: Timestamp datetime
  note: string;          // Matches SQL: Note nvarchar
}

export interface StockReportItem {
  name: string;
  stock: number;
  model: string;
}