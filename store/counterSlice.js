import { createSlice } from "@reduxjs/toolkit";
//EList => List of exercises
//SList => List of Sets
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 2,
    Elist: [
      {
        id: 1,
        Evalue: 2,
        Ename: "Squat",
        Slist: [{ id: 1, lbs: "lbs", reps: "reps", completed: true }],
      },
    ],
  },
  reducers: {
    logSet: (state, input) => {
      console.log(input);
      const lbsString = /^\d+$/.test(input.payload[1]);
      const repsString = /^\d+$/.test(input.payload[0]);
      if (
        (lbsString || input.payload[1] == "") &&
        (repsString || input.payload[0] == "") &&
        input.payload[1].length <= 3 &&
        input.payload[0].length <= 4
      ) {
        const Eidx = input.payload[3];
        const Sidx = input.payload[2];
        const newl = state.Elist[Eidx].Slist;
        if (input.payload[1] != "") newl[Sidx].reps = input.payload[1];
        if (input.payload[0] != "") newl[Sidx].lbs = input.payload[0];
        newl[Sidx].completed = !newl[Sidx].completed;
        state.Elist[Eidx].Slist = newl;
      } else {
        alert("Enter only digits. (max: 10,000 for lbs and 1,000 for reps)");
      }
    },
    removeSet: (state, input) => {
      const Eidx = input.payload[1];
      const Sidx = input.payload[0];
      const val = state.Elist[Eidx].Slist[Sidx];
      const newl = state.Elist[Eidx].Slist.filter(function (ele) {
        return ele != val;
      });
      var i = val.id - 1;
      while (i < newl.length) {
        newl[i].id -= 1;
        i++;
      }
      state.Elist[Eidx].Slist = newl;
      state.Elist[Eidx].Evalue -= 1;
    },
    incrementSets: (state, input) => {
      const idx = input.payload;
      const id = state.Elist[idx].Evalue;
      const lbs = "lbs";
      const reps = "reps";
      const completed = false;
      const newl = state.Elist[idx].Slist.concat({ id, lbs, reps, completed });
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
          lbs: "lbs",
          reps: "reps",
        },
      ];
      const Evalue = 2;
      const id = state.value;
      const Ename = "Squat";
      const newl = state.Elist.concat({ id, Slist, Evalue, Ename });
      state.Elist = newl;
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementExercises, incrementSets, removeSet, logSet } =
  counterSlice.actions;

export default counterSlice.reducer;
