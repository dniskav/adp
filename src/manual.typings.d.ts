declare module 'date-holidays';

declare let TcGridUtil: {
  RefreshTCMGrid: () => void;
  RecordTypes: {
    DatePlaceholder: number;
  };
}

declare let TcGridTable: {
  DataGrid: {
    store: {
      data: AdpRow[];
    };
  };
};

declare interface AdpRow {
  PayCodeID?: string;
  Lcf3?: string;
  Lcf4?: string;
  TotalHours?: number;
  Value?: number;
  InDate?: Date;
  RecordType?: number;
  ProcessDTOStatus?: number;
}

interface Window {
  requestIdleCallback: (callback: Function, opts: { timeout: number }) => void;
}
