import { Button } from "react-native-paper"
import { Text, View, SafeAreaView, ScrollView } from "react-native"
import React, { useState, useEffect } from "react";
import { Prompt } from 'react-router'
import Header from "./Header"
import Footer from "./Footer"
import styles from "../styles/style";
import * as Constants from "./Constants"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Col, Row, Grid } from "react-native-easy-grid";

export default function Gameboard({navigation, route}) {

    const [throwsLeft, setThrowsLeft] = useState(Constants.NBR_OF_THROWS)
    const [tempSum, setTempSum] = useState(0)
    const [summa,setSumma] = useState(0)
    const [status, setStatus] = useState("")
    const [board, setBoard] = useState([])
    const [sumProp, setSumProp] = useState(0)

    const throwDices = () => {
        let newSum = 0
        let newBoard = []

        for (let i = 0; i < Constants.NBR_OF_DICES; i++) {
            let randomNumber = Math.floor(Math.random() * 6 + 1)
            newBoard[i] = "dice-" + randomNumber;
            newSum+= randomNumber;
        }

        setThrowsLeft(throwsLeft-1)

        setTempSum(newSum)
        
        if (newSum > summa) {
            setSumma(newSum)
        }

        setBoard(newBoard)

    }

    const checkWinner = () => {
        
        if (throwsLeft > 0) {
            setStatus(<Text>Nice. You got {tempSum}</Text>)
        } 

    }

    useEffect(() => {

        checkWinner()

        if (throwsLeft===Constants.NBR_OF_THROWS) {
            setStatus("Game has not started")
        }
        if (throwsLeft<0) {
            setThrowsLeft(Constants.NBR_OF_THROWS-1)
        }
        if (throwsLeft === 0) {
            setStatus(<Text>Your highest score was {summa}</Text>)
        }

        setSumProp(summa)

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

    function goToScore() {
     
        setSumma(0)
        setTempSum(0)
        setBoard([])
        setThrowsLeft(Constants.NBR_OF_THROWS)
        
        navigation.navigate("Scoreboard", {
            name: route.params.name,
            result: sumProp,
        })

        setSumProp(0)
    }

    function goToHome() {
     
        setSumma(0)
        setTempSum(0)
        setBoard([])
        setThrowsLeft(Constants.NBR_OF_THROWS)
        setSumProp(0)

        navigation.navigate("Home")
        
    }

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
        
    <Grid style={styles.gameboard}>
        <Header />
        <Row>
            <ScrollView>
                <Text style={styles.textAlign}>You are playing as {route.params.name}</Text>
                <Button style={styles.button} onPress={()=>goToHome()}>Change name?</Button>
            </ScrollView>
        </Row>
        <Row>
            <View style={{ flexDirection: "row"}}>{row}</View>
        </Row>
        <Row>
            <View>
                <Text style={styles.textAlign}>throws left: {throwsLeft}</Text>
                <Text>{status}</Text>
            </View>
        </Row>
        <Row size={2}>
        {throwsLeft>0 && 
            <Button style={styles.button}
                onPress={()=>throwDices()}>
                    <Text>roll</Text>
            </Button>
        }
        {throwsLeft===0 && 
            <Button style={styles.button}
                onPress={()=>goToScore()}>
                <Text>To scoreboard</Text>
            </Button>
        }
        </Row>
        <Footer />
    </Grid>
)
}
    
}