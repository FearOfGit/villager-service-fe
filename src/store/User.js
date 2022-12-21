import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = { userId: null, towns: [] };

export const userSlice = createSlice({
  name: 'user',
  initialState: { value: initialStateValue },
  reducers: {
    setUserId: (state, action) => {
      state.value.userId = action.payload;
      console.log('userId:', action.payload);
    },
    setTowns: (state, action) => {
      state.value.towns = action.payload;
    },
  },
});

export const { setUserId } = userSlice.actions;
export default userSlice.reducer;
