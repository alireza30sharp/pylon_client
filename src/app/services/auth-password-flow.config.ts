
import { AuthConfig } from 'angular-oauth2-oidc';

export const authPasswordFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  //issuer: 'http://localhost:5296/api/account',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/index.html',
  tokenEndpoint: "http://localhost:5296/api/account",
  loginUrl:"http://localhost:8100/login",
  //revocationEndpoint:"http://localhost:5296/api/account/refresh-user-token",
  silentRefreshIFrameName:"refresh-user-token",
  silentRefreshRedirectUri:"http://localhost:5296/api/account/refresh-user-token",
  useSilentRefresh:true,
  
  oidc: true,
  requestAccessToken: true,
  timeoutFactor: 0.75, // For faster testing
  //  silentRefreshTimeout: 1 * 60 * 1000, // For faster testing
  showDebugInformation: true,
};
