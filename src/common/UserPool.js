import { CognitoUserPool } from 'amazon-cognito-identity-js';
import AwsKeys from '../common/AwsKeys';


const poolData = {
  UserPoolId: AwsKeys.userPoolId,
  ClientId: AwsKeys.clientId
};

export default new CognitoUserPool(poolData);