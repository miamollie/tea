import {
  handleAuth,
  handleCallback,
  handleLogin,
  handleLogout,
} from "@auth0/nextjs-auth0";

const AUTH0_BASE_URL =
  process.env.AUTH0_BASE_URL || process.env.NEXT_PUBLIC_AUTH0_BASE_URL;

const redirectUri = `${AUTH0_BASE_URL}/api/page-router-auth/callback`;

console.log("AUTH0_BASE_URL: " + AUTH0_BASE_URL);

export default handleAuth({
  login: handleLogin({
    authorizationParams: { redirect_uri: redirectUri },
  }),
  callback: handleCallback({ redirectUri }),
  logout: handleLogout({
    returnTo: `${AUTH0_BASE_URL}/page-router`,
  }),
});
