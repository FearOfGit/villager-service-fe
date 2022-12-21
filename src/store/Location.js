import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
  latitude: null,
  longitude: null,
  name: null,
  nickname: '동네',
};

export const locationSlice = createSlice({
  name: 'location',
  initialState: { value: initialStateValue },
  reducers: {
    changeLat: (state, action) => {
      const latitude = action.payload;
      state.value.latitude = latitude;
      console.log('현재 위치에 기반한 위도:', latitude, state.value.latitude);
    },
    changeLong: (state, action) => {
      const longitude = action.payload;
      state.value.longitude = longitude;
      console.log('현재 위치에 기반한 경도:', longitude, state.value.longitude);
    },
  },
});

export const { changeLat, changeLong } = locationSlice.actions;
export default locationSlice.reducer;
