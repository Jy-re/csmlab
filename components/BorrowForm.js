import React, { useState } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../Styles.js'
import { Table, Row, Rows } from 'react-native-table-component';
import { Button } from 'react-native-web';
import Header from './BorrowFormComponents/Header.js';
import FirstForm from './BorrowFormComponents/FirstForm.js';
import LabInstructor from './BorrowFormComponents/LabInstructor.js';
import Course from './BorrowFormComponents/Course.js';

export default function BorrowForm(){
    return(
        <View style={styles.borrowFormPageContainer}>
            <Header />
            <ScrollView>
                <View style={styles.formFirstContainer}>
                    <FirstForm />
                    <View style={styles.additionalContainer}>
                        <LabInstructor />
                        <Course />
                    </View>
                </View>
                
            </ScrollView>
        </View>
    )
}