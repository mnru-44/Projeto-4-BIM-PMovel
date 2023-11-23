import {React, useState, useEffect } from 'react';
import { ScrollView, Image, Text, View, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { pegarProdutosOBoticario } from '../../servicos/firestore';
import { Capitalize } from '../../servicos/formatarString';
import { NavBar } from '../NavBar/NavBar';
import { useNavigation } from '@react-navigation/native';

export function ScrollViewOboticario() {
	const navigation = useNavigation();
	const [fontsLoaded] = useFonts({
		'Raleway-Regular': require('../../../assets/fonts/Raleway-Regular.ttf'),
		'Raleway-Italic': require('../../../assets/fonts/Raleway-Italic.ttf'),
		'Raleway-Medium': require('../../../assets/fonts/Raleway-Medium.ttf'),
	});
	const [ProdutosOBoticario, setProdutosOBoticario] = useState([]);

	useEffect(() => {
		pegarProdutosOBoticario(setProdutosOBoticario)
	}, [])

	return (
		<View style={{backgroundColor: '#F9F9F9', flex: 1}}>
			<View style={{position: 'fixed', zIndex: 1, width: '100%', height: 80, backgroundColor: '#FFFFFF'}}>
                <Text style={{fontSize: 38, fontFamily: "Raleway-Italic", top: 20, textAlign: 'center'}}>oBoticário</Text>
            </View>
			<View style={{marginTop: 80, flex: 1}}>
				<ScrollView>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap', left: 20, paddingBottom: 83 }}>
							{ProdutosOBoticario.map((item, index) => (
							<TouchableOpacity key={index} onPress={() => navigation.navigate('PagProduto', { produto: item })}>
								<View style={{ margin: 10, marginRight: 17 }}>
									<Image source={{ uri: item.imageUrl }} style={{ width: 148, height: 184, borderRadius: 8, shadowColor: "rgba(211, 38, 38, 0.25)", shadowOffset: {width: 0,	height: 4},	shadowRadius: 8, elevation: 8, shadowOpacity: 1, }} />
									<Text style={{fontSize: 11, color: "#9B9B9B", fontFamily: "Raleway-Regular", marginTop: 26}}>{Capitalize(item.pasta)}</Text>
									<Text style={{fontSize: 20, color: "#222222", fontFamily: "Raleway-Italic", marginTop: 4}}>{item.nome}</Text>
									<Text style={{fontSize: 18, color: "#DB3022", fontFamily: "Raleway-Medium", marginTop: 4}}>R$ {item.preco}</Text>
								</View>
							</TouchableOpacity>
							))}
					</View>
				</ScrollView>
			</View>
			<NavBar></NavBar>
		</View>
	);
};