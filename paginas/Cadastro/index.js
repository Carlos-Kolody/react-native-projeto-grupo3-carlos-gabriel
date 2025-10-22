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
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  return (
    <SafeAreaView style={estilos.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
      >
        <ScrollView
          contentContainerStyle={estilos.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={estilos.topWrapper}>
            <Image
              source={require('../../assets/Vector.png')}
              style={estilos.headerImage}
            />
            <Image
              source={require('../../assets/Patas.png')}
              style={estilos.patasImage}
            />
            <Image
              source={require('../../assets/Logo-azul.png')}
              style={estilos.logo}
            />
          </View>

          <View style={estilos.formContainer}>
            <Text style={estilos.titulo}>
              Ainda não tem cadastro?{'\n'}Então, antes de buscar seu melhor
              amigo, precisamos de alguns dados:
            </Text>

            <Text style={estilos.label}>Nome</Text>
            <TextInput
              style={estilos.input}
              placeholder="Digite seu nome completo"
              placeholderTextColor="#BFBFBF"
              value={nome}
              onChangeText={setNome}
            />

            <Text style={estilos.label}>Email</Text>
            <TextInput
              style={estilos.input}
              placeholder="Escolha seu melhor email"
              placeholderTextColor="#BFBFBF"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text style={estilos.label}>Senha</Text>
            <TextInput
              style={estilos.input}
              placeholder="Crie uma senha"
              placeholderTextColor="#BFBFBF"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
            />

            <Text style={estilos.label}>Confirme a senha</Text>
            <TextInput
              style={estilos.input}
              placeholder="Repita a senha criada acima"
              placeholderTextColor="#BFBFBF"
              value={confirmaSenha}
              onChangeText={setConfirmaSenha}
              secureTextEntry
            />

            <TouchableOpacity style={estilos.botao} activeOpacity={0.8}>
              <Text style={estilos.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 40,
  },
  topWrapper: {
    width: '100%',
    alignItems: 'center',
    marginBottom: -40,
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
    width: '86%',
    marginTop: 16,
    paddingTop: 12,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 14,
    color: '#3772FF',
    textAlign: 'center',
    marginBottom: 18,
    lineHeight: 20,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 8,
    marginBottom: 6,
    color: '#8A8A8A',
    fontSize: 13,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 15,
    marginBottom: 16,
    width: '100%',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  botao: {
    backgroundColor: '#FC7071',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
    width: '100%',
    ...Platform.select({
      ios: {
        shadowColor: '#FC7071',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
