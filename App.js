// import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { LogBox } from 'react-native';
import { UIStack } from './src/navigation/ui-stack';
import SplashScreen from './src/screens/Splash';
// import { removeAccessToken } from './src/services/helpers/token-helpers';

function App(props) {
  /* -------------------------------------------------------------------------- */
  /*                               UseState Section                             */
  /* -------------------------------------------------------------------------- */

  const [isVisible, setIsVisible] = React.useState(true);

  /* -------------------------------------------------------------------------- */
  /*                               UseEffect Section                            */
  /* -------------------------------------------------------------------------- */

  React.useEffect(() => {
    // AsyncStorage.setItem("access_token", 'authenticated-token');
    // removeAccessToken('access_token')
    setTimeout(function () {
      Hide_Splash_Screen();
    }, 2000);
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                               On change Section                            */
  /* -------------------------------------------------------------------------- */

  const Hide_Splash_Screen = () => {
    setIsVisible(!isVisible);
  };
  LogBox.ignoreAllLogs(true)
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ]);
  return (
    <NativeBaseProvider>
    <NavigationContainer>
      {isVisible ? <SplashScreen /> :
       <UIStack />
        } 
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
