import { React, useState, useEffect } from 'react';
import { ScrollView, Image, Text, View, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { pegarAllProdutos, deletarProduto } from '../../servicos/firestore';
import { Capitalize } from '../../servicos/formatarString';
import { NavBar } from '../NavBar/NavBar';
import { BotaoAdd } from '../BotaoAdd/BotaoAdd.js';
import Icon from 'react-native-vector-icons/AntDesign';

export function Estoque({ navigation }) {
    const [fontsLoaded] = useFonts({
        'Raleway-Regular': require('../../../assets/fonts/Raleway-Regular.ttf'),
        'Raleway-Medium': require('../../../assets/fonts/Raleway-Medium.ttf'),
        'Raleway-Italic': require('../../../assets/fonts/Raleway-Italic.ttf'),
        'Raleway-Black': require('../../../assets/fonts/Raleway-Black.ttf'),
    });
    const [AllProdutos, setAllProdutos] = useState([]);

    useEffect(() => {
        pegarAllProdutos(setAllProdutos)
    }, [])

    console.log(AllProdutos)

    return (
        <View style={{ backgroundColor: '#F9F9F9', flex: 1 }}>
            <View style={{ position: 'fixed', zIndex: 1, width: '100%', height: 80, backgroundColor: '#FFFFFF' }}>
                <Text style={{ fontSize: 38, fontFamily: "Raleway-Italic", top: 20, textAlign: 'center' }}>Gerenciar Produtos</Text>
            </View>
            <View style={{ marginTop: 80, flex: 1 }}>
                <ScrollView>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', left: 20, paddingBottom: 83 }}>
                        {AllProdutos.map((item, index) => (
                            <View key={index} style={{ margin: 10, marginRight: 17 }}>
                                <Image source={{ uri: item.imageUrl }} style={{ width: 148, height: 184, borderRadius: 8, shadowColor: "rgba(211, 38, 38, 0.25)", shadowOffset: { width: 0, height: 4 }, shadowRadius: 8, elevation: 8, shadowOpacity: 1, }} />
                                <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <View>
                                        <Text style={{ fontSize: 11, color: "#9B9B9B", fontFamily: "Raleway-Regular", marginTop: 26 }}>{Capitalize(item.pasta)}</Text>
                                        <View style={{width: 145}}>
                                            <Text style={{fontSize: 20, color: "#222222", fontFamily: "Raleway-Italic", marginTop: 4}}>{item.nome}</Text>
                                        </View>
                                    </View>
                                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '100%', paddingTop: 10}}>
                                        <Text style={{ fontSize: 18, color: "#DB3022", fontFamily: "Raleway-Medium", marginTop: 4, marginRight: 18 }}>R$ {item.preco}</Text>
                                        <TouchableOpacity style={{ height: 30, width: 30, backgroundColor: '#6495ED', borderRadius: 8, padding: 8, alignItems: 'center', justifyContent: 'center'}} onPress={() => navigation.navigate('AddProduto', item)}>
                                            <Icon
                                                name={'edit'}
                                                size={18}
                                                color="#FFF"
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ height: 30, width: 30, backgroundColor: '#FA8072', borderRadius: 8, padding: 8, alignItems: 'center', justifyContent: 'center'}} onPress={() => deletarProduto(item.id, Capitalize(item.pasta), item.nome)}>
                                            <Icon
                                                name={'delete'}
                                                size={18}
                                                color="#FFF"
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
            <BotaoAdd onPress={() => navigation.navigate('AddProduto')} />
            <NavBar></NavBar>
        </View>
    );
};