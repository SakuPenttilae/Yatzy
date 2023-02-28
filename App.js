import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./components/Home";
import Gameboard from "./components/Gameboard";
import styles from "./styles/style";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator 
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
        let iconName
        if (route.name == "Home") {
          iconName = "home"
        } else if (route.name == "Gameboard") {
          iconName = "gamepad"
        }
        return <FontAwesome name={iconName} size={24} color={focused ? "#ccb3ff":"gray"} />
      },
      tabBarActiveTintColor: '#ccb3ff',
      tabBarInactiveTintColor: 'gray',
    })}
      >
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='Gameboard' component={Gameboard}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}


