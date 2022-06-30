import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Platform } from 'react-native';
import { Appbar, Searchbar, List, Badge, IconButton } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { fetchListaPrecios } from '../redux/listaPreciosSlice';
import { CombinedDefaultTheme } from '../util/themes';
import { Size } from '../util/windowSizes';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const ListaPreciosScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const productos = useSelector(state => state.listaPrecios.productos);
  // const productosPorCodigo = useSelector(state => state.listaPrecios.productosPorCodigo);
  // const productosPorDescripcion = useSelector(state => state.listaPrecios.productosPorDescripcion);
  const productosIndex = useSelector(state => state.listaPrecios.productosIndex);
  const listaPreciosOrden = useSelector(state => state.listaPrecios.orden);
  const listaPreciosStatus = useSelector(state => state.listaPrecios.status);
  const windowSize = useSelector(state => state.windowDimension.size);

  useEffect(() => {
    if (listaPreciosStatus === 'idle' && productos.length === 0) {
      dispatch(fetchListaPrecios());
    }
  }, [listaPreciosStatus, dispatch]);

  // const renderItem = ({ item }) => (
  //   <List.Item title={item.descripcion} />
  // );

  const renderItem = ({ item }) => (
    <List.Item title={productos[item].descripcion} />
  );
  
  const [showSearch, setShowSearch] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Appbar.Header>
        {(windowSize > Size.SM) &&
        <Appbar.Content title='Guidoli-Florio S.R.L.' subtitle='Lista Válida desde 01/01/2021' style={{ flexGrow: 0, flexShrink: 1, flexBasis: 'auto' }} />
        }
        
        {(windowSize > Size.SM) &&
        <View style={{ paddingRight: 4 + (productos.length.toString().length * 4), flex: 1, maxWidth: '50%' }}>
          <Searchbar icon={null} clearIcon='eraser' placeholder='Filtrar' value={listaPreciosStatus} />
          <Badge style={styles.badge} size={22}>{productos.length}</Badge>
        </View>
        }
        
        {(windowSize <= Size.SM) &&
        <Appbar.Content title='Guidoli-Florio S.R.L.' subtitle='Lista Válida desde 01/01/2021' />
        // &&
        // <View style={{ flexBasis: 'auto', flexDirection: 'column', flexShrink: 0, position: 'relative' }}>
        //   <Appbar.Action icon='magnify' style={{ marginRight: 6 + (productos.length.toString().length * 4) }} color={CombinedDefaultTheme.colors.surface} onPress={() => {setShowSearch(!showSearch)}} />
        //   <Badge style={styles.badge} size={22}>{productos.length}</Badge>
        // </View>}
        }

        {(windowSize <= Size.SM) &&
        <Appbar.Action icon='magnify' onPress={() => {setShowSearch(!showSearch)}} />
        }

        {(windowSize <= Size.SM) &&
        <View>
          <Badge style={styles.badge} size={22}>{productos.length}</Badge>
          <Appbar.Action icon={MORE_ICON} color={CombinedDefaultTheme.colors.surface} onPress={() => {navigation.toggleDrawer()}} />
        </View>
        }
        
        {/* {(windowSize <= Size.SM) &&
        <View style={{ display: 'flex', flexBasis: 'auto', flexDirection: 'column', flexShrink: 0, position: 'relative' }}>
          <Appbar.Action icon='magnify' style={{ marginRight: 6 + (productos.length.toString().length * 4) }} color={CombinedDefaultTheme.colors.surface} onPress={() => {setShowSearch(!showSearch)}} />
          <Badge style={styles.badge} size={22}>{productos.length}</Badge>
        </View>} */}
      </Appbar.Header>
      {(showSearch) && <Searchbar icon='arrow-collapse-up' clearIcon='eraser' placeholder='Filtrar' value={listaPreciosStatus} onIconPress={() => {setShowSearch(false)}} />}
      <View style={styles.container}>
        {/* {(orden === 'codigo') &&
        <FlatList
          data={productosPorCodigo}
          renderItem={renderItem}
          keyExtractor={item => item.toString()}
        />}
        
        {(orden === 'descripcion') &&
        <FlatList
          data={productosPorDescripcion}
          renderItem={renderItem}
          keyExtractor={item => item.toString()}
        />} */}

        <FlatList
          data={productosIndex[listaPreciosOrden]}
          renderItem={renderItem}
          keyExtractor={item => item.toString()}
        />
      </View>
    </SafeAreaView>

    /* {productos2.map((item, idx) => <List.Item title={item.descripcion} id={idx} />)} */

    /* <Text>{productos.length}</Text> */
    /*error ? (
      <Text>Oh no, there was an error</Text>
    ) : isLoading ? (
      <Text>Loading...</Text>
    ) : data ? (
      <Text>{data.productos.length}</Text>
    ) : null*/
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  container: {
    flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
  },
  badge: {
    position: 'absolute',
    top: 4,
    right: 0 /*32*/,
  },
});

export default ListaPreciosScreen;
