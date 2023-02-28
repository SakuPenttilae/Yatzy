import { Button } from "react-native-paper"
import { Text, View, SafeAreaView, ScrollView } from "react-native"
import Header from "./Header"
import Footer from "./Footer"
import styles from "../styles/style";

export default function Gameboard({navigation, route}) {

    if(route.params == null) {
        return (
        <SafeAreaView style={styles.container}>
            <Header/>
                <ScrollView>
                    <Button style={styles.button} onPress={()=>navigation.navigate("Home")}>Think you can fool me? Click here to input your name.</Button>
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
            <Footer/>
        </SafeAreaView>
    )
}
    
}