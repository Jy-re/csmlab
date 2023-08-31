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
            <View style={styles.formFirstContainer}>
                <View>
                    <Text style={styles.formTitle}>Fill-Up Form</Text>
                </View>
                <View>
                    <View style={styles.firstFormContainer}>
                        <View style={styles.formContainernc}>
                        <View>
                            <Text style={styles.firstFormLabel}>Student ID (Leader)</Text>
                        </View>
                        <View>
                            <TextInput style={styles.firstFormInput} placeholder='Student ID'></TextInput>
                        </View>
                        <View>
                            <Text style={styles.firstFormLabel}>Course</Text>
                        </View>
                        <View>
                            <TextInput style={styles.firstFormInput} placeholder='Course'></TextInput>
                        </View>
                        </View>
                    </View>
                </View>
            </View>

        </View>
    )
}