import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import { authenticatedScreens, unauthenticatedScreens } from './NavigationScreen';
import { RootStackParamList } from '../types/type';

const Stack = createNativeStackNavigator();
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
      initialRouteName={user?.uid ? 'MainTabs' : 'WelcomeScreen'}
    >
      {user?.uid
        ? authenticatedScreens.map(screen => (
            <Stack.Screen
              key={screen.name}
              name={screen.name as keyof RootStackParamList}
              component={screen.component}
            />
          ))
        : unauthenticatedScreens.map(screen => (
            <Stack.Screen
              key={screen.name}
              name={screen.name as keyof RootStackParamList}
              component={screen.component}
            />
          ))}
    </Stack.Navigator>
  ) : null;
};

export default Navigation;
