import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ordenarPor } from '../redux/listaPreciosSlice';
import { Heading, Text, Image, Container, Center, VStack, HStack, Button, Switch, Checkbox } from 'native-base';

const ListaPreciosDrawer = () => {
  const dispatch = useDispatch();
  const listaPreciosOrden = useSelector(state => state.listaPrecios.orden);

  //const [listaPreciosOrden2, ordenarPor2] = React.useState('codigo');

  return (
    <VStack>
      <HStack>
        <Image source={{
          uri: 'https://guidoliflorio.com.ar/wp-content/uploads/2020/05/Logo-Guidoli-Florio-400x200-min.png',
        }} size="xl" flexGrow="1" alt="Guidoli-Florio S.R.L." />
      </HStack>
      <HStack m={2} alignItems="center">
        <Heading size="xs" width="40%">Ordenar por</Heading>
        <Button.Group isAttached={true} size="sm" width="60%">
          <Button width="50%" p={1} onPress={() => dispatch(ordenarPor('codigo'))} variant={listaPreciosOrden === 'codigo' ? 'solid' : 'outline'}>Código</Button>
          <Button width="50%" p={1} onPress={() => dispatch(ordenarPor('descripcion'))} variant={listaPreciosOrden === 'descripcion' ? 'solid' : 'outline'}>Descripción</Button>
        </Button.Group>
      </HStack>
      <HStack m={2} alignItems="center">
        <Heading size="xs" width="40%">Acción</Heading>
        <Button.Group isAttached={true} size="sm" width="60%">
          <Button width="50%" p={1}>Buscar</Button>
          <Button width="50%" p={1} variant="outline">Filtrar</Button>
        </Button.Group>
      </HStack>
      <HStack m={2} alignItems="center" space={4}>
        <Heading size="xs">Filtrar Productos</Heading>
        <Switch size="md"/>
      </HStack>
      <Checkbox my={2} mx={8} _text={{fontSize: 'sm'}}>Nuevos</Checkbox>
      <Checkbox my={2} mx={8} _text={{fontSize: 'sm'}}>Modificados</Checkbox>
    </VStack>
  );
}

export default ListaPreciosDrawer;
