import { createUserManager } from 'redux-oidc'

const config = {
  // the URL of our identity server
  authority: "http://localhost:5001",
  // this ID maps to the client ID in the identity client configuration
  client_id: "SPA.client",
  // URL to redirect to after login
  redirect_uri: "http://localhost:3000/signin-oidc",
  response_type: "code",
  // the scopes or resources we would like access to
  scope: "openid profile email phone address api1 Role",
  // URL to redirect to after logout http://localhost:3000/signout-callback-oidc
  client_secret: "secret",
  post_logout_redirect_uri: "http://localhost:3000/signout-callback-oidc",
  loadUserInfo: true
};

// initialise!
const userManager = new createUserManager(config)

export var AuthMe = (props) => {
  debugger
  userManager.signinRedirect();
}
export var LogOutMe = () => {
  userManager.signoutRedirect();
}

export var GetUser = () => {

  return userManager.getUser().then(responce => {
    debugger;
    if (responce) {
      return responce
    }
    else {
      console.log("User is null");
    }
  });
}

export const GetTokens = () => {
  return userManager.getUser().then(responce => {
    console.log(responce)
    if (responce) {
      return responce
    }
  })
}

export var RedirectAuth = () => {
  userManager.signinRedirectCallback().then(function () {
    window.location = "/Timetable";
  }).catch(function (e) {
    console.error(e);
  });
}

export const GetUserInfo = () =>{


}