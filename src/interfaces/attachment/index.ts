import { GetQueryInterface } from 'interfaces';

export interface AttachmentInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface AttachmentGetQueryInterface extends GetQueryInterface {
  id?: string;
}
