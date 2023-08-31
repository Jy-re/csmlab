import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    borrowFormPageContainer:{
        flexDirection: "column",
        alignItems: "flex-start",
        width: 360,
        paddingTop: 40,
    },

    borrowFormHeader: {
        flex: 1,
        paddingVertical: 0,
        paddingHorizontal: 22,
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
        backgroundColor: 'yellow',
    },

    arrowContainer: {
        marginRight: 'auto', // Pushes the arrow to the left
    },

    smallLogoContainer: {
        marginLeft: 'auto', // Pushes the small logo to the right
    },

    body: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
    },
    
    first: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        marginVertical: 10, // For gap-like spacing, you can use marginVertical
    },

    title: {
        flex: 1,
        paddingVertical: 0,
        paddingHorizontal: 7,
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
    },

    formTitle: {
        color: '#1E1A4D',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 20 * 1.5, // Adjust as needed based on your design
    },

    sampleText:{
        fontSize: 20,
    }
})

export default styles;