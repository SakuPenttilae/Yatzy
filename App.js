import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import styles from "./styles/style";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HOME = "Home";
const GAMEBOARD = "Gameboard";
const SCOREBOARD = "Scoreboard";

export default function App() {
  return (
    
    <NavigationContainer>
      
      <Tab.Navigator>
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='Gameboard' component={GameBoard}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const GameBoard = () => <View><Text>Game</Text></View>