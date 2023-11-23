
import { createUserWithEmailAndPassword, AuthErrorCodes, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

function errosFirebase(error) {
    let mensagem = ''
    switch (error.code) {
        case AuthErrorCodes.EMAIL_EXISTS:
            mensagem = 'Esse email já está em uso'
            break;
        case AuthErrorCodes.INVALID_EMAIL:
            mensagem = 'E-mail inválido'
            break;
        case AuthErrorCodes.WEAK_PASSWORD:
            mensagem = 'A senha precisa do no mínimo 6 caracteres'
            break;
        default:
            mensagem = 'Erro desconhecido'
    }
    return mensagem
}

export async function cadastrar(nome, email, senha) {
    const resultado = await createUserWithEmailAndPassword(auth, email, senha)
        .then((dados) => {
            const data = {
                nome: nome,
                email: dados.user.email,
            }
            addDoc(collection(db, 'usuarios'), data)
            return "sucesso"
        })
        .catch((error) => {
            return errosFirebase(error)
        })
    
    return resultado
}

export async function logar(email, senha) {
    const resultado = await signInWithEmailAndPassword(auth, email, senha)
        .then((dadosDoUsuario) => {
            console.log(dadosDoUsuario)
            return "sucesso"
        })
        .catch((error) => {
            console.log(error)
            return "Erro ao logar"
        })
    return resultado
}