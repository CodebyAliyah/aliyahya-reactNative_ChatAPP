import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import splashScreen from'react-native-splash-screen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Navigation from './src/navigation/StackNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import Toast from 'react-native-toast-message';

const App = () => {
  splashScreen.hide()

  return (
    <>
      <GestureHandlerRootView style={{flex: 1, position: 'relative'}}>
        <Provider store={store}>
          <NavigationContainer>
            <Navigation />
            <Toast />
          </NavigationContainer>
        </Provider>
      </GestureHandlerRootView>
    </>
  );
};

export default App;
