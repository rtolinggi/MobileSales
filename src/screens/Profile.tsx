import {Text} from '@rneui/base';
import React from 'react';
import type {RootStackParamList} from '../navigations/AppStack';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function ProfileScreen({route}: Props) {
  return <Text>This is {route.params.name}'s profile</Text>;
}
