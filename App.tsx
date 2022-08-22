import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from '@rneui/themed';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CostumTheme from './src/themes';
import {HomeScreen, LoginScreen, ProfileScreen} from './src/screens';

export type RootStackParamList = {
  Profile: {name: string; title: string};
  Home: {name: string; title: string};
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'transparent'} translucent />
      <ThemeProvider theme={CostumTheme}>
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
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}
