import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DashboardScreen from './screens/dashboard';


import FillUp from './screens/FillUpForm';


const Stack = createStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{headerShown: false}} />
        <Stack.Screen name="FillUp" component={FillUp} options={{headerShown: false}} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
