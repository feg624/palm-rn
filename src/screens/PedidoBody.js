import React from 'react';
import { Text } from 'native-base';
import { useDispatch } from 'react-redux';
import { updateCurrentScreen } from '../redux/appSlice';

const PedidoBody = ({ navigation }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(updateCurrentScreen('Pedido'));
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Text>Pedido - Body</Text>
  );
}

export default PedidoBody;
