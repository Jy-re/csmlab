// DashboardScreen.js
import React, { useState } from 'react';
import { View, Text, Button, Image, Pressable, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



import styles from '../dbstyle';


const DashboardScreen = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const handlePress = (item) => {
    setSelectedItem(item);
  };

  const [studentStatus] = useState('Cleared');

  const navigation = useNavigation();

  const handleButtonPress = () => {
      navigation.navigate('FillUp');
 
  };


  
  const onBorrowItems = [
    {
      id: 11,
      num: 123,
      date: 'August 19, 2023',
      time: '9:00am',
      status: 'Borrowing'
    }
   
   
  ]
  const ReturnItems = [
    {
      id: 1332,
      num: 123,
      date: 'August 19, 2023',
      time: '9:00am',
      status: 'Checking'
    }
    
  ]
  
  const BreakageItems = [
    {
      id: 1234,
      num: 123,
      date: 'August 19, 2023',
      time: '9:00am',
      status: 'Checking'
    }
    
  ]
  const approvalItems = [
    {
      id: 3234,
      num: 123,
      date: 'August 19, 2023',
      time: '9:00am',
      status: 'Checking'
    }
    
   
  ]


  const handleButtonCancelPress = () => {
      
   
    alert('ayaw!')
   
  };

  const handleButtonReturnPress = () => {
      
   
    
 
};
   
  

  return (


   <View style={styles.container}>
        <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.headerimage} 
       />

        </View>
        
        <View style={styles.containerlabel}>
            <View style={styles.leftlabel}>
                <Image
                    source={require('../assets/icons/person-circle.svg')} // Adjust the path based on your file structure
                    style={styles.iconcircle} />
                <View style={styles.containerIdStatus}>
                    <Text style={styles.textIdNumber}> 20203020658 </Text>
                    <View style={styles.statusContainer}>
                      <Text style={styles.textStatus}>Status: </Text>
                      <Text style={studentStatus === 'Cleared' ? styles.clearedStatus : styles.pendingStatus}>
                        {studentStatus}
                      </Text>
                    </View>
                </View>       
            </View>
            <View style={styles.rightlabel}> 
               <Image
                    source={require('../assets/icons/log-out-outline.svg')} // Adjust the path based on your file structure
                    style={styles.icon2} />
                <Text style={styles.textLogout}> Logout </Text>
            </View>
        </View>

        <View style={styles.containerDashboard}>
          <Text style={styles.textDashboard}>Dashboard</Text>
          <View style={styles.line}></View>
        </View>

        <View style={styles.buttonBorrow}>
          <Pressable 
            onPress={handleButtonPress}>
              <Text style={styles.buttonText}>Click to Request Borrow Items</Text>
          </Pressable>
        </View>
     
         {/* <View style={styles.horizontalScroll}>
          <ScrollView horizontal
            showsHorizontalScrollIndicator={false} 
             style={styles.containerScrollView}>


             <Pressable
              style={[
                styles.item, styles.txtItem,
                selectedItem === 'approvalItems' && styles.selectedItem,
              ]}
              onPress={() => handlePress('approvalItems')}>
                <View style={styles.iconsvContainer}>
                    <Image source={require('../assets/icons/on-borrow.svg')} style={styles.iconsv1} />
                </View>
              <Text style={[styles.txtItem, selectedItem === 'approvalItems' && styles.txtScroll]}> Pending </Text>
            
            </Pressable>
            <Pressable
              style={[
                styles.item, styles.txtItem,
                selectedItem === 'OnBorrowItems' && styles.selectedItem,
              ]}
              onPress={() => handlePress('OnBorrowItems')}>
                <View style={styles.iconsvContainer}>
                    <Image source={require('../assets/icons/on-borrow.svg')} style={styles.iconsv2} />
                </View>
              <Text style={[styles.txtItem, selectedItem === 'OnBorrowItems' && styles.txtScroll]}> On-Borrow </Text>
            
            </Pressable>

           


            <Pressable
              style={[
                styles.item, styles.txtItem,
                selectedItem === 'ReturnItems' && styles.selectedItem,
              ]}
              onPress={() => handlePress('ReturnItems')}>
               <View style={styles.iconsvContainer}>
                  <Image source={require('../assets/icons/complete.svg')} style={styles.iconsv3} />
                </View>
              <Text style={[styles.txtItem, selectedItem === 'ReturnItems' && styles.txtScroll]}> Complete </Text>
            </Pressable>


            <Pressable
              style={[
                styles.item, styles.txtItem,
                selectedItem === 'BreakageItems' && styles.selectedItem,
              ]}
              onPress={() => handlePress('BreakageItems')}>
               <View style={styles.iconsvContainer}>
                  <Image source={require('../assets/icons/breakage.svg')} style={styles.iconsv4} />
                </View>
              <Text style={[styles.txtItem, selectedItem === 'BreakageItems' && styles.txtScroll]}> Breakage </Text>
            </Pressable> 

          
            </ScrollView>

         </View> */}


          <View style={styles.horizontalScroll}>
              <ScrollView horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.containerScrollView}
              >
                <View style={styles.itemContainer}>
                  <Pressable style={[
                      styles.txtItem,
                      selectedItem === 'approvalItems' && styles.selectedItem,
                      
                      
                      
                    ]}
                    onPress={() => handlePress('approvalItems')}
                  
                  >
                    <View style={styles.iconsvContainer}>
                      <Image source={require('../assets/icons/on-borrow.svg')} style={styles.iconsv1}/>
                    </View>
                    <Text style={[ styles.txtItem, selectedItem === 'approvalItems' && styles.txtScroll]}>
                      Pending
                    </Text>
                  </Pressable>
                </View>

                <View style={styles.itemContainer}>
                  <Pressable style={[
                      styles.txtItem,
                      selectedItem === 'onBorrowItems' && styles.selectedItem,
                    ]}
                    onPress={() => handlePress('onBorrowItems')}
                    
                  >
                    <View style={styles.iconsvContainer}>
                      <Image source={require('../assets/icons/on-borrow.svg')} style={styles.iconsv1}/>
                    </View>
                    <Text style={[ styles.txtItem, selectedItem === 'onBorrowItems' && styles.txtScroll]}>
                      On Borrow
                    </Text>
                  </Pressable>
                </View>

                <View style={styles.itemContainer}>
                  <Pressable style={[
                      styles.txtItem,
                      selectedItem === 'ReturnItems' && styles.selectedItem,
                    ]}
                    onPress={() => handlePress('ReturnItems')}
                   
                  >
                    <View style={styles.iconsvContainer}>
                      <Image source={require('../assets/icons/on-borrow.svg')} style={styles.iconsv1}/>
                    </View>
                    <Text style={[ styles.txtItem, selectedItem === 'ReturnItems' && styles.txtScroll]}>
                      Return
                    </Text>
                  </Pressable>
                </View>

                <View style={styles.itemContainer}>
                  <Pressable style={[
                      styles.txtItem,
                      selectedItem === 'BreakageItems' && styles.selectedItem,
                    ]}
                    onPress={() => handlePress('BreakageItems')}
                   >
                    <View style={styles.iconsvContainer}>
                      <Image source={require('../assets/icons/on-borrow.svg')} style={styles.iconsv1}/>
                    </View>
                    <Text style={[ styles.txtItem, selectedItem === 'BreakageItems' && styles.txtScroll]}>
                      Breakage
                    </Text>
                  </Pressable>
                </View>


                



              
                

                {/* Repeat the above structure for other items */}
              </ScrollView>
            </View>


         {selectedItem === 'approvalItems' && (
              <View>
                {approvalItems.map((item) => (
                  <View key={item.id} style={styles.containerTransaction}>
                    <View style={styles.containerTransactionTexts}>
                      <View style={styles.containerFirstRow}>
                        <View style={styles.containerFirstText}>
                          <Text style={styles.txtID}> Transaction ID # {item.id} </Text>
                        </View>
                        <View style={styles.containerTransactionStatus}>
                          <View style={styles.statusIconContainer}>
                            <Image source={require('../assets/icons/status.svg')} style={styles.iconstatus}></Image>
                          </View>
                          <Text style={styles.txtBorrowReturnStatus}> {item.status} </Text>
                        </View>
                      </View>

                      <View style={styles.containerSecondRow}>
                        <View>
                          <Text style={styles.txtDate}>{item.date}</Text>
                          <Text style={styles.txtTime}>{item.time}</Text>
                        </View>
                        <Pressable style={styles.buttonReturn}> 
                          <Text style={styles.txtReturn} onPress={handleButtonCancelPress}> Return </Text>
                        </Pressable>
                      </View>
                    </View>
                    
                    <View style={styles.buttonViewContainer}>
                      <Pressable style={styles.buttonView}>
                        <Text style={styles.txtView}>Tap to view</Text> 
                      </Pressable>
                    </View>
                  </View>
                ))}
              </View>
            )}
            
         {selectedItem === 'onBorrowItems' && (
              <View>
                {onBorrowItems.map((item) => (
                  <View key={item.id} style={styles.containerTransaction}>
                    <View style={styles.containerTransactionTexts}>
                      <View style={styles.containerFirstRow}>
                        <View style={styles.containerFirstText}>
                          <Text style={styles.txtID}> Transaction ID # {item.id} </Text>
                        </View>
                        <View style={styles.containerTransactionStatus}>
                          <View style={styles.statusIconContainer}>
                            <Image source={require('../assets/icons/status.svg')} style={styles.iconstatus}></Image>
                          </View>
                          <Text style={styles.txtBorrowReturnStatus}> {item.status} </Text>
                        </View>
                      </View>

                      <View style={styles.containerSecondRow}>
                        <View>
                          <Text style={styles.txtDate}>{item.date}</Text>
                          <Text style={styles.txtTime}>{item.time}</Text>
                        </View>
                        <Pressable style={styles.buttonReturn}> 
                          <Text style={styles.txtReturn} onPress={handleButtonCancelPress}> Return </Text>
                        </Pressable>
                      </View>
                    </View>
                    
                    <View style={styles.buttonViewContainer}>
                      <Pressable style={styles.buttonView}>
                        <Text style={styles.txtView}>Tap to view</Text> 
                      </Pressable>
                    </View>
                  </View>
                ))}
              </View>
            )}

          {selectedItem === 'ReturnItems' && (
              <View>
                {ReturnItems.map((item) => (
                  <View key={item.id} style={styles.containerTransaction}>
                    <View style={styles.containerTransactionTexts}>
                      <View style={styles.containerFirstRow}>
                        <View style={styles.containerFirstText}>
                          <Text style={styles.txtID}> Transaction ID # {item.id} </Text>
                        </View>
                        <View style={styles.containerTransactionStatus}>
                          <View style={styles.statusIconContainer}>
                            <Image source={require('../assets/icons/status.svg')} style={styles.iconstatus}></Image>
                          </View>
                          <Text style={styles.txtBorrowReturnStatus}> {item.status} </Text>
                        </View>
                      </View>

                      <View style={styles.containerSecondRow}>
                        <View>
                          <Text style={styles.txtDate}>{item.date}</Text>
                          <Text style={styles.txtTime}>{item.time}</Text>
                        </View>
                      </View>
                    </View>
                    
                    <View style={styles.buttonViewContainer}>
                      <Pressable style={styles.buttonView}>
                        <Text style={styles.txtView}>Tap to view</Text> 
                      </Pressable>
                    </View>
                  </View>
                ))}
              </View>
            )}

          {selectedItem === 'BreakageItems' && (
              <View>
                {BreakageItems.map((item) => (
                  <View key={item.id} style={styles.containerTransaction}>
                    <View style={styles.containerTransactionTexts}>
                      <View style={styles.containerFirstRow}>
                        <View style={styles.containerFirstText}>
                          <Text style={styles.txtID}> Transaction ID # {item.id} </Text>
                        </View>
                        <View style={styles.containerTransactionStatus}>
                          <View style={styles.statusIconContainer}>
                            <Image source={require('../assets/icons/status.svg')} style={styles.iconstatus}></Image>
                          </View>
                          <Text style={styles.txtBorrowReturnStatus}> {item.status} </Text>
                        </View>
                      </View>

                      <View style={styles.containerSecondRow}>
                        <View>
                          <Text style={styles.txtDate}>{item.date}</Text>
                          <Text style={styles.txtTime}>{item.time}</Text>
                        </View>
                      </View>
                    </View>
                    
                    <View style={styles.buttonViewContainer}>
                      <Pressable style={styles.buttonView}>
                        <Text style={styles.txtView}>Tap to view</Text> 
                      </Pressable>
                    </View>
                  </View>
                ))}
              </View>
            )}
     
     
   </View>
  );
};


export default DashboardScreen;
