import React from 'react';
import { Platform } from 'react-native';
import { Box, Text, HStack, VStack, IconButton, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

const MORE_ICON = Platform.OS === 'ios' ? 'more-horiz' : 'more-vert';

const ListaPreciosScreen2 = () => {
  return (
    <Box safeAreaTop>

      <HStack bg="primary.600" px="1" py="1" justifyContent="space-between" alignItems="center">
        <HStack space="4" alignItems="center">
          {/* <IconButton icon={<Icon as={MaterialIcons} name="menu" size="sm" color="white" />} /> */}
          <VStack px="1" py="1">
            <Text color="white" fontSize="lg" fontWeight="bold">Guidoli-Florio S.R.L.</Text>
            <Text color="white" fontSize="sm" fontWeight="normal">Lista válida desde 01/01/2021</Text>
          </VStack>
        </HStack>
        <HStack space="2">
          {/* <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="white" />} /> */}
          <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} />
          <IconButton icon={<Icon as={MaterialIcons} name={MORE_ICON} size="sm" color="white" />} />
        </HStack>
      </HStack>

      <Text>Lista de Precios</Text>
    </Box>
  );
};

export default ListaPreciosScreen2;
