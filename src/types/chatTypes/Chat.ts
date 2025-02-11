import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../type';
import {RouteProp} from '@react-navigation/native';
import {User} from '../type';

type ChatScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Chat'
>;

type ChatScreenRouteProp = RouteProp<RootStackParamList, 'Chat'>;

export type ChatProps = {
  navigation?: ChatScreenNavigationProp;
  route?: ChatScreenRouteProp;
};

export interface ChatItem {
  id: string;
  lastActive: string;
  lastMessage: string;
  notificationStatus: string;
  participants: string[];
  participantsDetails: User[];
  unreadMessages: number;
}
