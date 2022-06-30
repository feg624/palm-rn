import { createSlice } from '@reduxjs/toolkit';
import { Size } from '../util/windowSizes';

export const windowDimensionSlice = createSlice({
  name: 'windowDimension',
  initialState: {
    size: Size.XS
  },
  reducers: {
    updateWindowDimension: (state, action) => {
      state.size = Size.XS
      if (action.payload.width >= 576) {
        state.size = Size.SM
        if (action.payload.width >= 768) {
          state.size = Size.MD
          if (action.payload.width >= 992) {
            state.size = Size.LG
            if (action.payload.width >= 1200) {
              state.size = Size.XL
              if (action.payload.width >= 1400) {
                state.size = Size.XXL
              }
            }
          }
        }
      }
    }
  },
});

export const { updateWindowDimension } = windowDimensionSlice.actions;

export default windowDimensionSlice.reducer;
