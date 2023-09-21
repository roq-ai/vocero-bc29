import { GetQueryInterface } from 'interfaces';

export interface UserStatusInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface UserStatusGetQueryInterface extends GetQueryInterface {
  id?: string;
}
