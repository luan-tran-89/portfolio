import AwsKeys from './AwsKeys';

const {
  clientId, responseType, scope,
  messagePath, awsCognitoURL
} = AwsKeys;

// const clientId = "3km8gpm8c0g4g950miklfspaev";
// const responseType = "token"
// const scope = "email+openid+phone";

// Edu account
// const messagePath = "https://rcu0fr082c.execute-api.us-east-1.amazonaws.com/v1";
// const awsCognitoURL = "https://universitymiu.auth.us-east-1.amazoncognito.com";
// const loginURL = `/oauth2/authorize?client_id=${clientId}&response_type=${responseType}&scope=${scope}&redirect_uri=${encodeURIComponent(window.location.href)}`;

// Personal account
// const messagePath = "https://93vs7u2uc5.execute-api.us-east-1.amazonaws.com/v1";
// const awsCognitoURL = "https://simplelife.auth.us-east-1.amazoncognito.com";
const loginURL = `/oauth2/authorize?client_id=${clientId}&response_type=${responseType}&scope=${scope}&redirect_uri=${encodeURIComponent(window.location.href)}`;
const logoutURL = "/logout";
const signupURL = "/signup";

const AwsAPIs = {
  awsCognitoSignUpURL: function () {
    return `${awsCognitoURL}${signupURL}?client_id=${clientId}&response_type=${responseType}&scope=${scope}&redirect_uri=${encodeURIComponent(window.location.href)}`;
  },

  awsCognitoURL: function () {
    return `${awsCognitoURL}${loginURL}`;
  },

  cognitoLogoutURL: function (clientId, redirectUri) {
    return `${awsCognitoURL}${logoutURL}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&state=STATE&scope=email+openid+phone`;
  },

  messageAPI: function () {
    return `${messagePath}/message`;
  },

  getMessagesAPI: function (email) {
    return `${messagePath}/message?email=${email}`;
  }
}

export default AwsAPIs;
