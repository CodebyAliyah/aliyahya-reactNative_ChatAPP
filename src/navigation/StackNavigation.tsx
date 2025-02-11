import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

import {RootStackParamList} from '../types/type';
import BottomTabsNavigator from './BottomTabsNavigator';
import {
  ChangePassword,
  ChatScreen,
  ForgetPassword,
  Profile,
  Search,
  SignIn,
  Signup,
  WelcomeScreen,
} from '../constants/navigationScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  const [user, setUser] = useState<any>(null);
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(firebaseUser => {
      setUser(firebaseUser);
      setIsAuthChecked(true);
    });

    return () => unsubscribe();
  }, []);

  return isAuthChecked ? (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={user?.uid ? 'MainTabs' : 'WelcomeScreen'}>
      {user?.uid ? (
        <>
          <Stack.Screen name="MainTabs" component={BottomTabsNavigator} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
        </>
      ) : (
        <>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="SignUp" component={Signup} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        </>
      )}
    </Stack.Navigator>
  ) : null;
};

export default Navigation;
