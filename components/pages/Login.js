import React from 'react';
import { Image, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../../Styles.js'
import Logo from '../../assets/imgs/LogoBig.png';

export default function Login() {
  return (

    //Note note: Sa android rani mudagan nga images. Dili siya basahon sa web kay native siya
    <View style={styles.screenContainer}>
      <Image style={styles.bigLogo} source={require('../../assets/imgs/LogoBig.png')} />
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputField} placeholder='ID Number'/>
        <Image style={styles.inputIcon} source={require('../../assets/imgs/UserLogo.png')}/>
      </View>

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