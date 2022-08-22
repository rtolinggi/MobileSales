import {Button, Input, Text, Image} from '@rneui/themed';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputChangeEventData,
  View,
} from 'react-native';
import React, {useState} from 'react';
// import type {RootStackParamList} from '../../App';
// import type {NativeStackScreenProps} from '@react-navigation/native-stack';

// type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

type FormData = {
  email: string;
  passwordHash: string;
};

export default function HomeScreen() {
  const [email, setEmail] = useState<string>('');
  const [passwordHash, setPasswordHash] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
  const handlePress = async () => {
    setIsLoading(true);
    const formData: FormData = {
      email,
      passwordHash,
    };
    const postData = await fetch('http://192.168.43.25:3000/api/login', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(formData),
    });
    const result = await postData.json();
    console.log(result);
    setIsLoading(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.content}>
        <Image
          source={require('../assets/images/logo-N.png')}
          style={styles.img}
        />
        <Text h2>Sign in</Text>
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
          secureTextEntry={true}
          leftIcon={{
            type: 'font-awesome',
            name: 'lock',
            color: 'grey',
          }}
          onChange={handleInputPasswordHash}
          value={passwordHash}
        />
        <Button
          title="SIGN IN"
          onPress={handlePress}
          loading={isLoading}
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
});
