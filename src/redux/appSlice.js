import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    currentScreen: null,
  },
  reducers: {
    updateCurrentScreen: (state, action) => {
      state.currentScreen = action.payload;
    },
  },
});

export const { updateCurrentScreen } = appSlice.actions;

export default appSlice.reducer;
