import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = { userId: null };

export const userSlice = createSlice({
  name: 'user',
  initialState: { value: initialStateValue },
  reducers: {
    setUserId: (state, action) => {
      state.value.userId = action.payload;
      console.log('userId:', action.payload);
    },
  },
});

export const { setUserId } = userSlice.actions;
export default userSlice.reducer;
