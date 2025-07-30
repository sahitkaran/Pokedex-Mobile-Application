import { StyleSheet, Text, View, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './components/CustomDrawer';


import Home from './screens/Home';
import Details from './screens/Details';
import Favorites from './screens/Favorites';
import List from './screens/List';
import Settings from './screens/Settings';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



const RenderDrawer = () => {
  return ( <Drawer.Navigator drawerContent= {(props) => <CustomDrawerContent {...props} />}>
    <Drawer.Screen name="PokeDex" component={Home} />
    <Drawer.Screen name="Pokemon List" component={List} />
    <Drawer.Screen name="Favorites" component={Favorites} />
    <Drawer.Screen name="Settings" component={Settings} />
  </Drawer.Navigator>);
}




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AppHome">   
        <Stack.Screen name="AppHome" component={RenderDrawer} options={{headerShown: false}}/>
        <Stack.Screen name="List" component={List} options={{headerShown: false}}/>
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>  
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
  alignItems: 'center',
  },
   profileImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
