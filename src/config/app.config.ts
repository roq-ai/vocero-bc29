interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Admin'],
  tenantName: 'Client',
  applicationName: 'vocero',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage user notifications',
    'Manage client sessions',
    'Manage message attachments',
    'Manage chat history',
    'Manage user preferences',
    'Manage client info',
    'Manage user status',
    'Manage attachments',
    'Manage messages',
    'Manage chat sessions',
    'Manage users',
    'Manage clients',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/8c817add-9883-489c-8dc1-87534eddb758',
};
