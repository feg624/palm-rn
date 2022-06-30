import React from 'react';
import { useBreakpointValue, HStack, IconButton, ArrowBackIcon, ChevronLeftIcon, HamburgerIcon } from 'native-base';

const PedidoHeader = (props) => {
  const menuVisible = useBreakpointValue({
    base: true,
    md: false,
  });

  return (
    <HStack bgColor="primary.400" height="56px" maxHeight="56px">
      <HStack flexGrow="1">
        <IconButton
          icon={<ArrowBackIcon/>}
          _ios={{
            icon: <ChevronLeftIcon/>
          }}
          onPress={() => {
            if (props.navigation.canGoBack()) {
              props.navigation.goBack();
            }
            else {
              props.navigation.replace('ListaPrecios');
            }
          }}
        />
      </HStack>
      {menuVisible && <IconButton
        icon={<HamburgerIcon/>}
        onPress={() => props.navigation.toggleDrawer()}
      />}
    </HStack>
  );
}

export default PedidoHeader;
