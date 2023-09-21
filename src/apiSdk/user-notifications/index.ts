import axios from 'axios';
import queryString from 'query-string';
import { UserNotificationsInterface, UserNotificationsGetQueryInterface } from 'interfaces/user-notifications';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getUserNotifications = async (
  query?: UserNotificationsGetQueryInterface,
): Promise<PaginatedInterface<UserNotificationsInterface>> => {
  const response = await axios.get('/api/user-notifications', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createUserNotifications = async (userNotifications: UserNotificationsInterface) => {
  const response = await axios.post('/api/user-notifications', userNotifications);
  return response.data;
};

export const updateUserNotificationsById = async (id: string, userNotifications: UserNotificationsInterface) => {
  const response = await axios.put(`/api/user-notifications/${id}`, userNotifications);
  return response.data;
};

export const getUserNotificationsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/user-notifications/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteUserNotificationsById = async (id: string) => {
  const response = await axios.delete(`/api/user-notifications/${id}`);
  return response.data;
};
