import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  SecondScreen: undefined;
};

export type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;
export type SecondScreenProps = StackScreenProps<RootStackParamList, 'SecondScreen'>;
