import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/style"

export default Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                Roll the dices man          
            </Text>
        </View>
    )
}