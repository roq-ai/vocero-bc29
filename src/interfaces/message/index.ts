import { GetQueryInterface } from 'interfaces';

export interface MessageInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface MessageGetQueryInterface extends GetQueryInterface {
  id?: string;
}
