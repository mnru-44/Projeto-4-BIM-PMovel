import { View, Text, Image } from 'react-native';
import { ScrollViewPerfumes } from '../ScrollViews/ScrollViewPerfumes';
import { ScrollViewHidratantes } from '../ScrollViews/ScrollViewHidratantes';
import { useFonts } from 'expo-font';
import { NavBar } from '../NavBar/NavBar'
import { ScrollView } from 'react-native-web';

export function PagProduto({route}) {
    const [fontsLoaded] = useFonts({
		'Raleway-Black': require('../../../assets/fonts/Raleway-Black.ttf'),
		'Raleway-Bold': require('../../../assets/fonts/Raleway-Bold.ttf'),
		'Raleway-Medium': require('../../../assets/fonts/Raleway-Medium.ttf'),
        'Raleway-Regular': require('../../../assets/fonts/Raleway-Regular.ttf'),
	});

    const { produto } = route.params;

    return (
        <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
            <View style={{position: 'fixed', zIndex: 1, width: '100%', height: 70, backgroundColor: '#FFFFFF'}}>
                <Text style={{ fontSize: 24, fontFamily: "Raleway-Bold", top: 23, textAlign: 'center' }}>{produto.nome}</Text>
            </View>
            <ScrollView>
                <View style={{flex: 1, marginTop: 70}}>
                    <Image
                        style={{width: "100%", height: 419.4}}
                        source={{
                        uri: produto.imageUrl,
                        }}
                    />
                    <View style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignContent: 'center', paddingHorizontal: 20, paddingTop: 12, paddingBottom: 120,}}>
                        <Text style={{fontSize: 30, fontFamily: 'Raleway-Medium', color: '#222222'}}>R$ {produto.preco}</Text>
                        <Text style={{fontSize: 14, fontFamily: 'Raleway-Regular', color: '#222222', marginTop: 10}}>{produto.descricao}</Text>
                    </View>
                </View>
            </ScrollView>
            <NavBar></NavBar>
        </View>
    )
}