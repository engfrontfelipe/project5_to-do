import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import * as enums from "../../utils/enums/Tasks";

type FilterState = {
  term?: string | any;
  criterium: "prioridade" | "status" | "todas";
  value?: enums.PriorityEnum | enums.StatusEnum;
};

const initialState: FilterState = {
  term: "",
  criterium: "todas",
};

const sliceFilter = createSlice({
  name: "filter",
  initialState,
  reducers: {
    altern: (state, action: PayloadAction<string>) => {
      state.term = action.payload;
    },
    alternFilter: (state, action: PayloadAction<FilterState>) => {
      state.criterium = action.payload.criterium;
      state.value = action.payload.value;
    }
  },
});

export const { altern, alternFilter } = sliceFilter.actions;
export default sliceFilter.reducer;
