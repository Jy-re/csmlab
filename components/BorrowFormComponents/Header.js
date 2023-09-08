import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import styles from '../../Styles.js'

export default function Header(){
    return(
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
    )
}