const mapping: Record<string, string> = {
  attachments: 'attachment',
  'chat-histories': 'chat_history',
  'chat-sessions': 'chat_session',
  clients: 'client',
  'client-infos': 'client_info',
  'client-sessions': 'client_sessions',
  messages: 'message',
  'message-attachments': 'message_attachments',
  users: 'user',
  'user-notifications': 'user_notifications',
  'user-preferences': 'user_preferences',
  'user-statuses': 'user_status',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
