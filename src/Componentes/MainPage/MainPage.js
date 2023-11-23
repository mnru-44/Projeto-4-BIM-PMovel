import { View, ScrollView, Text } from 'react-native';
import { ScrollViewPerfumes } from '../ScrollViews/ScrollViewPerfumes';
import { ScrollViewHidratantes } from '../ScrollViews/ScrollViewHidratantes';
import { ScrollViewKits } from '../ScrollViews/ScrollViewKits';
import { useFonts } from 'expo-font';
import { NavBar } from '../NavBar/NavBar'

export function MainPage({navigation}) {
    const [fontsLoaded] = useFonts({
		'Raleway-Black': require('../../../assets/fonts/Raleway-Black.ttf'),
		'Raleway-Bold': require('../../../assets/fonts/Raleway-Bold.ttf'),
		'Raleway-Medium': require('../../../assets/fonts/Raleway-Medium.ttf'),
	});

    return (
        <View style={{backgroundColor: '#F9F9F9', flex: 1}}>
            <View style={{position: 'fixed', zIndex: 1, width: '100%', height: 150, backgroundColor: '#FFFFFF'}}>
            <Text style={{ fontSize: 24, fontFamily: "Raleway-Bold", top: 48, left: 20 }}>CM Cosméticos</Text>
				<Text style={{ fontSize: 34, fontFamily: "Raleway-Bold", top: 62, left: 20 }}>Página Inicial</Text>
            </View>
            <View style={{marginTop: 150, flex: 1}}>
                <ScrollView style={{height: 662, paddingBottom: 83, paddingTop: 15}}>
                    <Text style={{fontSize: 34, fontfamily: "Raleway-Bold", left: 20, marginBottom: 10, fontWeight: 'bold'}}>Perfumes</Text>
                    <ScrollViewPerfumes></ScrollViewPerfumes>
                    <Text style={{fontSize: 34, fontfamily: "Raleway-Bold", left: 20, marginBottom: 10, marginTop: 10, fontWeight: 'bold'}}>Hidratantes</Text>
                    <ScrollViewHidratantes></ScrollViewHidratantes>
                    <Text style={{fontSize: 34, fontfamily: "Raleway-Bold", left: 20, marginBottom: 10, marginTop: 10, fontWeight: 'bold'}}>Kits</Text>
                    <ScrollViewKits></ScrollViewKits>
                </ScrollView>
            </View>
            <NavBar></NavBar>
        </View>
    )
}