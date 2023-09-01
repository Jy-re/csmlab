import React, { useState } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, _View, ScrollView } from 'react-native';
import styles from '../../Styles.js'
import { Table, Row, Rows } from 'react-native-table-component';
import { Button } from 'react-native-web';

export default function BorrowForm() {

    const header = ['Item No.', 'Description', 'Qty.', 'Action']
    const data = [
        ['001', 'Coat', '10', 'Delete'],
        ['002', 'Scissors', '2', 'Delete'],
        ['003', 'Glass', '4', 'Delete'],
        ['004', 'Bowl', '2', 'Delete']
    ]

    const [borrowers, setBorrowers] = useState([{id: 1, studentID: ''}]);

    const addBorrower = () => {
        const newId = borrowers.length + 1;
        const newBorrower = { id : newId, studentId: '' };
        setBorrowers([...borrowers, newBorrower]);
    }

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
            <ScrollView>
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


                            {/* This is for the equipments, search and table*/}
                            <View>
                                <Text style={styles.formTitle}>Equipment Search</Text>
                            </View>
                            <View>
                                <TextInput style={styles.firstFormInput} placeholder='Search Equipment to Add'></TextInput>
                            </View>
                            <View style={styles.tableContainter} >
                                <Table style={styles.tableStyle}>
                                    <Row style={styles.tableRow} data={header} />
                                    {data.map((rowData, index) => (
                                        <Row key={index} data={rowData} />
                                    ))}
                                </Table>
                            </View>

                            {/* This is for the members*/}
                            <View>
                                <Text style={styles.formTitle}>Members</Text>
                            </View>
                            {borrowers.map((borrower) => (
                                <View key={borrower.id}>
                                    <Text style={styles.firstFormLabel}>Borrower {borrower.id}</Text>
                                    <TextInput
                                    style={styles.firstFormInput}
                                    placeholder='Student ID'
                                    value={borrower.studentId}
                                    onChangeText={(text) => {
                                        // Update the studentId for the corresponding borrower
                                        setBorrowers((prevBorrowers) =>
                                        prevBorrowers.map((prevBorrower) =>
                                            prevBorrower.id === borrower.id
                                            ? { ...prevBorrower, studentId: text }
                                            : prevBorrower
                                        )
                                        );
                                    }}
                                    />
                                </View>
                            ))}

                                <TouchableOpacity style={styles.addButton} onPress={addBorrower}>
                                <Text>Add</Text>
                                </TouchableOpacity>
                        </View>
                    </View>
                </View>

            
            </ScrollView>
            </View>

        </View>
    )
}