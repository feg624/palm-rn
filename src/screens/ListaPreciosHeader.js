import React from 'react';
import { useBreakpointValue, HStack, Input, Icon, Badge, VStack, IconButton, HamburgerIcon } from 'native-base';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

const ListaPreciosHeader = (props) => {
  const menuVisible = useBreakpointValue({
    base: true,
    md: false,
  });

  const screenSize = useBreakpointValue({
    base: 'base',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
  });

  const currentScreen = useSelector(state => state.app.currentScreen);

  // const myRef = React.useRef({});

  // React.useEffect(() => {
  //   console.log('Effect');
  // });

  return (
    <HStack bgColor="primary.400" height="56px" maxHeight="56px">
      <Input
        placeholder="Búsqueda"
        size="lg"
        m="2"
        mr="1"
        value={screenSize}
        flexGrow="1"
        maxWidth={{
          base: '100%',
          md: '75%',
          lg: '50%',
        }}
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="search" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        InputRightElement={
          <HStack>
            <Icon
              as={<MaterialCommunityIcons name="eraser" />}
              size={5}
              mr="2"
              color="muted.800"
            />
            <Badge
              colorScheme="info"
              rounded="5px"
              variant="solid"
              mr="2"
              _text={{
                fontSize: 12,
              }}
            >4586</Badge>
          </HStack>
        }
      />
      {(currentScreen === 'ListaPrecios') && <VStack>
        <IconButton
          icon={<Icon size="md" as={<MaterialCommunityIcons name="cart-outline" />} />}
          // id="prueba"
          // isDisabled={true}
          // ref={myRef}
          onPress={() => {
            props.navigation.navigate('Pedido');

            // console.log(myRef);
            // //myRef.current.trigger('mouseleave');
            // var event = new MouseEvent('mouseover', {
            //   'view': window,
            //   'bubbles': true,
            //   'cancelable': true
            // });
            
            // myRef.current.dispatchEvent(event);

            // React.useEffect(() => {
            //   // myRef?.current.setNativeProps({
            //   //   style: styleObj,
            //   // })

            //   console.log(myRef);
            // }, [myRef]);

            // console.log(myRef.current);
          }}
        />
        <Badge
          colorScheme="coolGray"
          rounded="999px"
          variant="solid"
          position="absolute"
          top="1"
          mr="1"
          alignSelf="flex-end"
          _text={{
            fontSize: 10,
          }}
        >1</Badge>
      </VStack>}
      {menuVisible && <IconButton
        icon={<HamburgerIcon />}
        onPress={() => props.navigation.toggleDrawer()}
      />}
    </HStack>
  );
}

export default ListaPreciosHeader;
