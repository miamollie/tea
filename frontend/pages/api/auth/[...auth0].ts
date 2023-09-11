import {
  handleAuth,
  handleCallback,
  handleLogin,
  handleLogout,
} from "@auth0/nextjs-auth0";

const AUTH0_BASE_URL =
  process.env.AUTH0_BASE_URL || `https://${process.env.NEXT_PUBLIC_AUTH0_BASE_URL}`;

const redirectUri = `${AUTH0_BASE_URL}/api/auth/callback`;

export default handleAuth({
  login: handleLogin({
    authorizationParams: { redirect_uri: redirectUri },
  }),
  callback: handleCallback({ redirectUri }),
  logout: handleLogout({
    returnTo: `${AUTH0_BASE_URL}/`,
  }),
});
