import React from "react"
import { navigate } from "gatsby"

import { AuthProvider } from "react-use-auth"

// import "./src/styles/reset.css"

const params = {
  // domain: process.env.AUTH0_DOMAIN,
  // clientID: process.env.AUTH0_CLIENTID,
  redirectUri: process.env.AUTH0_CALLBACK,
  // audience: `https://${auth0_domain}/api/v2/`,
  // responseType: "token id_token",
  // scope: "openid profile email"
}

export const wrapRootElement = ({ element }) => (
    <AuthProvider
        navigate={navigate}
        auth0_domain={process.env.AUTH0_DOMAIN}
        auth0_client_id={process.env.AUTH0_CLIENTID}
        auth0_params={params}
    >
        {element}
    </AuthProvider>
)
