import { createSlice } from "@reduxjs/toolkit";
//EList => List of exercises
//SList => List of Sets
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    CurrentExerciseModal: false,
    ExerciseSearchModal: false,
    value: 1,
    Elist: [],
  },
  reducers: {
    toggleCurrentModal: (state, input) => {
      //console.log(input);
      state.CurrentExerciseModal = !state.CurrentExerciseModal;
      //console.log(state.CurrentExerciseModal);
    },
    toggleSearchModal: (state) => {
      state.ExerciseSearchModal = !state.ExerciseSearchModal;
    },
    lbsChange: (state, input) => {
      if (state.Elist[input.payload[3]].Slist[input.payload[2]].completed) {
        state.Elist[input.payload[3]].Slist[input.payload[2]].completed = false;
      }
      state.Elist[input.payload[3]].Slist[input.payload[2]].clbs =
        input.payload[0];
    },
    repsChange: (state, input) => {
      if (state.Elist[input.payload[3]].Slist[input.payload[2]].completed) {
        state.Elist[input.payload[3]].Slist[input.payload[2]].completed = false;
      }
      state.Elist[input.payload[3]].Slist[input.payload[2]].creps =
        input.payload[1];
    },
    //Logs a set when a user clicks on the checkmark on the set component
    //various text scrubbing + checking if there is currently text input in the boxes
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
    //removes a set and decrements id's of all sets past this one
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
    //adds a set and updates the ct for past sets
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
    //adds a new exercise
    //initializes the values of the new list element as well as the new Set List values
    incrementExercises: (state, input) => {
      console.log(input);
      console.log(state.Elist);
      const Slist = [
        {
          id: 1,
          lbs: "lbs",
          reps: "reps",
        },
      ];
      const Evalue = 2;
      const id = state.value;
      const Ename = input.payload;
      const newl = state.Elist.concat({ id, Slist, Evalue, Ename });
      state.Elist = newl;
      state.value += 1;
      console.log(state.Elist);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  incrementExercises,
  incrementSets,
  removeSet,
  logSet,
  toggleCurrentModal,
  toggleSearchModal,
  lbsChange,
  repsChange,
} = counterSlice.actions;

export default counterSlice.reducer;
