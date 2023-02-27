import { Button } from "react-native"
import { Text, View } from "react-native"

export default function Gameboard({navigation, route}) {
    return (
        <View>
    <Text>Jipii moro {route.params.name}</Text>
    <Button title="joo" onPress={()=>navigation.navigate("Home")}></Button>
    </View>
    )
}