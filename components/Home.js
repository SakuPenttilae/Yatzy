import Header from "./Header";
import Footer from "./Footer";
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Button, TextInput } from "react-native-paper";
import styles from "../styles/style";
import React, { useState, useEffect } from "react";

function nameInput() {
  const [name, setName] = useState("")
    return(
    <SafeAreaView style={styles.container}>
        <Text>Input your name please</Text>
        <TextInput onChangeText={t => setName(t)}></TextInput>
        <Button onPress={()=>console.log(name)}>Done</Button>
    </SafeAreaView>
    )
}

export default function App() {
  const [loaded,setLoaded] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      {true==true && nameInput()}
      <Footer/>
    </SafeAreaView>
  );
}