import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaCadastro from './TelaCadastro.js';
import TelaLista from './TelaLista.js';
import TelaPrincipal from './TelaPrincipal.js';
import PaginaEdit from 'C:/Users/014320631/petShop/android/app/src/telas/PaginaEdit.js';


const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="telaPrincipal">
        <Stack.Screen
          name="TelaPrincipal"
          component={TelaPrincipal}
          options={{ title: '' }}
        />
        <Stack.Screen
          name="TelaCadastro"
          component={TelaCadastro}
          options={{ title: 'Adicione um MiauMigo' }}
        />
        <Stack.Screen
          name="TelaLista"
          component={TelaLista}
          options={{ title: 'Banco de gatos' }}
        />
        <Stack.Screen
          name="PaginaEdit"
          component={PaginaEdit}
          options={{ title: ' Edite seu gato ' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;