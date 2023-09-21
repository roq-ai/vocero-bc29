import axios from 'axios';
import queryString from 'query-string';
import { ClientSessionsInterface, ClientSessionsGetQueryInterface } from 'interfaces/client-sessions';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getClientSessions = async (
  query?: ClientSessionsGetQueryInterface,
): Promise<PaginatedInterface<ClientSessionsInterface>> => {
  const response = await axios.get('/api/client-sessions', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createClientSessions = async (clientSessions: ClientSessionsInterface) => {
  const response = await axios.post('/api/client-sessions', clientSessions);
  return response.data;
};

export const updateClientSessionsById = async (id: string, clientSessions: ClientSessionsInterface) => {
  const response = await axios.put(`/api/client-sessions/${id}`, clientSessions);
  return response.data;
};

export const getClientSessionsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/client-sessions/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteClientSessionsById = async (id: string) => {
  const response = await axios.delete(`/api/client-sessions/${id}`);
  return response.data;
};
