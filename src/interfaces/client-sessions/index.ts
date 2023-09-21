import { GetQueryInterface } from 'interfaces';

export interface ClientSessionsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ClientSessionsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
