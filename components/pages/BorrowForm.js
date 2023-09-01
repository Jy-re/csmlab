import React, { useState } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, _View } from 'react-native';
import styles from '../../Styles.js'
import { Table, Row, Rows } from 'react-native-table-component';

export default function BorrowForm() {

    const header = ['Item No.', 'Description', 'Qty.', 'Action']
    const data = [
        ['001', 'Coat', '10', 'Delete']
        ['002', 'Scissors', '2', 'Delete']
        ['003', 'Glass', '4', 'Delete']
        ['004', 'Bowl', '2', 'Delete']
    ]

    return(
        <View style={styles.pageBody}>
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
                    <View style={styles.additionalContainer}>
                        <View>
                            <Text style={styles.firstFormLabel}>Lab Instructor</Text>
                        </View>
                        <View>
                            <TextInput style={styles.firstFormInput} placeholder='Lab Instructor'></TextInput>
                        </View>
                        <View>
                            <Text style={styles.firstFormLabel}>Subject</Text>
                        </View>
                        <View>
                            <TextInput style={styles.firstFormInput} placeholder='Subject'></TextInput>
                        </View>
                        <View>
                            <Text style={styles.formTitle}>Equipment Search</Text>
                        </View>
                        <View>
                            <TextInput style={styles.firstFormInput} placeholder='Search Equipment to Add'></TextInput>
                        </View>
                        <View>
                            <Table style={styles.tablestyle}>
                                <Row data={header} />
                                <Row data={data} />
                            </Table>
                        </View>
                    </View>
                    
                </View>
            </View>

        </View>

        </View>
    )
}