import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { KeyboardType } from "react-native";
import {RouteProp} from '@react-navigation/native';
import { TextStyle } from "react-native";

export interface User {
  uid: string | null;
  displayName: string | null;
  email: string | null;
  photoURL?: string | null;
  status: string | null;
  chats?: string[];
  contacts?: string[];
}

export interface FirestoreMessage {
  id?: string;
  senderId: string;
  text: string;
  timestamp: FirebaseFirestoreTypes.Timestamp | null;
}

export interface FirestoreChat {
  id?: string;
  members: string[];
  messages?: FirestoreMessage[];
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  contentType: 'text' | 'image';
  timestamp: FirebaseFirestoreTypes.Timestamp | FirebaseFirestoreTypes.FieldValue | null;
  status: {
    sender: string;
    receiver: string;
  };
}

export interface Chat {
  id: string;
  participants: string[];
  lastMessage: string;
  unreadMessages: number;
  notificationStatus: boolean;
  lastActive: string | null;
  participantsDetails: {uid: string; name: string; createdAt: string}[];
}


interface ContentViewerProps {
    title: string;
    children: React.ReactNode;
  }

  
  
  type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

  export type HomeScreenProps = {
    navigation: HomeScreenNavigationProp;
  };
  
  
  export interface InputFieldProps {
    type?: KeyboardType;
    title: string;
    placeholder?: string;
    secureTextEntry?: boolean;
    setVal: (val: string) => void;
    setError?: (val: string) => void;
    val: string;
  }
  
  
  export type RootStackParamList = {
    WelcomeScreen: undefined;
    SignIn: undefined;
    Home: undefined;
    SignUp: undefined;
    Contacts: undefined;
    Profile: undefined;
    Search: undefined;
    MainTabs: undefined;
    Settings: undefined;
    ForgetPassword: undefined;
    ChangePassword: undefined;
    Chat: {
      chatId: string;
      participant: userProfile;
    };
  };
  

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Profile'
>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

export type ProfileProps = {
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp;
};

export type userProfile = {
  uid: string;
  displayName: string;
  photoURL: string | null;
  status?: string;
};

export interface SearchBarProps {
    searchText: string;
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
  }
  


export type AuthHeaderSectionProps = {
  title: string;
  subText: string;
  styleTitle?: TextStyle;
  styleSubTitle?: TextStyle;
};


export interface SettingsItemProps {
  title: string;
  icon?: any; 
  subtext?: string;
  link: keyof RootStackParamList | null;
}


