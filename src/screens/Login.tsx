import {Button, Input, Text, Image} from '@rneui/themed';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputChangeEventData,
  View,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

export default function LoginScreen() {
  const {login} = useContext(AuthContext);
  const [email, setEmail] = useState<string>('');
  const [passwordHash, setPasswordHash] = useState<string>('');
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);

  const handleInputEmail = ({
    nativeEvent: {text},
  }: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setEmail(text);
  };

  const handleInputPasswordHash = ({
    nativeEvent: {text},
  }: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setPasswordHash(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.content}>
        <Image
          source={require('../assets/images/logo-N.png')}
          style={styles.img}
        />
        <Text style={styles.mb} h2>
          Sign In
        </Text>
        <Input
          label="Email"
          placeholder="Email"
          leftIcon={{
            type: 'font-awesome',
            name: 'envelope',
            color: 'grey',
            size: 18,
          }}
          onChange={handleInputEmail}
          defaultValue={email}
        />
        <Input
          label="Password"
          placeholder="Password"
          secureTextEntry={!visiblePassword}
          leftIcon={{
            type: 'font-awesome',
            name: 'lock',
            color: 'grey',
          }}
          rightIcon={{
            type: 'font-awesome',
            name: visiblePassword ? 'eye' : 'eye-slash',
            color: 'grey',
            onPress: () =>
              setVisiblePassword((e: boolean) => {
                return !e;
              }),
          }}
          onChange={handleInputPasswordHash}
          value={passwordHash}
        />
        <Button
          title="SIGN IN"
          onPress={() =>
            typeof login === 'function'
              ? login({email, passwordHash})
              : undefined
          }
          icon={{
            type: 'ionicon',
            name: 'log-in-outline',
            size: 20,
            color: 'white',
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  header: {
    height: 40,
    backgroundColor: '#E53935',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginTop: 50,
  },
  img: {
    width: 150,
    height: 120,
  },
  mb: {
    marginBottom: 20,
  },
});
