import axios from 'axios';
import queryString from 'query-string';
import { MessageAttachmentsInterface, MessageAttachmentsGetQueryInterface } from 'interfaces/message-attachments';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMessageAttachments = async (
  query?: MessageAttachmentsGetQueryInterface,
): Promise<PaginatedInterface<MessageAttachmentsInterface>> => {
  const response = await axios.get('/api/message-attachments', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createMessageAttachments = async (messageAttachments: MessageAttachmentsInterface) => {
  const response = await axios.post('/api/message-attachments', messageAttachments);
  return response.data;
};

export const updateMessageAttachmentsById = async (id: string, messageAttachments: MessageAttachmentsInterface) => {
  const response = await axios.put(`/api/message-attachments/${id}`, messageAttachments);
  return response.data;
};

export const getMessageAttachmentsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/message-attachments/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteMessageAttachmentsById = async (id: string) => {
  const response = await axios.delete(`/api/message-attachments/${id}`);
  return response.data;
};
