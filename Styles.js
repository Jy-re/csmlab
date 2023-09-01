import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    pageBody: {
        backgroundColor: '#F2FAF4',
    },

    borrowFormPageContainer:{
        flexDirection: "column",
        alignItems: "flex-start",
        width: 360,
        paddingTop: 50,
    },

    borrowFormHeader: {
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 22,
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
    },

    arrowContainer: {
        marginRight: 'auto', // Pushes the arrow to the left
    },

    smallLogoContainer: {
        marginLeft: 'auto', // Pushes the small logo to the right
    },
    
    formFirstContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        paddingTop: 40,
        paddingHorizontal: 19,
        paddingBottom: 10,
    },

    formTitle: {
        marginTop: 10,
        color: '#1E1A4D',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 20 * 1.5, // Adjust as needed based on your design
    },

    firstFormContainer: {
        marginTop: 5,
        backgroundColor: '#CEE7C5',
        borderRadius: 8,
        alignSelf: 'stretch',
        width: 330,
        height: 171,
    },

    formContainernc: {
        marginHorizontal: 10,
        marginVertical: 8,
    },

    firstFormLabel: {
        color: '#000',
        fontSize: 13,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 25, // React Native uses the actual pixel value for lineHeight, so you can directly specify it.
    },

    firstFormInput: {
        width: 310,
        height: 44,
        borderRadius: 8,
        backgroundColor: 'white',
        padding: 10,
        alignSelf: 'stretch',
    },

    additionalContainer: {
        marginHorizontal: 10,
        marginVertical: 8,
        paddingBottom: 300,
    },

    tableContainter: {
        backgroundColor: 'white',
        marginTop: 20,
        padding: 10,
        borderRadius: 8,
    },


    tableRow: {
        borderBottomWidth: 1,
        borderColor: '#000',
    },

    addButton: {
        backgroundColor: '#5CBD10'
    },

    removeButton: {
        backgroundColor: 'red',
    },



})

export default styles;