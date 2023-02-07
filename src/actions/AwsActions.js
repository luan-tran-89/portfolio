import awsServices from '../services/AwsServices';

export default class AwsActions {

  static async getData(tableName) {
    return awsServices.getData(tableName).then(res => {
      return res.data || {};
    }).catch(error => {
        return {};
    });
  }

  static async addData(data) {
    return awsServices.addData(data);
  }

  static async sendMessage(message) {
    return awsServices.sendMessage(message);
  }

  static async getMessagesByEmail(email, token) {
    return awsServices.getMessagesByEmail(email, token).then(res => {
      return res.data || [];
    });
  }

  static getAwsCognitoSignUpURL() {
    return awsServices.getAwsCognitoSignUpURL();
  }

  static getAwsCognitoURL() {
    return awsServices.getAwsCognitoURL();
  }

  static async logout(clientId, redirectUri) {
    return awsServices.logout(clientId, redirectUri);
  }

}
