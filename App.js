import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import Rotas from './rotas/navigation'; 
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    
    <NavigationContainer>
      <Rotas />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}