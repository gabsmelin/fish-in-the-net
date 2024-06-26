import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/home/App.jsx';
import MapScreen from './pages/planejamentoPesca/App.jsx';
import SingIn from './pages/singIn/App.jsx';
import SingUp from './pages/singUp/App.jsx';
import Forgot from './pages/forgotPassword/App.jsx';
import AdicionarRegistros from './pages/addRegistros/App.jsx';
import VisaoRegistros from './pages/verRegistros/App.jsx';
import EncontrosEVendas from './pages/encontrosVendas/App.jsx';
import Ofertas from './pages/verOfertas/App.jsx';
import AddOferta from './pages/addOferta/App.jsx';
import Dashboards from './pages/dashboards/App.jsx';
import Ajuda from './pages/ajuda/App.jsx';
import Perfil from './pages/perfil/App.jsx';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SingIn">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="SingIn" component={SingIn} />
        <Stack.Screen name="SingUp" component={SingUp} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="AdicionarRegistros" component={AdicionarRegistros} />
        <Stack.Screen name="VisaoRegistros" component={VisaoRegistros} />
        <Stack.Screen name="EncontrosEVendas" component={EncontrosEVendas} />
        <Stack.Screen name="Ofertas" component={Ofertas} />
        <Stack.Screen name="AddOferta" component={AddOferta} />
        <Stack.Screen name="Dashboards" component={Dashboards} />
        <Stack.Screen name="Ajuda" component={Ajuda} />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}