import React from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, _View } from 'react-native';
import styles from '../../Styles.js'

export default function BorrowForm() {
    return(
        <View style={styles.borrowFormPageContainer}>
            <View style={styles.borrowFormHeader}>
                <View style={styles.arrowContainer}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/imgs/Arrow.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.smallLogoContainer}>
                    <Image style={styles.smallLogo} source={require('../../assets/imgs/SmallLogo.png')}></Image>
                </View>
            </View>

            {/* This is for the body*/}
            
            <View style={styles.body}>
                <View style={styles.first}>
                    <View style={styles.title}>
                        <Text style={styles.formTitle}>Fill-up Form</Text>
                    </View>
                </View>
                
            </View>
        </View>
    )
}