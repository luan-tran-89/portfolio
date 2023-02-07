import defaultRestApi from '../common/RestApiInstance';
import AwsAPIs from '../common/AwsAPIs';
import AwsKeys from '../common/AwsKeys';

const { apiKey } = AwsKeys;

export default class FirebaseServices {

  static getData = (tableName) => {
    return defaultRestApi.get(AwsAPIs.awsURL(tableName),
      {
        headers: {
          "x-api-key": apiKey
        }
      }
    );
  }

  static sendMessage = (message) => {
    return defaultRestApi.post(AwsAPIs.messageAPI(),
     message,
      {
        headers: {
          "x-api-key": apiKey
        }
      }
    );
  }

  static getMessagesByEmail = (email, token) => {
    return defaultRestApi.get(AwsAPIs.getMessagesAPI(email),
      {
        headers: {
          "Authorization": token,
          "x-api-key": apiKey
        }
      }
    );
  }

  static getAwsCognitoSignUpURL = () => {
    return AwsAPIs.awsCognitoSignUpURL();
  }

  static getAwsCognitoURL = () => {
    return AwsAPIs.awsCognitoURL();
  }

  static logout = (clientId, redirectUri) => {
    return defaultRestApi.get(AwsAPIs.cognitoLogoutURL(clientId, redirectUri));
  }

}
