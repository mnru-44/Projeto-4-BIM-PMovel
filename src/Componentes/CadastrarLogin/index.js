import { useState } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { TextInput, HelperText, Snackbar } from 'react-native-paper';
import { cadastrar } from "../../servicos/requisicoesFirebase";
import { styles } from "./styles";

export function Cadastrar({ navigation }) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmaSenha, setConfirmaSenha] = useState('')
    const [statusError, setStatusError] = useState('')
    const [mensagemError, setMensagemError] = useState('')
    const [statusSnakbar, setStatusSnakbar] = useState(false)
    const [mensagemSnakbar, setMensagemSnakbar] = useState(false)

    function limpaCampos() {
        setNome('')
        setEmail('')
        setSenha('')
        setConfirmaSenha('')
        navigation.navigate('Login')
    }
    async function realizarCadastro() {
        if (nome == '') {
            setMensagemError('Nome não pode ficar vazio!')
            setStatusError('nome')
        } else if (email == '') {
            setMensagemError('E-mail não pode ficar vazio!')
            setStatusError('email')
        } else if (senha == '') {
            setMensagemError('Senha não pode ser em branco')
            setStatusError('senha')
        } else if (confirmaSenha == '') {
            setMensagemError('Confirmação de Senha não pode ser vazio')
            setStatusError('confirmaSenha')
        } else if (senha != confirmaSenha) {
            setMensagemError('Senhas não conferem')
            setStatusError('senhaNaoConfere')
        }
        else {
            const resultado = await cadastrar(nome, email, senha)
            setStatusSnakbar(true)
            if (resultado == 'sucesso') {
                setMensagemSnakbar("E-mail cadastrado com sucesso!")
                setTimeout(limpaCampos, 3000)
            }
            else {
                setMensagemSnakbar(resultado)
            }
            setMensagemError('')
            setStatusError('')
        }
    }
    return (
        <View style={styles.container}>
            <Image style={styles.imagem}
                source={require("../../../assets/LOGO.png")}
            />
            <Text style={styles.title}>
                Cadastro
            </Text>
            <TextInput
                label="Nome"
                value={nome}
                onChangeText={setNome}
                mode="outlined"
                error={statusError == 'nome'}
                style={styles.input}
                outlineColor="rgba(0, 0, 0, 0)"
                activeOutlineColor="rgba(20, 20, 20, 0.2)" 
                textColor="#141414" />
            {statusError == 'nome' ? <HelperText type="error" visible={statusError == 'nome'}>
                {mensagemError}
            </HelperText> : null}
            <TextInput
                label="E-mail"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                mode="outlined"
                error={statusError == 'email'}
                style={styles.input}
                outlineColor="rgba(0, 0, 0, 0)"
                activeOutlineColor="rgba(20, 20, 20, 0.2)" 
                textColor="#141414" />
            {statusError == 'email' ? <HelperText type="error" visible={statusError == 'email'}>
                {mensagemError}
            </HelperText> : null}
            <TextInput
                label="Senha"
                value={senha}
                onChangeText={setSenha}
                mode="outlined"
                error={statusError == 'senha'}
                secureTextEntry
                style={styles.input}
                outlineColor="rgba(0, 0, 0, 0)"
                activeOutlineColor="rgba(20, 20, 20, 0.2)" 
                textColor="#141414" />
            {statusError == 'senha' ? <HelperText type="error" visible={statusError == 'senha'}>
                {mensagemError}
            </HelperText> : null}
            <TextInput
                label="Confirmar Senha"
                value={confirmaSenha}
                onChangeText={setConfirmaSenha}
                mode="outlined"
                error={statusError == 'confirmaSenha'}
                secureTextEntry
                style={styles.input}
                outlineColor="rgba(0, 0, 0, 0)"
                activeOutlineColor="rgba(20, 20, 20, 0.2)" 
                textColor="#141414" />
            {statusError == 'confirmaSenha' ? <HelperText type="error" visible={statusError == 'confirmaSenha'}>
                {mensagemError}
            </HelperText> : null}
            <HelperText type="error" visible={statusError == 'senhaNaoConfere'}>
                {mensagemError}
            </HelperText>
            <TouchableOpacity
                style={styles.botao} onPress={() => realizarCadastro()}>
                <Text style={styles.textoButton}>Cadastrar</Text>
            </TouchableOpacity>
            <Text style={styles.texto}> Já tem uma conta?
                <Text style={styles.textoLink}
                    onPress={() => navigation.navigate('Login')}> Efetue o Login
                </Text>
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