import React from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, _View } from 'react-native';
import styles from '../../Styles.js'

export default function BorrowForm() {
    return(
        <View style={styles.borrowFormPageContainer}>
            <View style={styles.borrowFormHeader}>
                <TouchableOpacity>
                    <Image source={require('../../assets/imgs/Arrow.png')}></Image>
                </TouchableOpacity>
                <Image source={require('../../assets/imgs/SmallLogo.png')}></Image>
            </View>
            <Text>Whatevre</Text>
        </View>
    )
}