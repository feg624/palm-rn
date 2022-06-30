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

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const ListaPreciosDrawerContent = (props) => {
  return (
    <DrawerContentScrollView>
      <ListaPreciosDrawer />
    </DrawerContentScrollView>
  );
}

const PedidoDrawerContent = (props) => {
  return (
    <DrawerContentScrollView>
      <PedidoDrawer />
    </DrawerContentScrollView>
  );
}

const ListaPreciosMyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: useBreakpointValue({
          base: 'front',
          md: 'permanent',
        }),
      }}
      drawerContent={(props) => <ListaPreciosDrawerContent />}
    >
      <Drawer.Screen
        name="ListaPrecios"
        component={ListaPreciosBody}
        // options={{
        //   header: (props) => <ListaPreciosHeader {...props} />
        // }}
        />
    </Drawer.Navigator>
  );
}

const PedidoMyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: useBreakpointValue({
          base: 'front',
          md: 'permanent',
        }),
      }}
      drawerContent={(props) => <PedidoDrawerContent />}
    >
      <Drawer.Screen
        name="Pedido"
        component={PedidoBody}
        // options={{
        //   header: (props) => <PedidoHeader {...props} />
        // }}
      />
    </Drawer.Navigator>
  );
}

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      animation: 'none',
    }}>
      <Stack.Screen
        name="ListaPreciosStack"
        component={ListaPreciosMyDrawer}
        // initialParams={{prueba: 1}}
        options={{
          header: (props) => <ListaPreciosHeader {...props} />
        }}
      />
      <Stack.Screen
        name="PedidoStack"
        component={PedidoMyDrawer}
        // initialParams={{prueba: 2}}
        options={{
          header: (props) => <PedidoHeader {...props} />
        }}
      />
    </Stack.Navigator>
  );
}

const RootNavigator5 = () => {
  return (
    <NavigationContainer linking={{ enabled: true }}>
      <MyStack />
    </NavigationContainer>
  );
}

export default RootNavigator5;
  