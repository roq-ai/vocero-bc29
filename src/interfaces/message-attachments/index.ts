import { GetQueryInterface } from 'interfaces';

export interface MessageAttachmentsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface MessageAttachmentsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
