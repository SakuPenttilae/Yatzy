import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./components/Home";
import Gameboard from "./components/Gameboard";
import styles from "./styles/style";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HOME = "Home";
const GAMEBOARD = "Gameboard";
const SCOREBOARD = "Scoreboard";

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='Gameboard' component={Gameboard}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}


