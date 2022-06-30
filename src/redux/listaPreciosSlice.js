import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchListaPrecios = createAsyncThunk(
  'listaPrecios/fetchListaPrecios',
  async (arg, thunkAPI) => {
    // const response = await fetch('https://yn9bgvzk28.execute-api.sa-east-1.amazonaws.com/dev/db/');
    // return response.json();

    return axios.get('https://yn9bgvzk28.execute-api.sa-east-1.amazonaws.com/dev/db/');
  }
)

export const ordenarPor = createAsyncThunk(
  'listaPrecios/ordenarPor',
  async (arg, thunkAPI) => {
    console.log(arg);
    return Promise.resolve(arg);
  }
)

const compareBy = (attr) => {
  return function( a, b ) {
    if ( a[attr] < b[attr] ) {
      return -1;
    }
    if ( a[attr] > b[attr] ) {
      return 1;
    }
    return 0;
  }
}

const compareByCodigo = ( a, b ) => {
  if ( a.codigo < b.codigo ) {
    return -1;
  }
  if ( a.codigo > b.codigo ) {
    return 1;
  }
  return 0;
}

const compareByDescripcion = ( a, b ) => {
  if ( a.descripcion < b.descripcion ) {
    return -1;
  }
  if ( a.descripcion > b.descripcion ) {
    return 1;
  }
  return 0;
}

function partition(keys, values, orderBy, left, right) {
  //rem that left and right are pointers.

  let pivot = values[keys[Math.floor((right + left) / 2)]][orderBy],
    i = left, //left pointer
    j = right; //right pointer

  while (i <= j) {
    //increment left pointer if the value is less than the pivot
    while (values[keys[i]][orderBy] < pivot) {
      i++;
    }

    //decrement right pointer if the value is more than the pivot
    while (values[keys[j]][orderBy] > pivot) {
      j--;
    }

    //else we swap.
    if (i <= j) {
      [keys[i], keys[j]] = [keys[j], keys[i]];
      i++;
      j--;
    }
  }

  //return the left pointer
  return i;
}

function quickSort(keys, values, orderBy, left, right) {
  let index;

  if (keys.length > 1) {
    index = partition(keys, values, orderBy, left, right); //get the left pointer returned

    if (left < index - 1) {
      //more elements on the left side
      quickSort(keys, values, orderBy, left, index - 1);
    }

    if (index < right) {
      //more elements on the right side
      quickSort(keys, values, orderBy, index, right);
    }
  }

  return keys; //return the sorted array
}

export const listaPreciosSlice = createSlice({
  name: 'listaPrecios',
  initialState: {
    status: 'idle',
    error: null,
    productos: [],
    productosIndex: {
      codigo: [],
      descripcion: [],
    },
    // productosPorCodigo: [],
    // productosPorDescripcion: [],
    orden: 'codigo',
  },
  reducers: {
    // ordenarPor: (state, action) => {
    //   state.orden = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchListaPrecios.pending, (state, action) => {
      state.status = 'loading';
    })
    .addCase(fetchListaPrecios.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.productos = action.payload.data.productos;
      state.productosIndex = {
        codigo: quickSort(Array.from(Array(action.payload.data.productos.length).keys()), action.payload.data.productos, 'codigo', 0, action.payload.data.productos.length - 1),
        descripcion: quickSort(Array.from(Array(action.payload.data.productos.length).keys()), action.payload.data.productos, 'descripcion', 0, action.payload.data.productos.length - 1),
      };
      // state.productosPorCodigo = quickSort(Array.from(Array(action.payload.data.productos.length).keys()), action.payload.data.productos, 'codigo', 0, action.payload.data.productos.length - 1);
      // state.productosPorDescripcion = quickSort(Array.from(Array(action.payload.data.productos.length).keys()), action.payload.data.productos, 'descripcion', 0, action.payload.data.productos.length - 1);
    })
    .addCase(fetchListaPrecios.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
      state.productos = [];
      state.productosIndex = {
        codigo: [],
        descripcion: [],
      };
      // state.productosPorCodigo = [];
      // state.productosPorDescripcion = [];
    })
    .addCase(ordenarPor.fulfilled, (state, action) => {
      state.orden = action.payload;
    //   switch (action.payload) {
    //     case "codigo":
    //       //state.productos = quickSort(Array.from(Array(state.productos.length).keys()), state.productos, 'codigo', 0, state.productos.length - 1);
    //       state.productos = [
    //         {
    //           codigo: '1',
    //           descripcion: 'uno'
    //         },
    //         {
    //           codigo: '2',
    //           descripcion: 'dos'
    //         },
    //       ];
    //       break;
    //     case "descripcion":
    //       //state.productos = quickSort(Array.from(Array(state.productos.length).keys()), state.productos, 'descripcion', 0, state.productos.length - 1);
    //       state.productos = [
    //         {
    //           codigo: '2',
    //           descripcion: 'dos'
    //         },
    //         {
    //           codigo: '1',
    //           descripcion: 'uno'
    //         },
    //       ];
    //       break;
    //   }
    });
  },
});

// export const { ordenarPor } = listaPreciosSlice.actions;

export default listaPreciosSlice.reducer;
