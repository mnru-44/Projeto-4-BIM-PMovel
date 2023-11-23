import { View, Text, TouchableOpacity, Image } from "react-native"
import { styles } from "./styles.js"
import { useNavigation } from '@react-navigation/native';

export function Home() {
    const navigation = useNavigation();
    return (
        <View>
            <Image
                style={{width: "375px", height: "446px"}}
                source={require('../../../assets/homebg.png')}
            />
            <Text style={{top: 400, left: 21, fontWeight: "700", color: "#000", textAlign: "left", width: 305, position: "absolute", display: "flex", flexDirection: "column"}}>
                <Text style={{fontSize: 58}}>Seja bem vindo(a)!</Text>
                <Text style={{fontSize: 34}}>CM Cosméticos</Text>
            </Text>
            <TouchableOpacity style={styles.homeBotao} onPress={() => navigation.navigate('Login')}>
                <Text style={{fontSize: "14px", fontWeight: 500, color: '#FFF'}}>Seguir!</Text>
            </TouchableOpacity>
        </View>
    )
}