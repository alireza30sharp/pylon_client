
import { AuthConfig } from 'angular-oauth2-oidc';

export const authPasswordFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  //issuer: 'http://localhost:5296',
  // URL of the SPA to redirect the user to after login
  redirectUri:
        window.location.origin + '/login',
        responseType: 'id_token token',
  //loginUrl: "http://localhost:5296/api/account/login",
  userinfoEndpoint: "http://localhost:5296/api/account",
  tokenEndpoint: "http://localhost:5296/api/account",
  //clientId: "spa",
  //dummyClientSecret: "G6ZjGyuKnKabrdrPf27oj7RQHWl2kxl6",
  strictDiscoveryDocumentValidation: false,
  //useSilentRefresh:"http://localhost:5296/api/account/refresh-user-token",
  //loginUrl: "http://localhost:8100/login",
  //revocationEndpoint:"http://localhost:5296/api/account/refresh-user-token",
  //responseType: 'code',
  // clientId: 'spa',
  // scope: 'openid profile email offline_access api',
  oidc: false,
  useSilentRefresh: true,
  requestAccessToken: true,
  sessionChecksEnabled: true,
  
  // silentRefreshRedirectUri: 'http://localhost:8100/silent-refresh.html',
  // silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  // timeoutFactor: 0.75,
  // sessionCheckIntervall: 3000,
  // silentRefreshTimeout: 1000,
  // silentRefreshShowIFrame: false,
  // disableAtHashCheck: false,
  // skipSubjectCheck: false,
  // customQueryParams: null,
  // URL of the SPA to redirect the user after silent refresh
  //silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',

  // defaults to true for implicit flow and false for code flow
  // as for code code the default is using a refresh_token
  // Also see docs section 'Token Refresh'
  //useSilentRefresh: true,

  //oidc: true,
  // requestAccessToken: true,
  // timeoutFactor: 0.75, // For faster testing
  //  silentRefreshTimeout: 1 * 60 * 1000, // For faster testing
  showDebugInformation: true,
};
