import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import axios from 'axios';

const PaginaEdit = ({ route, navigation }) => {
  const { item } = route.params;
  const [editedItem, setEditedItem] = useState(item);

  const EditarItem = async () => {
    try {
      await axios.patch(`http://192.168.1.78:8080/editar/${item.id}`, editedItem);
      navigation.goBack(); // Volte para a tela anterior após a edição
    } catch (error) {
      console.error('Erro ao editar o item:', error);
      // Trate o erro, se necessário
    }
  };

  return (
    <View style={styles.viewPrincipal}>
        <View style={styles.imagem}> 
        <Image
          source={require('C:/Users/014320631/petShop/src/Springcat.jpg')}
          style={styles.img}
          /> 
          </View>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={editedItem.nome}
        onChangeText={(text) => setEditedItem({ ...editedItem, nome: text })}
      />
      <TextInput
        style={styles.input}
        value={editedItem.cor}
        onChangeText={(text) => setEditedItem({ ...editedItem, cor: text })}
      />
      <TextInput
        style={styles.input}
        value={editedItem.raca}
        onChangeText={(text) => setEditedItem({ ...editedItem, raca: text })}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={editedItem.idade.toString()}
        onChangeText={(text) => setEditedItem({ ...editedItem, idade: text })}
      />
      <View style={styles.centralizar}>
      <TouchableOpacity onPress={EditarItem} style={styles.botao}>
            <View style={styles.viewBotao}>
              <Text style={styles.textoBotao}>Salvar</Text>
            </View>
          </TouchableOpacity>
          </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#BEADFA'
  },
  viewPrincipal:{
    flex: 2,
    backgroundColor: '#BEADFA',
  },
  imagem:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0,
  },
  img:{
    width: 250,
    height: 250,
  },
  input: {
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
    fontSize: 17,
    backgroundColor: '#FFF3DA'
  },
  botao:{
    width: 110, 
    height:50,
    marginTop: 20,
    borderWidth: 2,
    backgroundColor: '#FFF3DA',
    borderColor: '#dd7b22',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',

  },

  centralizar:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewBotao:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotao:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#BEADFA'
  },
});

export default PaginaEdit;