import { Button, DataTable } from "react-native-paper"
import { Text, View, SafeAreaView, ScrollView } from "react-native"
import React, { useState, useEffect } from "react";
import { Prompt } from 'react-router'
import Header from "./Header"
import Footer from "./Footer"
import styles from "../styles/style";
import * as Constants from "./Constants"
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = "@person_Key"


export default function Scoreboard({navigation, route}) {
    const [board, setBoard] = useState([])

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(STORAGE_KEY, jsonValue)
        } catch (err) {
            console.log(err)
        }
    }

    const getData = async () => {
        try {
            return AsyncStorage.getItem(STORAGE_KEY)
            .then (req => JSON.parse(req))
            .then (json => {
                if (json===null) {
                    json=[]
                }
                setBoard(json)
            })
            .catch (error => console.log(error))
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {

        if (route.params?.name) {
            const newKey = board.length +1
            const newPerson = {key: newKey.toString(), name: route.params.name, result: route.params.result}
            const newBoard = [...board, newPerson]

            storeData(newBoard)
        }
        getData();
    }, [route.params?.name])

    const clearBoard = async function() {
        try {
            const keys = await AsyncStorage.getAllKeys();
            await AsyncStorage.multiRemove(keys);
        } catch (error) {
            console.error('Error clearing app data.');
        }
    }


    return (
        <ScrollView>
            {board.length==0 && <Text>Scoreboard is empty</Text>}
            {board.length>0 && 
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Player</DataTable.Title>
                    <DataTable.Title numeric>Score</DataTable.Title>
                </DataTable.Header>
            </DataTable> }
            { board.length>0 &&
                board.map((person) => (
                    <DataTable.Row key={person.key}>
                        <DataTable.Cell>{person.name}</DataTable.Cell>
                        <DataTable.Cell>{person.result}</DataTable.Cell>
                    </DataTable.Row>
                ))
            }
        { board.length>0 && <Button style={styles.button} onPress={()=>clearBoard()}>Clear</Button> }
        
        </ScrollView>
       
    )

}