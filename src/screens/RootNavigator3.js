import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator /*, DrawerContentScrollView, DrawerItemList, DrawerItem*/ } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { /*Center, HStack, Icon, Pressable, Text,*/ useBreakpointValue } from 'native-base';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListaPreciosScreen2 from './ListaPreciosScreen2';
import PedidoScreen2 from './PedidoScreen2';

// function MyTabBar({ state, descriptors, navigation }) {
//   return (
//     <View style={{ flexDirection: 'row' }}>
//       {state.routes.map((route, index) => {
//         const { options } = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };

//         return (
//           <TouchableOpacity
//             accessibilityRole="button"
//             accessibilityState={isFocused ? { selected: true } : {}}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={{ flex: 1 }}
//           >
//             <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
//               {label}
//             </Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// }

// function MyTabBar({ state, descriptors, navigation }) {
//   return (
//     <HStack bg="primary.600" alignItems="center" shadow={6}>
//       <Pressable
//         cursor="pointer"
//         opacity={state.index === 0 ? 1 : 0.5}
//         py="2"
//         flex={1}
//         onPress={() => navigation.navigate('ListaPrecios')}
//       >
//         <Center>
//           <Icon
//             mb="0"
//             as={
//               <MaterialCommunityIcons
//                 name={state.index === 0 ? 'view-list' : 'view-list-outline'}
//               />
//             }
//             color="white"
//             size="sm"
//           />
//           <Text color="white" fontSize="xs">Lista de Precios</Text>
//         </Center>
//       </Pressable>
//       <Pressable
//         cursor="pointer"
//         opacity={state.index === 1 ? 1 : 0.5}
//         py="2"
//         flex={1}
//         onPress={() => navigation.navigate('Pedido')}
//       >
//         <Center>
//           <Icon
//             mb="0"
//             as={
//               <MaterialCommunityIcons
//                 name={state.index === 1 ? 'cart' : 'cart-outline'}
//               />
//             }
//             color="white"
//             size="sm"
//           />
//           <Text color="white" fontSize="xs">Pedido</Text>
//         </Center>
//       </Pressable>
//     </HStack>
//   );
// }

//const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

const Drawer = createDrawerNavigator();

// const ListaPreciosDrawer = () => {
//   return (
//     <Drawer.Navigator 
//       screenOptions={{
//         headerShown: false,
//         //drawerType: (windowSize > Size.SM) ? 'permanent' : 'front',
//         drawerType: useBreakpointValue({
//           base: 'front',
//           md: 'permanent',
//         }),
//       }}
//     >
//       <Drawer.Screen name="Lista de Precios - Drawer" component={ListaPreciosScreen2} />
//     </Drawer.Navigator>
//   );
// }

const MyTab = () => {
  return (
    <Tab.Navigator tabBarPosition="bottom"
      screenOptions={{
        tabBarScrollEnabled: false,
        swipeEnabled: false
      }}
    >
      <Tab.Screen name="ListaPrecios" component={ListaPreciosScreen2} />
      <Tab.Screen name="Pedido" component={PedidoScreen2} />
    </Tab.Navigator>
  );
}

const ListaPreciosDrawer = () => {
  return (
    // <SafeAreaView style={{ flex: 1 }}>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          //drawerType: (windowSize > Size.SM) ? 'permanent' : 'front',
          drawerType: useBreakpointValue({
            base: 'front',
            md: 'permanent',
          }),
        }}
      >
        <Drawer.Screen name="Lista de Precios - Drawer" component={MyTab} />
      </Drawer.Navigator>
    // </SafeAreaView>
  );
}

// const RootNavigator2 = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={{
//           headerShown: false
//         }}
//         tabBar={(props) => <MyTabBar {...props} />}
//       >
//         <Tab.Screen name="ListaPrecios" component={ListaPreciosDrawer} />
//         <Tab.Screen name="Pedido" component={PedidoScreen2} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default RootNavigator2;

const RootNavigator3 = () => {
  return (
    // <SafeAreaProvider>
      <NavigationContainer>
        <ListaPreciosDrawer/>
      </NavigationContainer>
    // </SafeAreaProvider>
  );
}

export default RootNavigator3;
  