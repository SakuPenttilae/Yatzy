import { Button } from "react-native-paper"
import { Text, View, SafeAreaView, ScrollView } from "react-native"
import React, { useState, useEffect } from "react";
import Header from "./Header"
import Footer from "./Footer"
import styles from "../styles/style";
import * as Constants from "./Constants"
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Gameboard({navigation, route}) {

    const [throwsLeft, setThrowsLeft] = useState(Constants.NBR_OF_THROWS)
    const [nbrOfWins, setNbrOfWins] = useState(0)
    const [sum,setSum] = useState(0)
    const [status, setStatus] = useState("")
    const [board, setBoard] = useState([])

    const throwDices = () => {

        let sum = 0;
        let newBoard = []

        for (let i = 0; i < Constants.NBR_OF_DICES; i++) {
            let randomNumber = Math.floor(Math.random() * 6 + 1)
            newBoard[i] = "dice-" + randomNumber;
            sum+= randomNumber;
        }

        setThrowsLeft(throwsLeft-1)
        setSum(sum)
        setBoard(newBoard)

    }

    const checkWinner = () => {
        
        if (sum >= 23 && throwsLeft > 0) {
            setNbrOfWins(nbrOfWins+1)
            setStatus("You won")
        } else if (sum >= 23 && throwsLeft === 0) {
            setNbrOfWins(nbrOfWins+1)
            setStatus("You won, game over")
        } else if (nbrOfWins>0 && throwsLeft === 0) {
            setStatus("You won, game over")
        } else if (throwsLeft === 0) {
            setStatus("Game over")
        } else {
            setStatus("Keep rolling")
        }

    }

    useEffect(() => {

        checkWinner();

        if (throwsLeft===Constants.NBR_OF_THROWS) {
            setStatus("Game has not started")
        }
        if (throwsLeft<0) {
            setThrowsLeft(Constants.NBR_OF_THROWS-1)
            setNbrOfWins(0)
        }
    },[throwsLeft])

    const row = [];
    
    for (let i = 0; i<Constants.NBR_OF_DICES; i++) {
            row.push(
                <MaterialCommunityIcons 
                name={board[i]}
                key={"row" + i}
                size={50}
                color={"#ccb3ff"}
            >
            </MaterialCommunityIcons>
            )
    }

   /* <MaterialCommunityIcons 
    name={board[i]}
    key={"row" + i}
    size={50}
    color={"#ccb3ff"}
>
</MaterialCommunityIcons>*/

    if(route.params == null) {
        return (
        <SafeAreaView style={styles.container}>
            <Header/>
                <ScrollView>
                    <Button style={styles.button} onPress={()=>navigation.navigate("Home")}>Think you can fool me? Input your name.</Button>
                </ScrollView>
            <Footer/>
        </SafeAreaView>
        )
    } else {
        return (
        <SafeAreaView style={styles.container}>
            <Header/>
                <ScrollView>
                    <Text style={styles.textAlign}>You are playing as {route.params.name}</Text>
                    <Button style={styles.button} onPress={()=>navigation.navigate("Home")}>Change name?</Button>
                </ScrollView>
                <View style={styles.gameboard}>
                    <View style={{ flexDirection: "row"}}>{row}</View>
                    <Text>sum: {sum}</Text>
                    <Text>throws left: {throwsLeft}</Text>
                    <Text>wins: {nbrOfWins}</Text>
                    <Text>{status}</Text>
                    <Button 
                        onPress={()=>throwDices()}>
                            <Text>roll</Text>
                    </Button>
                </View>
            <Footer/>
        </SafeAreaView>
    )
}
    
}