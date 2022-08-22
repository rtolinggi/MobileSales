import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from '@rneui/themed';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CostumTheme from '../themes';
import {HomeScreen, LoginScreen, ProfileScreen} from '../screens';

export type RootStackParamList = {
  Profile: {name: string; title: string};
  Home: {name: string; title: string};
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack = () => {
  return (
    <ThemeProvider theme={CostumTheme}>
      <StatusBar backgroundColor={'transparent'} translucent />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Welcome',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#E53935'},
          }}
        />
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

export default AppStack;
