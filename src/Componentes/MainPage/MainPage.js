import { View, ScrollView, Text, Image } from 'react-native';
import { ScrollViewPerfumes } from '../ScrollViews/ScrollViewPerfumes';
import { ScrollViewHidratantes } from '../ScrollViews/ScrollViewHidratantes';
import { ScrollViewKits } from '../ScrollViews/ScrollViewKits';
import { useFonts } from 'expo-font';
import { NavBar } from '../NavBar/NavBar'
import { TextInput } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { pegarAllProdutos } from '../../servicos/firestore';
import { Capitalize } from '../../servicos/formatarString';
import { styles } from "./styles";

export function MainPage({ navigation }) {
    const [fontsLoaded] = useFonts({
        'Raleway-Black': require('../../../assets/fonts/Raleway-Black.ttf'),
        'Raleway-Bold': require('../../../assets/fonts/Raleway-Bold.ttf'),
        'Raleway-Medium': require('../../../assets/fonts/Raleway-Medium.ttf'),
    });

    const [AllProdutos, setAllProdutos] = useState([]);

    useEffect(() => {
        pegarAllProdutos(setAllProdutos)
    }, [])

    const [isTextInputFocused, setTextInputFocused] = useState(false);
    const [Pesquisa, setPesquisa] = useState('');

    const handleFocus = () => {
        setTextInputFocused(true);
    };

    const handleBlur = () => {
        setTextInputFocused(false);
    };

    return (
        <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.titleTop}>Página Inicial</Text>
                    <TextInput label={'Pesquisar:'} mode="outlined" outlineColor="rgba(0, 0, 0, 0)" activeOutlineColor="rgba(20, 20, 20, 0.2)" textColor="#141414" onChangeText={setPesquisa} onFocus={handleFocus} onBlur={handleBlur} style={styles.searchBar}/>
                </View>
            {isTextInputFocused ? (
                <ScrollView style={{ marginTop: 150, flex: 1, height: 662, paddingBottom: 83, paddingTop: 15 }}>    
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', display: 'flex', justifyContent: 'center' }}>
                    {AllProdutos.filter((val) => {
                        if(Pesquisa === ''){
                            return val
                        }else if(val.nome.toLowerCase().includes(Pesquisa.toLowerCase())){
                            return val
                        }
                    }).map((item, index) => (
                        <View key={index} style={{ margin: 10, marginRight: 17 }}>
                            <Image source={{ uri: item.imageUrl }} style={styles.imagem} />
                            <Text style={{ fontSize: 11, color: "#9B9B9B", fontFamily: "Raleway-Regular", marginTop: 26 }}>{Capitalize(item.pasta)}</Text>
                            <View style={{width: 145}}>
								<Text style={{fontSize: 20, color: "#222222", fontFamily: "Raleway-Italic", marginTop: 4}}>{item.nome}</Text>
							</View>
                            <Text style={{ fontSize: 18, color: "#DB3022", fontFamily: "Raleway-Medium", marginTop: 4 }}>R$ {item.preco}</Text>
                        </View>
                    ))}
                    </View>
                </ScrollView>
            ) : (
                <ScrollView style={{ marginTop: 150, flex: 1, height: 662, paddingBottom: 83, paddingTop: 15 }}>
                    <Text style={{ fontSize: 34, fontFamily: 'Raleway-Bold', left: 20, marginBottom: 10, fontWeight: 'bold' }}>
                        Perfumes
                    </Text>
                    <ScrollViewPerfumes></ScrollViewPerfumes>
                    <Text style={{ fontSize: 34, fontFamily: 'Raleway-Bold', left: 20, marginBottom: 10, marginTop: 10, fontWeight: 'bold' }}>
                        Hidratantes
                    </Text>
                    <ScrollViewHidratantes></ScrollViewHidratantes>
                    <Text style={{ fontSize: 34, fontFamily: 'Raleway-Bold', left: 20, marginBottom: 10, marginTop: 10, fontWeight: 'bold' }}>
                        Kits
                    </Text>
                    <ScrollViewKits></ScrollViewKits>
                </ScrollView>
            )}
            <NavBar></NavBar>
        </View>
    )
}