import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { CombinedDefaultTheme } from '../util/themes';
import ListaPreciosScreen from './ListaPreciosScreen';
import PedidoScreen from './PedidoScreen';
import { useSelector, useDispatch } from 'react-redux';
import useWindowDimensions from '../util/windowDimensionHook';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Size } from '../util/windowSizes';
import { ordenarPor } from '../redux/listaPreciosSlice';
import { Drawer as PaperDrawer, ToggleButton, RadioButton } from 'react-native-paper';
import { HStack, Pressable, Center, Icon, MaterialIcons } from 'native-base';

const CustomDrawerContent = (props) => {
  const dispatch = useDispatch();

  const orden = useSelector(state => state.listaPrecios.orden);

  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      {/* <DrawerItem
        label="Ordenar Por Codigo"
        onPress={() => dispatch(ordenarPor('codigo'))}
      />
      <DrawerItem
        label="Ordenar Por Descripcion"
        onPress={() => dispatch(ordenarPor('descripcion'))}
      />
      <PaperDrawer.Section title="Ordenar Por">
        <ToggleButton.Row onValueChange={value => dispatch(ordenarPor(value))}  value={orden}>
          <ToggleButton icon="sort-numeric-ascending" value="codigo" />
          <ToggleButton icon="sort-alphabetical-ascending" value="descripcion" />
        </ToggleButton.Row>
      </PaperDrawer.Section> */}

      <PaperDrawer.Section title="Ordenar Por">
        <RadioButton.Group onValueChange={value => dispatch(ordenarPor(value))} value={orden}>
          {/* <View>
            <Text>Código</Text>
            <RadioButton value="codigo" />
          </View>
          <View>
            <Text>Descripción</Text>
            <RadioButton value="descripcion" />
          </View> */}
          <RadioButton.Item label="Código" value="codigo" />
          <RadioButton.Item label="Descripción" value="descripcion" />
        </RadioButton.Group>
      </PaperDrawer.Section>

    </DrawerContentScrollView>
  );
}

const Tab = createBottomTabNavigator();
//const Tab = createMaterialBottomTabNavigator();

const Drawer = createDrawerNavigator();

const ListaPreciosDrawer = () => {
  const windowSize = useSelector(state => state.windowDimension.size);

  return (
    <Drawer.Navigator 
      screenOptions={{
        headerShown: false,
        drawerType: (windowSize > Size.SM) ? 'permanent' : 'front',
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Lista de Precios - Drawer" component={ListaPreciosScreen} />
    </Drawer.Navigator>
  );
}

const MyTabBar = ({ state, descriptors, navigation }) => {
  const [selected, setSelected] = React.useState(1);

  return (
    <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
      <Pressable
        cursor="pointer"
        opacity={selected === 0 ? 1 : 0.5}
        py="3"
        flex={1}
        onPress={() => setSelected(0)}>
        <Center>
          <Icon
            mb="1"
            as={
              <MaterialCommunityIcons
                name={selected === 0 ? 'home' : 'home-outline'}
              />
            }
            color="white"
            size="sm"
          />
          <Text color="white" fontSize="12">
            Home
          </Text>
        </Center>
      </Pressable>
      <Pressable
        cursor="pointer"
        opacity={selected === 1 ? 1 : 0.5}
        py="2"
        flex={1}
        onPress={() => setSelected(1)}
      >
        <Center>
          <Icon
            mb="1"
            as={<MaterialIcons name="search" />}
            color="white"
            size="sm"
          />
          <Text color="white" fontSize="12">
            Search
          </Text>
        </Center>
      </Pressable>
      <Pressable
        cursor="pointer"
        opacity={selected === 2 ? 1 : 0.6}
        py="2"
        flex={1}
        onPress={() => setSelected(2)}
      >
        <Center>
          <Icon
            mb={1}
            as={
              <MaterialCommunityIcons
                name={selected === 2 ? 'cart' : 'cart-outline'}
              />
            }
            color="white"
            size="sm"
          />
          <Text color="white" fontSize={12}>
            Cart
          </Text>
        </Center>
      </Pressable>
      <Pressable
        cursor="pointer"
        opacity={selected === 3 ? 1 : 0.5}
        py="2"
        flex={1}
        onPress={() => setSelected(3)}
      >
        <Center>
          <Icon
            mb={1}
            as={
              <MaterialCommunityIcons
                name={selected === 3 ? 'account' : 'account-outline'}
              />
            }
            color="white"
            size="sm"
          />
          <Text color="white" fontSize="12">
            Account
          </Text>
        </Center>
      </Pressable>
    </HStack>
  );
};

const RootNavigator = () => {
  // const productos = useSelector((state) => state.listaPrecios.productos);

  useWindowDimensions();

  return (
    <NavigationContainer theme={CombinedDefaultTheme}>
      <Tab.Navigator
        // screenOptions={{
        //   headerShown: false,
        //   tabBarHideOnKeyboard: true,
        //   tabBarLabelStyle: {
        //     fontSize: 14,
        //   },
        //   tabBarBadgeStyle: {
        //     fontSize: 10,
        //   },
        // }}
        tabBar={(props) => <MyTabBar {...props} />}
        >
        <Tab.Screen name='Lista de Precios' component={ListaPreciosDrawer}
          options={{
            tabBarLabel: 'Lista de Precios',
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons name='view-list' color={color} size={size} />
            // ),
            tabBarIcon: 'view-list',
            // tabBarBadge: productos.length,
          }}
        />
        <Tab.Screen name='Pedido' component={PedidoScreen}
          options={{
            tabBarLabel: 'Pedido',
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons name='cart-outline' color={color} size={size} />
            // ),
            tabBarIcon: 'cart-outline',
            // tabBarBadge: 2,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RootNavigator;
