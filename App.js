//import libraries
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import files
import Login from './components/pages/Login';

//const sa stack. test.
const Stack = createNativeStackNavigator(); 

export default function App() {
  
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
