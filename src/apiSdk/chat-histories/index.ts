import axios from 'axios';
import queryString from 'query-string';
import { ChatHistoryInterface, ChatHistoryGetQueryInterface } from 'interfaces/chat-history';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getChatHistories = async (
  query?: ChatHistoryGetQueryInterface,
): Promise<PaginatedInterface<ChatHistoryInterface>> => {
  const response = await axios.get('/api/chat-histories', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createChatHistory = async (chatHistory: ChatHistoryInterface) => {
  const response = await axios.post('/api/chat-histories', chatHistory);
  return response.data;
};

export const updateChatHistoryById = async (id: string, chatHistory: ChatHistoryInterface) => {
  const response = await axios.put(`/api/chat-histories/${id}`, chatHistory);
  return response.data;
};

export const getChatHistoryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/chat-histories/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteChatHistoryById = async (id: string) => {
  const response = await axios.delete(`/api/chat-histories/${id}`);
  return response.data;
};
