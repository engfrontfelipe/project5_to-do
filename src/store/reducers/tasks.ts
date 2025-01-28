import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import Task from "../../models/Task";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [
        new Task(
            'Estudar Js',
            'importante',
            'pendente',
            '',
            1
        ),

        new Task(
            'Estudar Ts',
            'urgente',
            'pendente',
            'Rever aula 2 do módulo.',
            2
        ),

        new Task(
            'Estudar React.Js',
            'urgente',
            'concluída',
            'Praticar useEffect.',
            3
        )
    ],
    reducers: {
        remove: (state, action: PayloadAction<number>)=>{
            state = state.filter((task) => task.id !== action.payload)
        }

    }

})

export const { remove } = tasksSlice.actions;

export default tasksSlice.reducer;
  