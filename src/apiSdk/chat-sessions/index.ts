import axios from 'axios';
import queryString from 'query-string';
import { ChatSessionInterface, ChatSessionGetQueryInterface } from 'interfaces/chat-session';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getChatSessions = async (
  query?: ChatSessionGetQueryInterface,
): Promise<PaginatedInterface<ChatSessionInterface>> => {
  const response = await axios.get('/api/chat-sessions', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createChatSession = async (chatSession: ChatSessionInterface) => {
  const response = await axios.post('/api/chat-sessions', chatSession);
  return response.data;
};

export const updateChatSessionById = async (id: string, chatSession: ChatSessionInterface) => {
  const response = await axios.put(`/api/chat-sessions/${id}`, chatSession);
  return response.data;
};

export const getChatSessionById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/chat-sessions/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteChatSessionById = async (id: string) => {
  const response = await axios.delete(`/api/chat-sessions/${id}`);
  return response.data;
};
