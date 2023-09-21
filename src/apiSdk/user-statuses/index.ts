import axios from 'axios';
import queryString from 'query-string';
import { UserStatusInterface, UserStatusGetQueryInterface } from 'interfaces/user-status';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getUserStatuses = async (
  query?: UserStatusGetQueryInterface,
): Promise<PaginatedInterface<UserStatusInterface>> => {
  const response = await axios.get('/api/user-statuses', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createUserStatus = async (userStatus: UserStatusInterface) => {
  const response = await axios.post('/api/user-statuses', userStatus);
  return response.data;
};

export const updateUserStatusById = async (id: string, userStatus: UserStatusInterface) => {
  const response = await axios.put(`/api/user-statuses/${id}`, userStatus);
  return response.data;
};

export const getUserStatusById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/user-statuses/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteUserStatusById = async (id: string) => {
  const response = await axios.delete(`/api/user-statuses/${id}`);
  return response.data;
};
