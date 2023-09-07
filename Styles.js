import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    pageBody: {
        backgroundColor: '#F2FAF4',
    },

    borrowFormPageContainer:{
        flexDirection: "column",
        alignItems: "flex-start",
        width: 360,
        marginTop: 30,
    },

    borrowFormHeader: {
        backgroundColor: '#F2FAF4',
        flex: 1,
        paddingTop: 20,
        paddingBottom: 40,
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
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
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
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#000',
    },

    addButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    removeButton: {
        backgroundColor: 'red',
    },

    borrowerLabelButton: {
        display: 'flex',
        flexDirection: 'row',
    },
    borrowerLabelContainer: {
        marginRight: 'auto',
    },

    sendRequestContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },

    requestButton: {
        backgroundColor: '#C8ECB8',
        width: 310,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 20,

    },

    cancelButton: {
        backgroundColor: '#ECC4B8',
        width: 310,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,

    },

    fontSize: {
        color: '#',
        fontSize: 13,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 13,
    },

    newGenes: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },


})

export default styles;