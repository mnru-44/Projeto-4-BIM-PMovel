import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./src/Componentes/Login";
import { Cadastrar } from "./src/Componentes/CadastrarLogin";
import { MainPage } from "./src/Componentes/MainPage/MainPage.js";
import { Home } from "./src/Componentes/homePage/home.js";
import { Categorias } from "./src/Componentes/Categorias/Categorias.js";
import { Estoque } from "./src/Componentes/Estoque/Estoque.js";
import { TelaSenha } from "./src/Componentes/TelaSenha/TelaSenha.js";
import { ScrollViewOboticario } from "./src/Componentes/ScrollViews/ScrollViewOboticario";
import { ScrollViewEudora } from "./src/Componentes/ScrollViews/ScrollViewEudora";
import { ScrollViewNatura } from "./src/Componentes/ScrollViews/ScrollViewNatura";
import { Perfil } from "./src/Componentes/Perfil/Perfil";
import { PagProduto } from "./src/Componentes/PagProduto/PagProduto.js";
import { AddProduto } from "./src/Componentes/AddProduto/AddProduto.js";

export function Rotas() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
                <Stack.Screen name='Login' component={Login} options={{ title: '' }} />
                <Stack.Screen name='Cadastrar' component={Cadastrar} options={{ headerShown: false }} />
                <Stack.Screen name='MainPage' component={MainPage} options={{ headerShown: false }} />
                <Stack.Screen name='PagProduto' component={PagProduto} options={{ title: 'CM Cosméticos' }} />
                <Stack.Screen name='Categorias' component={Categorias} options={{ headerShown: false }} />
                <Stack.Screen name='Eudora' component={ScrollViewEudora} options={{ title: '' }} />
                <Stack.Screen name='Natura' component={ScrollViewNatura} options={{ title: '' }} />
                <Stack.Screen name='OBoticário' component={ScrollViewOboticario} options={{ title: '' }} />
                <Stack.Screen name='Estoque' component={Estoque} />
                <Stack.Screen name='AddProduto' component={AddProduto} />
                <Stack.Screen name='Perfil' component={Perfil} options={{ headerShown: false }} />
                <Stack.Screen name='Senha' component={TelaSenha} options={{ title: 'Controle de Estoque' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}