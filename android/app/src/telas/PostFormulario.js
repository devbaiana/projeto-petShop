import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';


const postFormulario = ({ onSubmit }) => {

  <Image source={require('C:/Users/014320631/petShop/src/Springcat.jpg')}
  style={styles.img}/>
  
  const [nome, setNome] = useState('');
  const [cor, setCor] = useState('');
  const [raca, setRaca] = useState('');
  const [idade, setIdade] = useState('');
  
  const salvarGato = () => {
    onSubmit({ nome, cor, raca, idade });
    setNome('');
    setCor('');
    setRaca('');
    setIdade('');
  };
  
  return ( 
    <View style={styles.centro}>
<View><Image source={require('C:/Users/014320631/petShop/src/Springcat.jpg')}
  style={styles.img}/></View>
    <View style={styles.container}>
    


      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Cor"
        value={cor}
        onChangeText={setCor}
      />
      <TextInput
        style={styles.input}
        placeholder="Raça"
        value={raca}
        onChangeText={setRaca}
      />
      <TextInput
        style={styles.input}
        placeholder="Idade"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
      />
      
    </View>
    <TouchableOpacity onPress={salvarGato} style={styles.botao}>
            <View style={styles.viewBotao}>
              <Text style={styles.textoBotao}>Cadastrar</Text>
            </View>
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 20,
    backgroundColor: '#BEADFA',
    borderRadius: 8,
    width: 400,
  },
   centro: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    
   },
  img:{
    width: 250,
    height: 250,
    alignItems: 'center',
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderColor: '#dd7b22',
    backgroundColor: '#FFF3DA',
    borderWidth: 2,
    borderRadius: 4,
    fontSize:20,
  },
  botao:{
    width: 160, 
    height:50,
    borderWidth: 2,
    backgroundColor: '#FFF3DA',
    borderColor: '#dd7b22',
    borderRadius: 20,
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
    fontSize: 25,
    fontWeight: 'bold',
    color: '#BEADFA'
  },
});

export default postFormulario;