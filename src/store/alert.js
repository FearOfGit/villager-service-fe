import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
  alert: [],
  check: [],
};

export const alertSlice = createSlice({
  name: 'user',
  initialState: { value: initialStateValue },
  reducers: {
    addAlert: (state, action) => {
      if (state.value.check.includes(action.payload.partyId)) return;

      state.value.check.push(action.payload.partyId);
      state.value.alert.push(action.payload);
      console.log(action.payload);
    },
    removeAlert: (state, action) => {
      const newAlert = state.value.alert.filter(
        (el) => el.partyId !== action.payload,
      );
      state.value.alert = newAlert;
    },
  },
});

export const { addAlert, removeAlert } = alertSlice.actions;
export default alertSlice.reducer;
