import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';


import axios from 'axios';

const TelaLista = ({navigation}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://192.168.1.78:8080/mostrar');
      setItems(response.data);
    } catch (error) {
      console.error('Erro ao obter lista de itens:', error);
    }
  };

  const renderListItem = ({ item }) => (
    
    <View style={styles.itemContainer}>
     <View>
      
          </View>
          <View>
      <Text style={styles.itemText}>Nome: {item.nome}</Text>
      <Text style={styles.itemText}>Cor: {item.cor}</Text>
      <Text style={styles.itemText}>Raça: {item.raca}</Text>
      <Text style={styles.itemText}>Idade: {item.idade}</Text>
            
      </View>
      <View>
      <TouchableOpacity onPress={() => EditarItem(item)}>
      <Image
          source={require('C:/Users/014320631/petShop/src/icone-lapis.png')}
          style={styles.icones}
          /> 
          </TouchableOpacity>
          <TouchableOpacity onPress={() => DeletarItem(item)}>
          <Image
          source={require('C:/Users/014320631/petShop/src/icone-lixo.png')}
          style={styles.icones}
          /> 
          </TouchableOpacity>
           </View>
    </View>
    
  );

  const EditarItem = (item) => {
    navigation.navigate('PaginaEdit', { item });
  };

  const DeletarItem = async (item) => {
    try {
      const response = await axios.delete(`http://192.168.1.78:8080/deletar/${item.id}`); 
      if (response.status === 200) {
        Alert.alert('Sucesso', 'Item excluído com sucesso');
        fetchItems(); // Atualiza a lista após a exclusão
      } else {
        Alert.alert('Erro', 'Erro ao excluir o item');
      }
    } catch (error) {
      console.error('Erro ao excluir o item:', error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderListItem}
      />
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BEADFA',
  },
   icones:{
    width: 20,
    height: 20,
    margin: 8,
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
   },
   
   iconeView:{
    flexDirection: 'column',
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
   },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    marginTop: 10,
    backgroundColor: '#FFF3DA',
    borderRadius: 8,
    shadowColor: '#BEADFA',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemText: {
    fontSize: 20,
    color: '#dd7b22',
    marginBottom: 6,
    backgroundColor: '#FFF3DA',
    borderRadius: 2,
    borderColor: '#dd7b22',
  },
});

export default TelaLista;