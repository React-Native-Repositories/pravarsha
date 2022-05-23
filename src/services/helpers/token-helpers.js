import AsyncStorage from '@react-native-community/async-storage';

export async function getAccessToken() {
  let token;
  try {
    await AsyncStorage.getItem('access_token').then(value => {
      token = value;
    });
    return token;
  } catch (error) {}
}

export const removeAccessToken = async key => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (exception) {
    return false;
  }
};
