import React from 'react';
import { Platform } from 'react-native';
import { Box, Text, HStack, VStack, IconButton, Icon, Input } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

const MORE_ICON = Platform.OS === 'ios' ? 'more-horiz' : 'more-vert';

const ListaPreciosScreen4 = ({ navigation }) => {
  return (
    // <HStack backgroundColor="primary.500" p="1">
    //   <Input placeholder="Búsqueda"
    //     InputLeftElement={
    //       <Icon
    //         as={<MaterialIcons name="search" />}
    //         size={5}
    //         ml="2"
    //         color="muted.400"
    //       />
    //     }
    //     InputRightElement={
    //       <Icon
    //         as={<MaterialIcons name="clear" />}
    //         size={5}
    //         mr="2"
    //         color="muted.400"
    //       />
    //     }
    //   />
    //   <IconButton
    //     icon={<Icon size="md" as={<MaterialIcons name="shopping-cart" />} />}
    //     size="sm"
    //     onPress={() => navigation.navigate('Pedido')}
    //   />
    // </HStack>

    <Text>Lista de Precios</Text>

    // <Box safeAreaTop>

    //   <HStack bg="primary.600" px="1" py="1" justifyContent="space-between" alignItems="center">
    //     <HStack space="4" alignItems="center">
    //       {/* <IconButton icon={<Icon as={MaterialIcons} name="menu" size="sm" color="white" />} /> */}
    //       <VStack px="1" py="1">
    //         <Text color="white" fontSize="lg" fontWeight="bold">Guidoli-Florio S.R.L.</Text>
    //         <Text color="white" fontSize="sm" fontWeight="normal">Lista válida desde 01/01/2021</Text>
    //       </VStack>
    //     </HStack>
    //     <HStack space="2">
    //       {/* <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="white" />} /> */}
    //       <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} />
    //       <IconButton icon={<Icon as={MaterialIcons} name={MORE_ICON} size="sm" color="white" />} />
    //     </HStack>
    //   </HStack>

    //   <Text>Lista de Precios</Text>
    // </Box>
  );
};

export default ListaPreciosScreen4;
