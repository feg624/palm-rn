import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import listaPreciosReducer from './listaPreciosSlice';
//import windowDimensionReducer from './windowDimensionSlice';
import appReducer from './appSlice'; 

import { Platform } from 'react-native';
import localforage from 'localforage';
import fsDriver, { driverKey } from 'localforage-expo-filesystem-driver';
import { persistReducer, persistStore } from 'redux-persist';

//import createTransformCompress from 'redux-persist-transform-compress';

//const compressor = createTransformCompress({});

if (Platform.OS !== 'web') { // running on a device, not on browser
  localforage.defineDriver(fsDriver);
  localforage.setDriver(driverKey);
}

const listaPreciosPersistConfig = {
  key: 'listaPrecios',
  storage: localforage,
  blacklist: ['status', 'error', 'orden']
//  transforms: [compressor],
};

const rootReducer = combineReducers({
  // listaPrecios: persistReducer(listaPreciosPersistConfig, listaPreciosReducer),
  listaPrecios: listaPreciosReducer,
  // windowDimension: windowDimensionReducer,
  app: appReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
});

const persistor = persistStore(store);

// persistor.pause(); // Do not persist automatically any change on state.
// persistor.purge();

export { store, persistor };
