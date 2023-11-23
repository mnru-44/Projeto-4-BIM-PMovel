import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { TextInput, HelperText, Snackbar } from 'react-native-paper';
import { logar } from "../../servicos/requisicoesFirebase";
import { styles } from "./styles";

export function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [secureMode, setSecureMode] = useState(true);
    const [statusError, setStatusError] = useState('')
    const [mensagemError, setMensagemError] = useState('')
    const [statusSnakbar, setStatusSnakbar] = useState(false)
    const [mensagemSnakbar, setMensagemSnakbar] = useState(false)

    async function fazerLogin() {
        if (email == '') {
            setMensagemError('E-mail não pode ficar vazio!')
            setStatusError('email')
        } else if (senha == '') {
            setMensagemError('Senha não pode ser em branco')
            setStatusError('senha')
        } else {
            setMensagemError('')
            setStatusError('')
            const resultado = await logar(email, senha)
            if (resultado == 'sucesso') {
                navigation.replace('MainPage', { email: email }) //replace apaga as telas anteriores da pilha. Caso o usuário clique no voltar do celular não volta para a tela de login
            } else
                setStatusSnakbar(true)
            setMensagemSnakbar("E-mail ou senha inválida")
            console.log(resultado)
        }
    }
    return (
        <View style={styles.container}>
            <Image style={styles.imagem}
                source={require("../../../assets/LOGO.png")}
            />
            <Text style={styles.title}>
                Login
            </Text>
            <TextInput
                label="E-mail"
                value={email}
                onChangeText={setEmail}
                mode="outlined"
                keyboardType="email-address"
                error={statusError == 'email'}
                style={styles.input}
                outlineColor="rgba(0, 0, 0, 0)"
                activeOutlineColor="rgba(20, 20, 20, 0.2)" 
                textColor="#141414"
            />
            {statusError == 'email' ? <HelperText type="error" visible={statusError == 'email'}>
                {mensagemError}
            </HelperText> : null}
            <TextInput
                label="Senha"
                value={senha}
                onChangeText={setSenha}
                mode="outlined"
                error={statusError == 'senha'}
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
            {statusError == 'senha' ? <HelperText type="error" visible={statusError == 'senha'}>
                {mensagemError}
            </HelperText> : null}
            <TouchableOpacity style={styles.botaoEstoque} onPress={() => fazerLogin()}>
                <Text style={styles.textoButton}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={() => {navigation.navigate('Senha')}}>
                <Text style={styles.textoButton}>Controle de Estoque</Text>
            </TouchableOpacity>
            <Text style={styles.texto}> Ainda não tem uma conta?
                <Text style={styles.textoLink}
                    onPress={() => navigation.navigate('Cadastrar')}> Cadastre-se</Text>
            </Text>
            <Snackbar visible={statusSnakbar} onDismiss={() => setStatusSnakbar(false)} duration={2000}
                action={{
                    label: 'OK',
                    onPress: () => {
                        setStatusSnakbar(false)
                    },
                }}>
                {mensagemSnakbar} 
            </Snackbar>
        </View>
    )
}