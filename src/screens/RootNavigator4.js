import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useBreakpointValue, Text } from 'native-base';
import ListaPreciosHeader from './ListaPreciosHeader';
import ListaPreciosBody  from './ListaPreciosBody';
import ListaPreciosDrawer from './ListaPreciosDrawer';
import PedidoHeader from './PedidoHeader';
import PedidoBody  from './PedidoBody';
import PedidoDrawer from './PedidoDrawer';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      animation: 'none',
    }}>
      <Stack.Screen
        name="ListaPrecios"
        component={ListaPreciosBody}
        options={{
          header: (props) => <ListaPreciosHeader {...props} />
        }}
      />
      <Stack.Screen
        name="Pedido"
        component={PedidoBody}
        options={{
          header: (props) => <PedidoHeader {...props} />
        }}
      />
    </Stack.Navigator>
  );
}

const DrawerContent = () => {
  const currentScreen = useSelector(state => state.app.currentScreen);
  //const navigationState = useNavigationState(state => state.routes[state.index].name);

  return (
    <DrawerContentScrollView>
      {(currentScreen === 'ListaPrecios') && <ListaPreciosDrawer />}
      {(currentScreen === 'Pedido') && <PedidoDrawer />}
      {/* <Text>Prueba</Text> */}
    </DrawerContentScrollView>
  );
}

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: useBreakpointValue({
          base: 'front',
          md: 'permanent',
        }),
      }}
      drawerContent={() => <DrawerContent />}
    >
      <Drawer.Screen name="Drawer" component={MyStack} />
    </Drawer.Navigator>
  );
}

const RootNavigator4 = () => {
  return (
    <NavigationContainer linking={{ enabled: true }}>
      <MyDrawer />
    </NavigationContainer>
  );
}

export default RootNavigator4;
  