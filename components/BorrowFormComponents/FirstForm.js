import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../../Styles.js'

export default function FirstForm(){
    return(
        <View>
            <View>
                <Text style={styles.formTitle}>Fill-up Form</Text>
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
        
    )
}