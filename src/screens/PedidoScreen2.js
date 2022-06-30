import React from 'react';
import { Box, HStack, Icon, IconButton, Text } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

const PedidoScreen2 = ({ navigation }) => {
  return (
    <Text>Pedido</Text>
    // <Box safeAreaTop>
    //   <HStack backgroundColor="primary.500" p="1">
    //     <IconButton
    //       icon={<Icon size="md" as={<MaterialIcons name="shopping-cart" />} />}
    //       size="sm"
    //       onPress={() => navigation.goBack()}
    //     />
    //   </HStack>
    //   <Text>Pedido</Text>
    // </Box>
  );
};

export default PedidoScreen2;
