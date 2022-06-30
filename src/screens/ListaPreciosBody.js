import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentScreen } from '../redux/appSlice';
import { fetchListaPrecios } from '../redux/listaPreciosSlice';
import { FlatList, Box, Text, HStack, ZStack, Flex, /*Image,*/ useBreakpointValue } from 'native-base';
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';
import { Dimensions, Platform, Image } from 'react-native';
import CachedImage from 'react-native-expo-cached-image';

const ListaPreciosBody = ({ navigation }) => {
  const dispatch = useDispatch();

  const productos = useSelector(state => state.listaPrecios.productos);
  const productosIndex = useSelector(state => state.listaPrecios.productosIndex);
  const listaPreciosOrden = useSelector(state => state.listaPrecios.orden);
  const listaPreciosStatus = useSelector(state => state.listaPrecios.status);

  //const flatListRef = React.useRef(null);

  const isDrawerPermanent = useBreakpointValue({
    base: 0,
    md: 1,
  });

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(updateCurrentScreen('ListaPrecios'));
    });

    return unsubscribe;
  }, [navigation]);

  React.useEffect(() => {
    if (listaPreciosStatus === 'idle' && productos.length === 0) {
      dispatch(fetchListaPrecios());
    }
  }, [listaPreciosStatus]);

  // React.useEffect(() => {
  //   flatListRef.current.scrollToIndex({animated: false, index: 0});
  // }, [listaPreciosOrden]);

  const renderItem = React.useCallback(
    ({ item }) => (
      <HStack borderBottomWidth={1} borderColor="coolGray.200" p={2} alignItems="center">
        <Box><Text>{productos[productosIndex[item]].codigo}</Text></Box>
        <Box><Text>{productos[productosIndex[item]].descripcion}</Text></Box>
      </HStack>
    ), [productos]
  );

  const keyExtractor = React.useCallback(
    (item) => item.toString(), [productos]
  );


  const getDefaultDrawerWidth = ({
    height,
    width,
  }) => {
    /*
     * Default drawer width is screen width - header height
     * with a max width of 280 on mobile and 320 on tablet
     * https://material.io/components/navigation-drawer
     */
    const smallerAxisSize = Math.min(height, width);
    const isLandscape = width > height;
    const isTablet = smallerAxisSize >= 600;
    const appBarHeight = Platform.OS === 'ios' ? (isLandscape ? 32 : 44) : 56;
    const maxWidth = isTablet ? 320 : 280;
  
    return Math.min(smallerAxisSize - appBarHeight, maxWidth);
  };
  
  const [dataProvider, setDataProvider] = React.useState(
    new DataProvider((r1, r2) => {
      return r1 !== r2;
    })
  );

  const [layoutProvider] = React.useState(
    new LayoutProvider(
      (index) => 1,
      (type, dim) => {
        const window = Dimensions.get('window');
        dim.width = window.width - (getDefaultDrawerWidth(window) * isDrawerPermanent); //300;
        dim.height = 64;
      }
    )
  );
  
  React.useEffect(() => {
    setDataProvider((prevState) => prevState.cloneWithRows(productosIndex[listaPreciosOrden]));
  }, [productos, listaPreciosOrden]);

  const rowRenderer = (type, data, index) => {
    // console.log(index);
    return (
      // <Box borderBottomWidth={1} borderColor="coolGray.900" p={0} height={16} bgColor="secondary.500">
      //   <Text>{productos[data].codigo} - {productos[data].descripcion}</Text>
      // </Box>

      // <HStack borderBottomWidth={1} borderColor="coolGray.200" p={2}>
      //   <HStack><Text>{productos[data].codigo}</Text></HStack>
      //   <HStack><Text>{productos[data].descripcion}</Text></HStack>
      // </HStack>

      // <Flex direction="row" flexGrow="1" flexShrink="0">
      //   <Box width="50%">Hola</Box>
      // </Flex>

      <HStack flexGrow="1">
        {(productos[data].imagenes[0] !== null) &&
          <HStack>
            {productos[data].imagenes.map((elem, idx) =>
              (elem !== null) &&
                // <Image
                //   source={{ uri: 'https://d3rz0a3s98rngc.cloudfront.net/uploads/' + elem }}
                //   size="sm"
                //   key={productos[data].codigo + '_' + idx}
                //   alt="Nada"
                // />
                <Image
                  source={{ uri: `https://d3rz0a3s98rngc.cloudfront.net/uploads/${elem}` }}
                  //size="sm"
                  key={productos[data].codigo + '_' + idx}
                  cacheKey={productos[data].codigo + '_' + idx}
                  //alt="Nada"
                  style={{
                    resizeMode: "contain",
                    height: 100,
                    width: 200
                  }}
                />
              )}
          </HStack>}
        <Text>{productos[data].codigo}</Text>
        <Text>{productos[data].descripcion}</Text>
      </HStack>
    );
  };

  return (
    // <Text>Lista de Precios - Body</Text>
    
    // (listaPreciosStatus === 'succeeded') &&
    // <FlatList ref={flatListRef}
    //   data={productosIndex[listaPreciosOrden]}
    //   renderItem={renderItem}
    //   keyExtractor={keyExtractor}
    // />

    // ((listaPreciosOrden === 'codigo') &&
    // <FlatList
    //   data={productosIndex[listaPreciosOrden]}
    //   renderItem={renderItem}
    //   keyExtractor={keyExtractor}
    // />)

    // ||

    // ((listaPreciosOrden === 'descripcion') &&
    // <FlatList
    //   data={productosIndex[listaPreciosOrden]}
    //   renderItem={renderItem}
    //   keyExtractor={keyExtractor}
    // />)

    (productos.length > 0) && <RecyclerListView
      rowRenderer={rowRenderer}
      dataProvider={dataProvider}
      layoutProvider={layoutProvider}
      //forceNonDeterministicRendering={true}
      //canChangeSize={true}
      //useWindowScroll={true}
    />

    // <Text>{productosIndex['codigo'].length} - {productosIndex['descripcion'].length} - {productos.length} - {listaPreciosOrden} - {(productosIndex['codigo'].length > 0) ? productosIndex['codigo'][0].codigo : 'none'} - {(productosIndex['codigo'].length > 0) ? JSON.stringify(productosIndex['codigo'][0]) : 'none'} - {(productos.length > 0) ? productos[productosIndex[listaPreciosOrden][0]].codigo : 'none'}</Text>

    // ((listaPreciosOrden === 'codigo') &&
    // <FlatList
    //   data={productosIndex['codigo']}
    //   renderItem={renderItem}
    //   keyExtractor={keyExtractor}
    // />)

    // ||

    // ((listaPreciosOrden === 'descripcion') &&
    // <FlatList
    //   data={productosIndex['descripcion']}
    //   renderItem={renderItem}
    //   keyExtractor={keyExtractor}
    // />)

    // <Text>{productos[productosIndex[listaPreciosOrden][0]].codigo} - {productos[productosIndex[listaPreciosOrden][0]].descripcion}</Text>
  );
}

export default ListaPreciosBody;
