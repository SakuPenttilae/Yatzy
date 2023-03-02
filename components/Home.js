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
          THE GAME: Due to limited time, I have made a game where you have {Constants.NBR_OF_DICES} dices and for the every dice you have {Constants.NBR_OF_THROWS} throws. 
        </Text>
        <Text style={styles.pikkuCont}>
          POINTS: You can get {Constants.MAX_SPOT} to 30 points.
        </Text>
        <Text style={styles.pikkuCont}>
          GOAL: To get points as much as possible. 30 points is the maximum.
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