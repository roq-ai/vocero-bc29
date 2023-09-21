import { GetQueryInterface } from 'interfaces';

export interface UserNotificationsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface UserNotificationsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
