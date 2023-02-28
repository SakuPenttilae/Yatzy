import Header from "./Header";
import Footer from "./Footer";
import * as Constants from "./Constants"
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Button, TextInput } from "react-native-paper";
import styles from "../styles/style";
import React, { useState, useEffect } from "react";
import style from "../styles/style";

export default function Home({navigation}) {
  
  const [input,setInput] = useState(true)
  const [rules,setRules] = useState(false)
  const [name, setName] = useState("")
  
  function goToRules() {
    //if no name is input, then user will be told so
    if (name.length<=0) {
      alert("You must input your name")
    } else {
      // if name is input, then hide input and show rules 
      setInput(false)
      setRules(true)
    }
  }

  function goToGame() {
    //if rules are read and user wants to continue, hide rules 
    setRules(false)
    //make input visible on home screen if user decides he wants to change name
    setInput(true)
    //user moves to game, set name is passed as parameter
    navigation.navigate('Gameboard', {name})
    //name is emptied on home screen if user comes back to change name
    setName("")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      {input==true && 
        <SafeAreaView style={styles.container}>
          <Text style={styles.textAlign}>Input your name please</Text>
          <TextInput style={style.textInput} onChangeText={t => setName(t)}></TextInput>
          <Button style={styles.button} onPress={()=>goToRules()}>Done</Button>
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
          game you can not select same points from {Constants.MIN_SPOT} to {Constants.MAX_SPOT} again.
        </Text>
        <Text style={styles.pikkuCont}>
          GOAL: To get points as much as possible. {Constants.BONUS_POINTS_LIMIT} points is the limit of
          getting bonus which gives you {Constants.BONUS_POINTS} points more.
        </Text>
        <Text style={{fontSize:20, textAlign:"center"}}>
          Good luck, {name}!
        </Text>
        <Button style={styles.button} onPress={()=>goToGame()}>Play</Button>
      </View>
      }
      <Footer/>
    </SafeAreaView>
  );
}