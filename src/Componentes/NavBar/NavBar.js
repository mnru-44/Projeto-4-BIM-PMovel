import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export function NavBar() {
    const navigation = useNavigation();
    return (
        <View>
            <View style={{position: 'absolute', bottom: 0, zIndex: 1, width: '100%', height: 83, backgroundColor: '#FFFFFF', borderTopLeftRadius: 12, borderTopRightRadius: 12, shadowColor: "rgba(0, 0, 0, 0.06)", shadowOffset: { width: 0, height: -4 }, shadowRadius: 20, elevation: 20, shadowOpacity: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                <TouchableOpacity style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 70, width: 'fit-content', alignItems: 'center'}} onPress={() => navigation.navigate('MainPage') }>
                   <Image source={require('../../../assets/home.svg')} style={{width: 30, height: 25, top: 15}}></Image>
                   <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 70, width: 'fit-content', alignItems: 'center'}} onPress={() => navigation.navigate('Categorias') }>
                   <Image source={require('../../../assets/categorias.svg')} style={{width: 23, height: 24, top: 15}}></Image>
                   <Text>Marcas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 70, width: 'fit-content', alignItems: 'center'}} onPress={() => navigation.navigate('Perfil') }>
                   <Image source={require('../../../assets/profile.svg')} style={{width: 23, height: 26, top: 15}}></Image>
                   <Text>Perfil</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}