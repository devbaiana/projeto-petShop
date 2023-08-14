import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import PostForm from './PostFormulario';
import { createPost} from './OperacoesApi';

const TelaCadastro = ({navigation}) => {
  const postarGatoApi = async (postData) => {
     try {
       const newPost = await createPost(postData);
       console.log('Nova postagem enviada:', newPost);
       navigation.goBack(); 
     } catch (error) {
       console.error('Erro ao enviar postagem:', error);
     }
   };

  return (
    <View style={styles.container}>
      <PostForm onSubmit={postarGatoApi} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BEADFA',
  },
});

export default TelaCadastro;