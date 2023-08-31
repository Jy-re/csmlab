import React, { useState } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../Styles.js'


export default function Login() {

  //states
  const [idNumber, setIdNumber] = useState('');
  const [password, setPassword] = useState('');

  //loginhandler
  const handleLogin = () => {

  }

  //regex
  const isIdNumberValid = /^\d{10}$/.test(idNumber)

  return (

    //Note note: Sa android rani mudagan nga images. Dili siya basahon sa web kay native siya
    //Note #2: Dili sa nako butngan ug password validation kay gusto nako e try with data
    <View style={styles.screenContainer}>
      <Image style={styles.bigLogo} source={require('../../assets/imgs/LogoBig.png')} />
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputField} placeholder='ID Number' onChangeText={setIdNumber}/>
        <Image style={styles.inputIcon} source={require('../../assets/imgs/UserLogo.png')}/>
      </View>

      {isIdNumberValid ? null : (
        <Text style={styles.errorText}>ID Number must be a 6-digit number</Text>
      )}
      
      <View style={styles.inputContainer}> 
        <TextInput style={styles.inputField} secureTextEntry={true} placeholder='Password'/>
        <Image style={styles.inputIcon} source={require('../../assets/imgs/SeePass.png')}/>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}