import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F9F9F9',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    title:{
        fontSize: 40, 
        fontWeight: 600, 
        color: '#141414'
    },
    input: {
        backgroundColor: '#FFF',
        height: 64,
        width: "90%",
        paddingHorizontal: 10,
        marginTop: 10,
        borderRadius: 4,
        shadowColor: "rgba(0, 0, 0, 0.06)",
        shadowOffset: {
        width: 0,
        height: 1
        },
        shadowRadius: 8,
        elevation: 8,
        shadowOpacity: 1,
    },
    botao: {
        backgroundColor: "#db3022", 
        width: "90%", 
        paddingHorizontal: 10,
        height: "48px", 
        borderRadius: 25, 
        shadowColor: "rgba(211, 38, 38, 0.25)", 
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 8,
        elevation: 8,
        shadowOpacity: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    textoButton: {
        fontSize: 14,
        color: '#FFF',
        fontWeight: '500', 
    },
    buttonfile: {
        backgroundColor: "#db3022", 
        width: '200px', 
        paddingHorizontal: "20px",
        height: "38px", 
        borderRadius: 15, 
        shadowColor: "rgba(211, 38, 38, 0.25)", 
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 8,
        elevation: 8,
        shadowOpacity: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    }

})