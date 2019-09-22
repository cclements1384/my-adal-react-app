// src/config/AdalConfig.js
export default {
  clientId: 'd6108e6b-3d6e-430a-bb88-449b323cee2d',
  endpoints: {
    api: "d6108e6b-3d6e-430a-bb88-449b323cee2d" // Necessary for CORS requests, for more info see https://github.com/AzureAD/azure-activedirectory-library-for-js/wiki/CORS-usage
  },
  // 'tenant' is the Azure AD instance.
  tenant: 'fcd0c726-b65b-4392-be1a-4c6ae4d124ba',
  // 'cacheLocation' is set to 'sessionStorage' by default (see https://github.com/AzureAD/azure-activedirectory-library-for-js/wiki/Config-authentication-context#configurable-options.
  // We change it to'localStorage' because 'sessionStorage' does not work when our app is served on 'localhost' in development.
  cacheLocation: 'localStorage'
}