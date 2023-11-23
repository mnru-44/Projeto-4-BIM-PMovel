import { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native-paper';
import { styles } from "./styles";
import { db } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore"
export function TelaSenha({ navigation }) {
    const [password, setPassword] = useState('');
    const [senhaServer, setSenhaServer] = useState('');
    const [secureMode, setSecureMode] = useState(true);

    useEffect(() => {
        const pegarSenha = async () => {
            const docRef = doc(db, "senha", "ld9EcOjPJSwD6gwJJIch");
            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()) {
                setSenhaServer(Object.values(docSnap.data())[0]);
            } 
            else {
                console.log("No such document!");
            }
        };

        pegarSenha();
        
    }, []);
    
    
    const handleLogin = () => {
        if (password === senhaServer) {
            navigation.navigate('Estoque');
        } 
        else {
            alert("senha errada")
        }
    };

    return (
        <View style={styles.container}>
            <Image style={styles.imagem}
                source={require("../../../assets/LOGO.png")}
            />
            <Text style={styles.title}>
                Controle {"\n"}de Estoque
            </Text>
            <TextInput
                label="Senha"
                value={password}
                onChangeText={setPassword}
                mode="outlined"
                secureTextEntry={secureMode}
                right={
                    <TextInput.Icon
                        icon={secureMode ? 'eye-off' : 'eye'}
                        onPress={() => setSecureMode(!secureMode)}
                    />
                }
                outlineColor="rgba(0, 0, 0, 0)"
                activeOutlineColor="rgba(20, 20, 20, 0.2)"
                textColor="#141414"
                style={styles.input} />
            <TouchableOpacity style={styles.botao} onPress={handleLogin}>
                <Text style={styles.textoButton}>
                    Entrar
                </Text>
            </TouchableOpacity>
        </View>
    );
};