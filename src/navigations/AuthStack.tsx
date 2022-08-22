import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from '@rneui/themed';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CostumTheme from '../themes';
import {LoginScreen} from '../screens';

export type RootStackParamList = {
  Profile: {name: string; title: string};
  Home: {name: string; title: string};
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => {
  return (
    <ThemeProvider theme={CostumTheme}>
      <StatusBar backgroundColor={'transparent'} translucent />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </ThemeProvider>
  );
};

export default AuthStack;
