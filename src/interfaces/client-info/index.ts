import { GetQueryInterface } from 'interfaces';

export interface ClientInfoInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ClientInfoGetQueryInterface extends GetQueryInterface {
  id?: string;
}
