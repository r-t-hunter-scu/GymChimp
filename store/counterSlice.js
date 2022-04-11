import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 2,
    Elist: [
      {
        id: 1,
        Evalue: 2,
        Slist: [{ id: 1 }],
      },
    ],
  },
  reducers: {
    incrementSets: (state, input) => {
      const idx = input.payload;
      const id = state.Elist[idx].Evalue;
      const newl = state.Elist[idx].Slist.concat({ id });
      state.Elist[idx].Slist = newl;
      state.Elist[idx].Evalue += 1;
    },
    incrementExercises: (state, num) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const Slist = [
        {
          id: 1,
        },
      ];
      const Evalue = 2;
      const id = state.value;
      const newl = state.Elist.concat({ id, Slist, Evalue });
      state.Elist = newl;
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementExercises, incrementSets } = counterSlice.actions;

export default counterSlice.reducer;
