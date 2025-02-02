import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as enums from "../../utils/enums/Tasks";

type Task = {
  title: string;
  priority: enums.PriorityEnum;
  status: enums.StatusEnum;
  description: string;
  id: number;
};

const initialState: Task[] = [
  {
    title: "Estudar Js",
    priority: enums.PriorityEnum.IMPORTANT,
    status: enums.StatusEnum.PENDENTE,
    description: "",
    id: 1,
  },
  {
    title: "Estudar Ts",
    priority: enums.PriorityEnum.URGENT,
    status: enums.StatusEnum.PENDENTE,
    description: "Rever aula 2 do módulo.",
    id: 2,
  },
  {
    title: "Estudar React.Js",
    priority: enums.PriorityEnum.URGENT,
    status: enums.StatusEnum.CONCLUIDA,
    description: "Praticar useEffect.",
    id: 3,
  },

  {
    title: "Estudar Redux",
    priority: enums.PriorityEnum.URGENT,
    status: enums.StatusEnum.CONCLUIDA,
    description: "Praticar useDispatch.",
    id: 4,
  },

];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      return state.filter((task) => task.id !== action.payload);
    },
    edit: (state, action: PayloadAction<Task>) => {
      const indexForTask = state.findIndex((t) => t.id === action.payload.id);
      if (indexForTask >= 0) {
        state[indexForTask] = action.payload;
      }
    },
  },
});

export const { remove, edit } = tasksSlice.actions;
export default tasksSlice.reducer;
