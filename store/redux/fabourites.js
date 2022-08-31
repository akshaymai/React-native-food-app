import { createSlice } from "@reduxjs/toolkit";

const FaboritesSlice = createSlice({
  name: "counter",

  initialState: {
    ids: [],
  },
  reducers: {
    addFaborites: (state, action) => {
      state.ids.push(action.payload.id);
    },
    remoFaborites: (state, action) => { 
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFaborites = FaboritesSlice.actions.addFaborites;
export const removeFaborites = FaboritesSlice.actions.remoFaborites;
export default FaboritesSlice.reducer;
