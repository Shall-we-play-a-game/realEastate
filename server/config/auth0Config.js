import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
  audience: "http://localhost:8000",
  issuerBaseURL: "https://dev-bsni3k3np1y56uj1.us.auth0.com",
  tokenSigningAlg: "RS256",
});

export default jwtCheck;
