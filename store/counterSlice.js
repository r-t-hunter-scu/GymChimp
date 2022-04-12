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
    removeSet: (state, input) => {
      console.log(state.Elist);
      const Eidx = input.payload[1];
      const Sidx = input.payload[0];
      const val = state.Elist[Eidx].Slist[Sidx];
      const newl = state.Elist[Eidx].Slist.filter(function (ele) {
        return ele != val;
      });
      console.log(val);
      console.log(newl);
      var i = val.id - 1;
      console.log(i);
      while (i < newl.length) {
        console.log("here");
        newl[i].id -= 1;
        console.log(newl[i].id);
        i++;
      }
      console.log(newl);
      state.Elist[Eidx].Slist = newl;
      state.Elist[Eidx].Evalue -= 1;
    },
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
export const { incrementExercises, incrementSets, removeSet } =
  counterSlice.actions;

export default counterSlice.reducer;
