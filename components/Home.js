import Header from "./Header";
import Footer from "./Footer";
import * as Constants from "./Constants"
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Button, TextInput } from "react-native-paper";
import styles from "../styles/style";
import React, { useState, useEffect } from "react";

export default function Home({navigation}) {
  
  const [loaded,setLoaded] = useState(true)
  const [rules,setRules] = useState(false)
  const [name, setName] = useState("")
  
  function goToRules() {
    setLoaded(false)
    setRules(true)
  }

  function goToGame() {
    setRules(false)
    setLoaded(true)
    navigation.navigate('Gameboard', {name})
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      {loaded==true && 
        <SafeAreaView style={styles.container}>
          <Text>Input your name please</Text>
          <TextInput onChangeText={t => setName(t)}></TextInput>
          <Button onPress={()=>goToRules()}>Done</Button>
        </SafeAreaView>
      }
      {rules==true &&
      <View style={styles.container}>
        <Text style={styles.title}>Rules of the game</Text>
        <Text style={styles.pikkuCont}>
          THE GAME: Upper section of the classic Yahtzee dice game. You have {Constants.NBR_OF_DICES} dices and for the every dice you have {Constants.NBR_OF_THROWS} throws. After each throw you can keep dices in order to get same dice spot counts as many as possible. In the end of the turn you must select your points from {Constants.MIN_SPOT} to {Constants.MAX_SPOT}. Game ends when all points have been selected. The order for selecting those is free.
        </Text>
        <Text style={styles.pikkuCont}>
          POINTS: After each turn game calculates the sum
          for the dices you selected. Only the dices having
          the same spot count are calculated. Inside the
          game you can not select same points from
          {Constants.MIN_SPOT} to {Constants.MAX_SPOT} again.
        </Text>
        <Text style={styles.pikkuCont}>
          GOAL: To get points as much as possible.
          {Constants.BONUS_POINTS_LIMIT} points is the limit of
          getting bonus which gives you {Constants.BONUS_POINTS} 
          points more.
        </Text>
        <Text style={{fontSize:20, textAlign:"center"}}>
          Good luck, {name}!
        </Text>
        <Button onPress={ goToGame() }>Play</Button>
      </View>
      }
      <Footer/>
    </SafeAreaView>
  );
}