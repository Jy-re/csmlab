import React from 'react';
import { Image, View, Text, TextInput, Button } from 'react-native';
import Logo from '../../assets/imgs/LogoBig.png';

export default function Login() {
  return (
    <View>
      <Image source={require('../../assets/imgs/LogoBig.png')} />
      <Text>Login</Text>
      <TextInput />
      <TextInput />
      <Button title="Login" />
    </View>
  );
}