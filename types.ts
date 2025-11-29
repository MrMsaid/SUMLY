export interface ReceiptItem {
  name: string;
  amount: number;
  category: string;
}

export interface AnalysisResult {
  total: number;
  currency: string;
  items: ReceiptItem[];
  insight: string;
  savingsTip: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}