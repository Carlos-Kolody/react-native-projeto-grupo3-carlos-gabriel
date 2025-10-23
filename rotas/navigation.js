import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../paginas/Login';
import Cadastro from '../paginas/Cadastro';

const Stack = createNativeStackNavigator();

export default function Rotas() {
  return (
    
    <Stack.Navigator initialRouteName="Login"> 
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Cadastro" 
        component={Cadastro} 
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
