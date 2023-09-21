import { GetQueryInterface } from 'interfaces';

export interface ChatSessionInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ChatSessionGetQueryInterface extends GetQueryInterface {
  id?: string;
}
