import React from 'react';
import { storage, db } from '../../config/firebase';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { collection, addDoc } from "firebase/firestore";
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import { styles } from "./styles";
import { atualizarProduto } from '../../servicos/firestore.js';

export function AddProduto({ route }) {
    const [nome, setNome] = useState("");
    const [pasta, setPasta] = useState("");
    const [preco, setPreco] = useState("");
    const [descricao, setDescricao] = useState("");
    const [tipo, setTipo] = useState("");
    const [image, setImage] = useState("");
    const [previewUrl, setPreviewUrl] = useState("");

    const enviarDados = async () => {
        if (image) {
            if (isNaN(preco)) {
                alert('O preço deve ser um número')
            }

            else if (route?.params) {
                const storageRef = ref(storage, `${route?.params?.pasta.toUpperCase()}/${route?.params?.nome}`);

                deleteObject(storageRef).then(() => {
                    console.log('imagem deletada para atualização do produto')
                }).catch((error) => {
                    console.log(error)
                });

                const newStorageRef = ref(storage, `${pasta.toUpperCase()}/${nome}`);

                const upload = uploadBytes(newStorageRef, image)
                    .then((snapshot) => {
                        console.log('imagem atualizada');
                    })
                    .catch((erro) => {
                        console.log(erro.message);
                    });
                
                
                await upload;

                const imageref = ref(storage, `${pasta.toUpperCase()}/${nome}`)
                const downloadURL = await getDownloadURL(imageref);

                const data = {
                    nome,
                    pasta: pasta.toUpperCase(),
                    preco,
                    descricao,
                    tipo: tipo.toUpperCase(),
                    imageUrl: downloadURL,
                }

                atualizarProduto(route?.params?.id, data)
            }

            else {
                const storageRef = ref(storage, `${pasta.toUpperCase()}/${nome}`);

                const upload = uploadBytes(storageRef, image)
                    .then((snapshot) => {
                        console.log('Produto no server!');
                    })
                    .catch((erro) => {
                        console.log(erro.message);
                    });
                
                
                await upload;

                const imageref = ref(storage, `${pasta.toUpperCase()}/${nome}`)
                const downloadURL = await getDownloadURL(imageref);

                const data = {
                    nome,
                    pasta: pasta.toUpperCase(),
                    preco,
                    descricao,
                    tipo: tipo.toUpperCase(),
                    imageUrl: downloadURL,
                }

                await addDoc(collection(db, 'produtos'), data)
            }
            
        } else {
            console.log('Nenhuma imagem selecionada.');
        }
    };

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
            setPreviewUrl(URL.createObjectURL(e.target.files[0]));
        }
        
    };

    const nomeChange = (e) => {
        setNome(e)
    };
    const pastaChange = (e) => {
        setPasta(e)
    };
    const precoChange = (e) => {
        setPreco(e)
    };
    const tipoChange = (e) => {
        setTipo(e)
    };
    const descricaoChange = (e) => {
        setDescricao(e)
    };
    
    return (
        <View style={styles.container}>
            <label style={styles.buttonfile} htmlFor="file"><Text style={styles.textoButton}>Selecionar imagem:</Text></label>
            <input type='file' name='file' id='file' onChange={handleChange} style={{display: 'none'}}/>
            {previewUrl && <Image source={{ uri: previewUrl }} style={{ width: 160, height: 196, borderRadius: 8, shadowColor: "rgba(211, 38, 38, 0.25)", shadowOffset: {width: 0,	height: 4},	shadowRadius: 8, elevation: 8, shadowOpacity: 1, }} />}
            <TextInput 
                style={styles.input} 
                label="Nome do Produto"
                mode="outlined"
                outlineColor="rgba(0, 0, 0, 0)"
                activeOutlineColor="rgba(20, 20, 20, 0.2)" 
                textColor="#141414"
                value={nome}
                onChangeText={nomeChange}></TextInput>

            <TextInput 
                style={styles.input} 
                label="Marca"
                mode="outlined"
                outlineColor="rgba(0, 0, 0, 0)"
                activeOutlineColor="rgba(20, 20, 20, 0.2)" 
                textColor="#141414"
                value={pasta}
                onChangeText={pastaChange}></TextInput>

            <TextInput 
                style={styles.input} 
                label="Preço"
                keyboardType="decimal-pad"
                mode="outlined"
                outlineColor="rgba(0, 0, 0, 0)"
                activeOutlineColor="rgba(20, 20, 20, 0.2)" 
                textColor="#141414"
                value={preco}
                onChangeText={precoChange}></TextInput>

            <TextInput 
                style={styles.input} 
                label="Descrição"
                mode="outlined"
                outlineColor="rgba(0, 0, 0, 0)"
                activeOutlineColor="rgba(20, 20, 20, 0.2)" 
                textColor="#141414"
                value={descricao}
                onChangeText={descricaoChange}></TextInput>

            <TextInput 
                style={styles.input} 
                label="Tipo"
                mode="outlined"
                outlineColor="rgba(0, 0, 0, 0)"
                activeOutlineColor="rgba(20, 20, 20, 0.2)" 
                textColor="#141414"
                value={tipo}
                onChangeText={tipoChange}></TextInput>

            <TouchableOpacity style={styles.botao} onPress={enviarDados}>
                <Text style={styles.textoButton}>Upload</Text>
            </TouchableOpacity>
        </View>
    );
}