import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  return (
    <SafeAreaView style={estilos.safeArea}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={estilos.container}>
          {}
          <Image
            source={require('../../assets/Vector.png')}
            style={estilos.headerImage}
          />
          {}
          <Image
            source={require('../../assets/Patas.png')}
            style={estilos.patasImage}
          />
          {}

          <Image
            source={require('../../assets/Logo-azul.png')}
            style={estilos.logo}
          />

          <View style={estilos.formContainer}>
            <Text style={estilos.titulo}>
              Ainda não tem cadastro? {'\n'}Então, antes de buscar seu melhor
              amigo, precisamos de alguns dados:
            </Text>

            <TextInput
              style={estilos.input}
              placeholder="Digite seu nome completo"
              value={nome}
              onChangeText={setNome}
            />
            <TextInput
              style={estilos.input}
              placeholder="Escolha seu melhor email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <TextInput
              style={estilos.input}
              placeholder="Crie uma senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
            />
            <TextInput
              style={estilos.input}
              placeholder="Repita a senha criada acima"
              value={confirmaSenha}
              onChangeText={setConfirmaSenha}
              secureTextEntry
            />

            <TouchableOpacity style={estilos.botao}>
              <Text style={estilos.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
   
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerImage: {
    width: '100%',
    height: 150,
    
    resizeMode: 'stretch',
  },

  patasImage: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 100,
    height: 100, 
    resizeMode: 'contain',
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
    marginTop: -100,
    marginBottom: 20,
  },
  formContainer: {
    width: '80%',
    marginTop: 20,
    paddingBottom: 20,
  },
  titulo: {
    fontSize: 16,
    color: '#3772FF',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  input: {
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    marginBottom: 16,
    width: '100%',
  },
  botao: {
    backgroundColor: '#FC7071',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});