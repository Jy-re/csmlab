import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    //Login Page Styles

    bigLogo: {
        marginBottom: 50,
    },

    screenContainer: {
        flex: 1,
        alignItems: 'center', // Center horizontally
        justifyContent: 'center', // Center vertically
    },

    inputContainer: {
        position: 'relative',
        padding: 0,
        margin: 0,
        marginBottom: 10,
    },

    inputField: {
        height: 50,
        width: 300,
        margin: 0,
        paddingLeft: 30,
        borderBottomWidth: 1,
    },

    inputIcon: {
        position: 'absolute',
        bottom: 8,
        bottom: 15,
        right: 20,
        width: 16,
        height: 15
        
    },

    buttonContainer: {
        marginTop: 50,
        paddingHorizontal: 135,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: '#77C777',
    },

    buttonText: {
        color: '#0A4610',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    //End of Login Page Styles

})

export default styles;