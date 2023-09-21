import axios from 'axios';
import queryString from 'query-string';
import { ClientInfoInterface, ClientInfoGetQueryInterface } from 'interfaces/client-info';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getClientInfos = async (
  query?: ClientInfoGetQueryInterface,
): Promise<PaginatedInterface<ClientInfoInterface>> => {
  const response = await axios.get('/api/client-infos', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createClientInfo = async (clientInfo: ClientInfoInterface) => {
  const response = await axios.post('/api/client-infos', clientInfo);
  return response.data;
};

export const updateClientInfoById = async (id: string, clientInfo: ClientInfoInterface) => {
  const response = await axios.put(`/api/client-infos/${id}`, clientInfo);
  return response.data;
};

export const getClientInfoById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/client-infos/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteClientInfoById = async (id: string) => {
  const response = await axios.delete(`/api/client-infos/${id}`);
  return response.data;
};
