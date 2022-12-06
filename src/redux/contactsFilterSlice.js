import { createSlice } from '@reduxjs/toolkit';

const contactsFilterInitialState = '';
const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: contactsFilterInitialState,
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilter } = contactsFilterSlice.actions;
export const contactsFilterReducer = contactsFilterSlice.reducer;
