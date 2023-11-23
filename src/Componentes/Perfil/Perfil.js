import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { db, auth } from "../../config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { NavBar } from '../NavBar/NavBar';
import { useFonts } from 'expo-font';

export function Perfil() {
	const [fontsLoaded] = useFonts({
		'Raleway-Italic': require('../../../assets/fonts/Raleway-Italic.ttf'),
		'Raleway-Bold': require('../../../assets/fonts/Raleway-Bold.ttf'),
		'Raleway-Medium': require('../../../assets/fonts/Raleway-Medium.ttf'),
	});

	const [nome, setNome] = useState('')
	const [email, setEmail] = useState('')

	const atual = auth.currentUser
	useEffect(() => {
		const fetchData = async () => {
			try {
				const q = query(collection(db, 'usuarios'), where("email", "==", atual.email));
				const querySnapshot = await getDocs(q);

				let obj = {};
				querySnapshot.forEach((doc) => {
					obj = doc.data();
				});

				setNome(obj.nome);
				setEmail(obj.email);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	console.log(nome, email)

	return (
		<View style={{ backgroundColor: '#F9F9F9', flex: 1 }}>
			<View style={{ position: 'fixed', zIndex: 1, width: '100%', height: 150, backgroundColor: '#FFFFFF' }}>
				<Text style={{ fontSize: 24, fontFamily: "Raleway-Bold", top: 48, left: 20 }}>CM Cosméticos</Text>
				<Text style={{ fontSize: 34, fontFamily: "Raleway-Bold", top: 62, left: 20 }}>Meu Perfil</Text>
			</View>

			<View style={{flex: 1, paddingTop: 183, paddingLeft: 20}}>
				<Text style={{fontSize: 34, fontFamily: 'Raleway-Italic', color: '#222222'}}>{nome}</Text>
				<Text style={{fontSize: 24, fontFamily: 'Raleway-Medium', color: '#9B9B9B', marginTop: 32}}>{email}</Text>
			</View>
			
			<NavBar></NavBar>
		</View>
	)
}