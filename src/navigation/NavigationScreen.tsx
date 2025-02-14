import { RootStackParamList } from '../types/type';
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


export const authenticatedScreens = [
    { name: 'MainTabs', component: BottomTabsNavigator },
    { name: 'Search', component: Search },
    { name: 'Chat', component: ChatScreen },
    { name: 'Profile', component: Profile },
    { name: 'ChangePassword', component: ChangePassword },
  ];

  export const unauthenticatedScreens = [
    { name: 'WelcomeScreen', component: WelcomeScreen },
    { name: 'SignUp', component: Signup },
    { name: 'SignIn', component: SignIn },
    { name: 'ForgetPassword', component: ForgetPassword },
  ];