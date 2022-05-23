import {getAccessToken} from './token-helpers';

export const authHeader = async () => {
  // return authorization header with jwt token
  if (await getAccessToken()) {
    return {
      Authorization: 'Bearer ' +await getAccessToken(),
      'Content-Type': 'application/json',
    };
  } else {
    return {'Content-Type': 'application/json'};
  }
};
