import { TouchableOpacity, Text } from "react-native";

export function BotaoAdd({ onPress }) {
    return (
        <TouchableOpacity style={{zIndex: 1, position: 'absolute', bottom: 100, right: 20, height: 30, backgroundColor: '#db3030', borderRadius: 10, paddingHorizontal: 10, paddingBottom: 6, alignItems: 'center', justifyContent: 'center', shadowColor: "rgba(211, 38, 38, 0.25)", shadowOffset: {width: 0, height: 4}, shadowRadius: 8, elevation: 8, shadowOpacity: 1}} onPress={onPress}>
            <Text style={{fontSize: 14, color: '#FFF', fontWeight: '500',}}>
                + Adicionar Produto
            </Text>
        </TouchableOpacity>
    )
}