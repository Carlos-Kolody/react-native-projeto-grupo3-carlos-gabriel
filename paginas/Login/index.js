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

export default function Login({ navigation }) {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [verSenha, setVerSenha] = useState(true);

  return (
    <SafeAreaView style={estilos.safeArea}>
      {}
      {}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={estilos.container}>
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
            <Text style={estilos.titulo}>Já tem conta? Faça seu login:</Text>

            <TextInput
              style={estilos.input}
              placeholder="Digite seu nome completo"
              value={nome}
              onChangeText={setNome}
            />
            <View style={estilos.senhaContainer}>
              <TextInput
                style={estilos.inputSenha}
                placeholder="Digite sua senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={verSenha}
              />
              <TouchableOpacity
                onPress={() => setVerSenha(!verSenha)}
                style={estilos.verSenhaIcone}>
                <Text>👁️</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <Text style={estilos.linkEsqueciSenha}>
                Esqueci minha senha.
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilos.botao}>
              <Text style={estilos.textoBotao}>Entrar</Text>
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
    width: '90%',
    height: 300,
    resizeMode: 'cover',
    alignSelf: 'flex-start',
  },
  patasImage: {
    position: 'absolute',
    top: 0,
    right: -30,
    width: 200,
    height: 200,
    resizeMode: 'contain',
    margin: 0,
    padding: 0,
  },
  logo: {
    width: 160,
    height: 56,
    resizeMode: 'contain',
    marginTop: -110,
    marginBottom: 8,
  },
  formContainer: {
    width: '80%',
    marginTop: 20,
  },
  titulo: {
    fontSize: 16,
    color: '#3772FF',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    marginBottom: 16,
    width: '100%',
  },
  senhaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    marginBottom: 16,
    width: '100%',
  },
  inputSenha: {
    flex: 1,
    padding: 14,
    fontSize: 16,
  },
  verSenhaIcone: {
    padding: 14,
  },
  linkEsqueciSenha: {
    color: '#FC7071',
    textAlign: 'center',
    marginBottom: 24,
  },
  botao: {
    backgroundColor: '#FC7071',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});