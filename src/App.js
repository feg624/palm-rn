import * as React from 'react';
import { LogBox } from 'react-native';
import 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Provider as PaperProvider } from 'react-native-paper';
import { CombinedDefaultTheme } from './util/themes';
import { Provider as StoreProvider } from 'react-redux';
import { store, persistor } from './redux/store';
// import RootNavigator from './screens/RootNavigator';
// import RootNavigator2 from './screens/RootNavigator2';
// import RootNavigator3 from './screens/RootNavigator3';
import RootNavigator4 from './screens/RootNavigator4';
// import RootNavigator5 from './screens/RootNavigator5';
import { PersistGate } from 'redux-persist/integration/react';
//import LoadingScreen from './screens/LoadingScreen';
import { NativeBaseProvider, extendTheme, StatusBar, useContrastText } from 'native-base';

LogBox.ignoreLogs(['NativeBase:']);

const theme = extendTheme({
  colors: {
    primary: { //Guidoli-Florio
      50: '#f1ecff',
      100: '#d4c7ef',
      200: '#b6a3de',
      300: '#997ecf',
      400: '#7c59c0',
      500: '#633fa6',
      600: '#4d3182',
      700: '#37225e',
      800: '#21143a',
      900: '#0d0519',
    }
  },
  components: {
    Input: {
      variants: {
        filled: {
          bg: 'muted.100',
          _hover: {
            bg: 'muted.50'
          },
          _focus: {
            bg: 'muted.50'
          }
        }
      },
      defaultProps: {
        size: 'md',
        //fontSize: 'lg',
        variant: 'filled',
        // py: '1',
        // px: '5',
        // bg: '#ffffff'
      }
    },
    Icon: {
      defaultProps: {
        color: 'muted.50'
      }
    },
    IconButton: {
      defaultProps: {
        size: 'md',
        m: '1',
      }
    }
  }
});

const App = () => {
  return (
    <StoreProvider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        {/* <PaperProvider
          settings={{
            icon: props => <MaterialCommunityIcons {...props} />,
          }}
          theme={CombinedDefaultTheme}
        > */}
          <NativeBaseProvider theme={theme}>
            <StatusBar />
            <RootNavigator4 />
          </NativeBaseProvider>
        {/* </PaperProvider> */}
      {/* </PersistGate> */}
    </StoreProvider>
  );
}

export default App;
