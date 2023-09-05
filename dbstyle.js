import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
    container: {
       flex: 1,
      
    },
    containerlabel: {
    
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 5,
      paddingLeft: 28,
      paddingRight: 28,
     
  
      
    },
    menuContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20,
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    headercontainer:{
      flex: 1,
    
      
    },
    leftlabel:{
      flexDirection: 'row',
      alignItems: 'center'
      
    },
    rightlabel:{
      alignItems: 'center'

     
      
    },
    containerIdStatus:{
     
     
      alignItems: 'flex-start',
      marginLeft: 1,
      
     
      
      
    },
    imageContainer:{
      marginTop: 30,
      height: 40,
      alignItems: 'center',
      
    },
    headerimage:{
      width: '60%',
      height: '60%', 
      resizeMode: 'contain' ,
     
      
    },
    iconcircle:{
      height: 30,
      width: 30,
     
      
    },
    icon2:{
      height: 17,
      width: 17,
      alignItems: 'center'
       
    },
  
    clearedStatus: { 
      fontSize: 11,
      fontWeight: 'bold',
      color: '#45A54E'
    },
    pendingStatus: {
      color: 'red',
      fontSize: 11,
      fontWeight: 'bold'
    },
    statusContainer: {
      flexDirection: 'row',
  

     
    },
    textIdNumber:{
      fontWeight: 'bold',
       fontSize: 13,
       
     
    },
    textStatus:{
      fontSize: 11,
      marginLeft: 4,
      

     
     
    },
    textLogout:{
      fontSize: 11,
      color: '#1B4D1A'
    },

    containerDashboard:{
      paddingLeft: 28,
      paddingRight: 28,
      paddingTop: 15,
      paddingBottom: 10,

    },
    textDashboard: {
      fontWeight: 'bold', 
      fontSize: 17, 
      color: '#1B4D1A',
      paddingBottom: 2
    },

    line: {
      paddingTop: 0,
      flex: 1,
      borderBottomWidth: 2,
      borderColor: 'gray',
      marginVertical: 10,
      borderColor: '#1B4D1A',
      marginVertical: 2

    },

    //BorrowButtton
    buttonBorrow: {
      backgroundColor: 'rgba(204, 221, 255, 1)',
      paddingVertical: 15,
      borderRadius: 15,
      marginTop: 10,
      marginHorizontal: 28,
      alignItems: 'center',
    
    },
    buttonText: {
      color: '#25639D',
      fontWeight: 'bold',
      fontSize: 11
    },

    
   //ScrollView
    
   horizontalScroll: {
     
  
    height: 100,
    marginTop: 10,

   
  
  },
    containerScrollView: {

      marginLeft: 20,
      marginRight: 25,
      height: 20,
    

     
    
    },
    itemContainer: {
      width: 70,
      height: 70,
      margin: 10,
      alignItems: 'center',
      backgroundColor: 'lightgray',
      borderRadius: 10,
      transition: 'background-color 0.3s ease',
   
    },
    txtItem:{
      color: '#1B4D1A',
      fontSize: 11,
       
    },
    iconsvContainer:{
       
        marginTop: 10,
        marginBottom: 10,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'contain'
    },
   
    iconsv1: {
      width: 33,
      height: 27,
      
    
      
    },
    iconsv2: {
      width: 33,
      height: 27,
     
     
     
    },
    iconsv3: {
      width: 24,
      height: 24,
   
   
    
    },
    iconsv4: {
      width: 26,
      height: 20,
     
     
    },
    
    selectedItem: {
      backgroundColor: '#B2DFAB',
      width: 70,
      height: 72,
      alignItems: 'center',
      borderRadius: 10,
   
    },
    txtScroll:{
     color: '#1B4D1A',
     fontSize: 11,
     fontWeight: 'bold',

     
    
    
    
    },
    txtcontainerScroll:{
      marginBottom: 0,
      justifyContent: 'flex-end', 
    },
   
    // Transaction view
    containerTransaction:{

      
      height: 85,
      marginTop: 14,
      marginHorizontal: 14,
      borderRadius: 10,
      backgroundColor: '#CEE6C5',
     
      paddingBottom: 2,
      
    },
    containerTransactionTexts:{
      flexDirection: 'column',
      
     
    },
    containerFirstRow:{
      
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent:'space-between',
      marginHorizontal: 8,
      marginBottom: 10,
      
      
      
    },
    containerFirstText:{
      marginTop: 7,
      paddingHorizontal: 0
      
     
      
     
    },
    txtID:{
      fontWeight: 'bold',
      fontSize: 15,
   
    
      
      
    },
   
    containerTransactionStatus:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 7,
      width: 70,
      height: 10,
     
      paddinLeft: 4,
      
      
    
      
    },
    txtPendingStatus:{
        fontSize: 10,
        color: '#E1A304',
        fontWeight:'bold',       
        
    },

    txtBorrowReturnStatus:{
      fontSize: 10,
      color: '#17561D',
      fontWeight:'bold',
    },
    txtCheckingStatus:{
      fontSize: 10,
      color: '#E1A304',
      fontWeight:'bold',
    
    },
    statusIconContainer:{
      marginRight: 10,
      marginLeft: 0, 
    
      
    },
    iconstatus:{
      
      height: 4,
      width: 4,
    },
   
    containerSecondRow:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 12,
      marginRight: 9
      
     
    },
    txtDate:{
      color: '#8F8F8F',
      fontStyle: 'italic',
      fontSize: 10
    },
    txtTime:{
      color: '#8F8F8F',
      fontStyle: 'italic',
      fontSize: 10
     
    },
     //PENDING CANCEL BUTTON
    txtCancel:{
      color: '#4D1A1A',
      fontWeight: 700,
      fontSize: 10,
      
    },
    buttonCancel:{
     
     backgroundColor: '#E6C5C5',
    
     justifyContent: 'center',
     paddingVertical: 5,
     paddingHorizontal: 15,
     height: 25,
     borderRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.1)', 
      shadowOffset: {
        width: 0,
        height: 2,
      }, 
      shadowOpacity: 1, 
      shadowRadius: 2, 
    },

    //BORROW RETURN BUTTON
    txtReturn:{
      color: '#857800',
      fontWeight: 700,
      fontSize: 10,
      
    },
    buttonReturn:{
     
     backgroundColor: '#FFECA7',
     justifyContent: 'center',
     paddingVertical: 5,
     paddingHorizontal: 15,
     height: 25,
     borderRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.1)', // Color in RGBA format
      shadowOffset: {
        width: 0,
        height: 2,
      }, 
      shadowOpacity: 1, 
      shadowRadius: 2, 
    },

    buttonViewContainer:{
      marginTop: 2,
      marginHorizontal: 12,
      backgroundColor: 'lightpink',
      marginBottom: 2,
      alignItems:'center',
      justifyContent: 'center',
      
      backgroundColor: 'none',
      borderTopWidth: 1,
      borderTopColor: 'rgba(143, 143, 143, 0.2)'
      
    },
    buttonView:{
      alignItems: 'center',
      marginTop: 2,
     
    },
    txtView:{
      fontSize: 9,
      color: '#8F8F8F'
    }
  


    
  
  });

  export default styles;