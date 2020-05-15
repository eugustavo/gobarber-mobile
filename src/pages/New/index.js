import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import SelectProvider from './SelectProvider';
import SelectDateTime from './SelectDateTime';
import Confirm from './Confirm';

// import { Container } from './styles';

const Stack = createStackNavigator();

const New = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="SelectProvider"
        component={SelectProvider}
        options={{
          title: 'Selecione o prestador',
          headerTitleAlign: 'center',
          headerTintColor: '#FFF',
          headerLeftContainerStyle: { marginLeft: 20 },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
              <Icon name="chevron-left" size={26} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="SelectDateTime"
        component={SelectDateTime}
        options={{
          title: 'Selecione o horário',
          headerTitleAlign: 'center',
          headerTintColor: '#FFF',
          headerLeftContainerStyle: { marginLeft: 20 },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('SelectProvider')}
            >
              <Icon name="chevron-left" size={26} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="Confirm"
        component={Confirm}
        options={{
          title: 'Confirmar Agendamento',
          headerTitleAlign: 'center',
          headerTintColor: '#FFF',
          headerLeftContainerStyle: { marginLeft: 20 },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('SelectDateTime')}
            >
              <Icon name="chevron-left" size={26} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default New;
