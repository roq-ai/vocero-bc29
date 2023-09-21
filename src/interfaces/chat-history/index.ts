import { GetQueryInterface } from 'interfaces';

export interface ChatHistoryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ChatHistoryGetQueryInterface extends GetQueryInterface {
  id?: string;
}
