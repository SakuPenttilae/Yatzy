import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/style"

export default Header = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.author}>
                Author: Saku Penttilä             
            </Text>
        </View>
    )
}