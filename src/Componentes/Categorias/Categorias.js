import React from 'react';
import { View, FlatList, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { NavBar } from '../NavBar/NavBar';
import { useNavigation } from '@react-navigation/native';
export function Categorias() {
    const [fontsLoaded] = useFonts({
        'Raleway-Black': require('../../../assets/fonts/Raleway-Black.ttf'),
        'Raleway-Italic': require('../../../assets/fonts/Raleway-Italic.ttf'),
        'Raleway-Medium': require('../../../assets/fonts/Raleway-Medium.ttf'),
    });

    const data = [
        { id: '1', title: 'Natura', image: require('../../../assets/logo-natura.jpeg') },
        { id: '2', title: 'Eudora', image: require('../../../assets/logo-eudora.jpeg') },
        { id: '3', title: 'OBoticário', image: require('../../../assets/logo-oboticario.png') },
    ];

    const navigation = useNavigation()

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate(item.title)}>
            <View style={styles.itemContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Image style={styles.image} source={item.image} />
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={{ backgroundColor: '#F9F9F9', flex: 1 }}>
            <View style={{ position: 'fixed', zIndex: 1, width: '100%', height: 150, backgroundColor: '#FFFFFF' }}>
                <Text style={{ fontSize: 24, fontFamily: "Raleway-Bold", top: 48, left: 20 }}>CM Cosméticos</Text>
				<Text style={{ fontSize: 34, fontFamily: "Raleway-Bold", top: 62, left: 20 }}>Marcas</Text>            
            </View>
            <View style={{flex: 1}}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    style={{paddingInline: 16, marginTop: 170}}
                />
            </View>
            <NavBar></NavBar>
        </View>
    )
}

const styles = StyleSheet.create({

    itemContainer: {
        height: 100,
        borderRadius: 8,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 16,
        marginBottom: 16,
        shadowColor: "rgba(211, 38, 38, 0.25)", 
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 8,
        shadowOpacity: 0.3
    },
    image: {
        width: 100,
        height: 100,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,

    },
    title: {
        fontSize: 24,
        lineHeight: 22,
        fontStyle: "italic",
        fontWeight: "100",
        fontFamily: "Raleway-Italic",
        color: "#222",
        textAlign: "left"

    },
});