import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image } from 'react-native'; 


const telaPrincipal = ({ navigation }) => {
    return (
      <View style={styles.viewPrincipal}>
        <Image
          source={require('C:/Users/014320631/petShop/src/Springcat.jpg')}
          style={styles.img}
          /> 
        <View style={styles.viewBotao}>
        <TouchableOpacity style={styles.botoes}
        onPress={() => navigation.navigate('TelaCadastro')}>
          <Text style={styles.textoBotao}>Cadastrar novo gato</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.viewBotao}>
        <TouchableOpacity style={styles.botoes}
        onPress={() => navigation.navigate('TelaLista')}>
          <Text style={styles.textoBotao}>Listar Gatos</Text>
        </TouchableOpacity>
        </View>
      </View>
      );
  }


const styles = StyleSheet.create({
  viewPrincipal:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BEADFA',
  },
  img:{
    width: 250,
    height: 250,
  },
  botoes:{
    marginTop: 20,
    backgroundColor: '#FFF3DA',
    width: 230, 
    height:50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 20,
  },
  viewBotao:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotao:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
    textAlign: 'center',
    alignItems: 'center',
    padding: 12
  }
});
export default telaPrincipal;