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
    register: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
      const existTask = state.find(
        (task) =>
          task.title.toLowerCase() === action.payload.title.toLowerCase(),
      );
      if (existTask) {
        alert("Já existe uma tarefa com esse nome.");
      } else {
        const lastTask = state[state.length -1]
        const newTask = {
          ...action.payload,
          id: lastTask ? lastTask.id + 1 : 1
        } 
        state.push(newTask);
      }
    },
    alternStatus: (
      state,
      action: PayloadAction<{ id: number; finish: boolean }>,
    ) => {
      const indexForTask = state.findIndex((t) => t.id === action.payload.id);

      if (indexForTask >= 0) {
        state[indexForTask].status = action.payload.finish
          ? enums.StatusEnum.CONCLUIDA
          : enums.StatusEnum.PENDENTE;
      }
    },
  },                      
});

export const { remove, edit, register, alternStatus } = tasksSlice.actions;
export default tasksSlice.reducer;
